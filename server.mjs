import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const port = Number(process.env.PORT) || 3000;
const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';
const requestWindows = new Map();
const weatherCache = new Map();
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

function sendJson(response, status, data) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  response.end(JSON.stringify(data));
}

async function fetchWeatherJson(url) {
  let lastError;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
      if (!response.ok) {
        const error = new Error(`Serviço meteorológico respondeu ${response.status}.`);
        if (response.status < 500 && response.status !== 429) throw error;
        lastError = error;
      } else {
        return await response.json();
      }
    } catch (error) {
      if (attempt === 1 || (error.message.startsWith('Serviço meteorológico respondeu') && !error.message.includes('429') && !error.message.includes('5'))) {
        throw error;
      }
      lastError = error;
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 400));
  }
  throw lastError;
}

async function readJson(request) {
  let body = '';
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 12000) throw new Error('Corpo da solicitação muito grande.');
  }
  return JSON.parse(body);
}

async function getWeather(city) {
  const cacheKey = city.toLocaleLowerCase('pt-BR');
  const cached = weatherCache.get(cacheKey);
  if (cached && Date.now() - cached.cachedAt < 5 * 60 * 1000) return cached.data;

  const geocodingUrl = new URL('https://geocoding-api.open-meteo.com/v1/search');
  geocodingUrl.search = new URLSearchParams({ name: city, count: '1', language: 'pt', format: 'json' });
  const locations = (await fetchWeatherJson(geocodingUrl)).results;
  if (!locations?.length) return null;

  const location = locations[0];
  const forecastUrl = new URL('https://api.open-meteo.com/v1/forecast');
  forecastUrl.search = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,rain,showers,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_gusts_10m,wind_direction_10m,is_day',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,sunrise,sunset',
    forecast_days: '5',
    timezone: 'auto',
    wind_speed_unit: 'kmh'
  });
  const forecast = await fetchWeatherJson(forecastUrl);

  const weather = {
    location: {
      name: location.name,
      region: location.admin1 || '',
      country: location.country || '',
      timezone: forecast.timezone
    },
    current: {
      time: forecast.current.time,
      temperature: forecast.current.temperature_2m,
      feelsLike: forecast.current.apparent_temperature,
      humidity: forecast.current.relative_humidity_2m,
      precipitation: forecast.current.precipitation,
      rain: forecast.current.rain,
      showers: forecast.current.showers,
      weatherCode: forecast.current.weather_code,
      cloudCover: forecast.current.cloud_cover,
      pressure: forecast.current.pressure_msl,
      windSpeed: forecast.current.wind_speed_10m,
      windGusts: forecast.current.wind_gusts_10m,
      windDirection: forecast.current.wind_direction_10m,
      isDay: forecast.current.is_day
    },
    daily: forecast.daily.time.map((date, index) => ({
      date,
      weatherCode: forecast.daily.weather_code[index],
      min: forecast.daily.temperature_2m_min[index],
      max: forecast.daily.temperature_2m_max[index],
      precipitationProbability: forecast.daily.precipitation_probability_max[index],
      precipitation: forecast.daily.precipitation_sum[index],
      windSpeedMax: forecast.daily.wind_speed_10m_max[index],
      sunrise: forecast.daily.sunrise[index],
      sunset: forecast.daily.sunset[index]
    })),
    source: 'Open-Meteo',
    attribution: 'https://open-meteo.com/',
    fetchedAt: new Date().toISOString()
  };
  weatherCache.set(cacheKey, { data: weather, cachedAt: Date.now() });
  return weather;
}

async function handleWeather(request, response, url) {
  const city = url.searchParams.get('city')?.trim();
  if (!city || city.length > 100) {
    sendJson(response, 400, { error: 'Informe uma cidade válida.' });
    return;
  }
  const weather = await getWeather(city);
  if (!weather) {
    sendJson(response, 404, { error: 'Cidade não encontrada. Tente informar também o estado ou país.' });
    return;
  }
  sendJson(response, 200, weather);
}

async function handleAssistant(request, response) {
  if (!process.env.OPENROUTER_API_KEY) {
    sendJson(response, 503, { error: 'Assistente indisponível: configure OPENROUTER_API_KEY no servidor.' });
    return;
  }

  const body = await readJson(request);
  const city = typeof body.city === 'string' ? body.city.trim() : '';
  const question = typeof body.question === 'string' ? body.question.trim() : '';
  if (!city || city.length > 100 || !question || question.length > 1000) {
    sendJson(response, 400, { error: 'Informe uma cidade e uma pergunta de até 1000 caracteres.' });
    return;
  }

  const weather = await getWeather(city);
  if (!weather) {
    sendJson(response, 404, { error: 'Cidade não encontrada. Tente informar também o estado ou país.' });
    return;
  }

  const history = Array.isArray(body.history)
    ? body.history.slice(-6).filter((item) =>
      ['user', 'assistant'].includes(item?.role) &&
      typeof item.content === 'string' && item.content.length <= 1000
    ).map(({ role, content }) => ({ role, content }))
    : [];
  const apiResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.PUBLIC_SITE_URL || `http://localhost:${port}`,
      'X-Title': 'INFM Assistente Meteorológico'
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      max_tokens: 500,
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente meteorológico em português do Brasil. Responda com clareza e concisão. Use os dados meteorológicos JSON abaixo como fonte para condições atuais e previsão; não invente medições, previsões, alertas ou certezas. Diferencie observação atual de previsão e explique incertezas. Para perguntas conceituais de meteorologia, explique os conceitos sem afirmar que são medições locais. Não declare alertas oficiais: oriente a consultar INMET e Defesa Civil para avisos e decisões de segurança. Dados atuais e previsão da cidade solicitada: ' + JSON.stringify(weather)
        },
        ...history,
        { role: 'user', content: question }
      ]
    }),
    signal: AbortSignal.timeout(30000)
  });
  const result = await apiResponse.json();
  if (!apiResponse.ok) {
    const message = result.error?.message || 'O provedor de IA não conseguiu responder.';
    sendJson(response, apiResponse.status === 429 ? 429 : 502, { error: message });
    return;
  }
  const answer = result.choices?.[0]?.message?.content;
  if (typeof answer !== 'string' || !answer.trim()) {
    sendJson(response, 502, { error: 'O provedor de IA retornou uma resposta vazia.' });
    return;
  }
  sendJson(response, 200, { answer: answer.trim(), weather });
}

async function serveStatic(response, pathname) {
  const decodedPath = decodeURIComponent(pathname);
  let filePath = resolve(root, `.${decodedPath === '/' ? '/index.html' : decodedPath}`);
  if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  try {
    const fileInfo = await stat(filePath);
    if (fileInfo.isDirectory()) {
      if (!decodedPath.endsWith('/')) {
        response.writeHead(301, { Location: `${decodedPath}/${new URLSearchParams().toString()}`.replace(/\/$/, '/') });
        response.end();
        return;
      }
      filePath = resolve(filePath, 'index.html');
    }
    if (!(await stat(filePath)).isFile()) throw new Error('Not a file');
    response.writeHead(200, {
      'Content-Type': contentTypes[extname(filePath)] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff'
    });
    response.end(await readFile(filePath));
  } catch {
    response.writeHead(404).end('Not found');
  }
}

function isRateLimited(request, route) {
  const now = Date.now();
  const key = `${request.socket.remoteAddress}:${route}`;
  const limit = route === 'assistant' ? 10 : 60;
  const windowMs = 10 * 60 * 1000;
  const current = requestWindows.get(key);
  if (!current || now - current.startedAt >= windowMs) {
    requestWindows.set(key, { startedAt: now, count: 1 });
    return false;
  }
  if (current.count >= limit) return true;
  current.count += 1;
  return false;
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
    if (request.method === 'GET' && url.pathname === '/api/weather') {
      if (isRateLimited(request, 'weather')) {
        sendJson(response, 429, { error: 'Muitas consultas. Aguarde alguns minutos e tente novamente.' });
        return;
      }
      await handleWeather(request, response, url);
    } else if (request.method === 'POST' && url.pathname === '/api/assistant') {
      if (isRateLimited(request, 'assistant')) {
        sendJson(response, 429, { error: 'Limite de perguntas atingido. Aguarde alguns minutos e tente novamente.' });
        return;
      }
      await handleAssistant(request, response);
    } else if (request.method === 'GET') {
      await serveStatic(response, url.pathname);
    } else {
      sendJson(response, 405, { error: 'Método não permitido.' });
    }
  } catch (error) {
    console.error('Falha ao atender solicitação:', error.name, error.message);
    const message = error.name === 'TimeoutError'
      ? 'A consulta meteorológica demorou demais. Tente novamente.'
      : 'Não foi possível concluir a consulta meteorológica.';
    sendJson(response, 502, { error: message });
  }
});

server.listen(port, () => {
  console.log(`INFM disponível em http://localhost:${port}`);
});