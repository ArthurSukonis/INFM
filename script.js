document.addEventListener('DOMContentLoaded', () => {
  const alerts = [
    {
      level: 'severe',
      title: 'Alerta de tempestades severas',
      region: 'Sudeste e Centro-Oeste',
      validity: '12h',
      risk: 'Alta',
      precautions: ['Evite deslocamentos em rodovias críticas', 'Desligue equipamentos sensíveis em áreas expostas', 'Acompanhe atualizações em intervalos de 30 minutos']
    },
    {
      level: 'warning',
      title: 'Rajadas intensas e granizo',
      region: 'Região metropolitana de São Paulo',
      validity: '06h',
      risk: 'Moderada',
      precautions: ['Proteja veículos e estruturas leves', 'Mantenha-se afastado de árvores altas', 'Observe riscos em eventos ao ar livre']
    },
    {
      level: 'watch',
      title: 'Linha de instabilidade',
      region: 'Triângulo Mineiro e Vale do Paraíba',
      validity: '18h',
      risk: 'Média',
      precautions: ['Monitore a evolução do campo convectivo', 'Prepare planos de resposta local', 'Confirme as zonas de risco em atualizações setoriais']
    }
  ];

  const cityLocations = {
    sp: 'São Paulo',
    rio: 'Rio de Janeiro',
    bh: 'Belo Horizonte',
    rec: 'Recife'
  };

  const stateDetails = {
    sp: {
      name: 'São Paulo',
      tag: 'Monitorado',
      condition: 'Instabilidade moderada com granizo e rajadas',
      risk: 'Nível 3 / Severidade alta',
      impact: '37% de chance de tempestades isoladas',
      alert: 'Rajadas de até 70 km/h'
    },
    rj: {
      name: 'Rio de Janeiro',
      tag: 'Alerta',
      condition: 'Pancadas com descargas elétricas e vento',
      risk: 'Nível 2 / Atenção',
      impact: 'Áreas costeiras com risco de queda de energia',
      alert: 'Ventos de 35 a 50 km/h'
    },
    mg: {
      name: 'Minas Gerais',
      tag: 'Vigilância',
      condition: 'Celular convectiva em formação',
      risk: 'Nível 2 / Cuidado',
      impact: 'Instabilidade em áreas serranas',
      alert: 'Risco de granizo e descargas frequentes'
    },
    pr: {
      name: 'Paraná',
      tag: 'Severo',
      condition: 'Linha de instabilidade com ventos de direção sul',
      risk: 'Nível 3 / Considerável',
      impact: 'Áreas do litoral e planalto afetadas',
      alert: 'Rajadas acima de 70 km/h'
    },
    rs: {
      name: 'Rio Grande do Sul',
      tag: 'Alerta',
      condition: 'Chuva intensa em áreas de relevo',
      risk: 'Nível 2 / Atenção',
      impact: 'Concentração de precipitação em curtos intervalos',
      alert: 'Atenção à acúmulo de água e quedas de árvores'
    },
    ba: {
      name: 'Bahia',
      tag: 'Estável',
      condition: 'Condições de ar quente e temporais locais',
      risk: 'Nível 1 / Observação',
      impact: 'Baixa ocorrência de tempestades severas',
      alert: 'Risco de pancadas isoladas'
    },
    pe: {
      name: 'Pernambuco',
      tag: 'Vigiado',
      condition: 'Chuvas de intensidade moderada a forte',
      risk: 'Nível 2 / Monitoramento',
      impact: 'Atenção à drenagem e áreas baixas',
      alert: 'Pancadas de 20 a 40 mm/h'
    },
    ce: {
      name: 'Ceará',
      tag: 'Alerta',
      condition: 'Tempestades de tarde e potencial para rajadas',
      risk: 'Nível 2 / Moderado',
      impact: 'Áreas da zona leste com risco de queda de energia',
      alert: 'Ventos de até 60 km/h'
    }
  };

  const storageKey = 'infm-demo-preferences-v1';
  const preferences = {
    city: 'sp',
    filter: 'all',
    layer: 'Chuva',
    radarScale: 1,
    state: 'sp'
  };
  const saveStatus = document.getElementById('saveStatus');
  let storageAvailable = true;

  function showSaveStatus(message) {
    saveStatus.textContent = message;
  }

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && typeof saved === 'object') {
      if (Object.hasOwn(cityLocations, saved.city)) preferences.city = saved.city;
      if (['all', 'severe', 'warning', 'watch'].includes(saved.filter)) preferences.filter = saved.filter;
      if (['Chuva', 'Vento', 'Nuvens'].includes(saved.layer)) preferences.layer = saved.layer;
      if (typeof saved.radarScale === 'number' && Number.isFinite(saved.radarScale)) {
        preferences.radarScale = Math.min(1.45, Math.max(0.9, saved.radarScale));
      }
      if (Object.hasOwn(stateDetails, saved.state)) preferences.state = saved.state;
    }
  } catch (error) {
    storageAvailable = false;
    showSaveStatus('Não foi possível carregar as preferências salvas neste navegador.');
    console.error('Falha ao carregar preferências locais:', error);
  }

  function savePreferences() {
    if (!storageAvailable) {
      showSaveStatus('Preferências aplicadas nesta sessão; o armazenamento do navegador está indisponível.');
      return;
    }
    try {
      localStorage.setItem(storageKey, JSON.stringify(preferences));
      showSaveStatus('Preferências salvas neste navegador.');
    } catch (error) {
      storageAvailable = false;
      showSaveStatus('Não foi possível salvar preferências neste navegador.');
      console.error('Falha ao salvar preferências locais:', error);
    }
  }

  const alertList = document.getElementById('alert-list');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderAlerts(filter = preferences.filter) {
    const filtered = filter === 'all' ? alerts : alerts.filter((alert) => alert.level === filter);

    alertList.innerHTML = filtered.map((alert) => `
      <article class="alert-card level-${alert.level}">
        <div class="alert-top">
          <span class="alert-badge">${alert.level === 'severe' ? 'Severo' : alert.level === 'warning' ? 'Atencão' : 'Vigilância'}</span>
          <span class="tiny-meta">${alert.validity}</span>
        </div>
        <h3 class="alert-title">${alert.title}</h3>
        <div class="alert-meta">
          <div><span>Região</span><strong>${alert.region}</strong></div>
          <div><span>Validade</span><strong>${alert.validity}</strong></div>
          <div><span>Risco</span><strong>${alert.risk}</strong></div>
        </div>
        <ul>
          ${alert.precautions.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
    `).join('');

    filterButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.filter === filter);
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      preferences.filter = button.dataset.filter;
      renderAlerts(preferences.filter);
      savePreferences();
    });
  });

  renderAlerts(preferences.filter);

  const cityInput = document.getElementById('cityInput');
  const searchButton = document.getElementById('searchCity');
  const cityButtons = document.querySelectorAll('.city-pill');
  const cityNameEl = document.getElementById('cityName');
  const cityConditionEl = document.getElementById('cityCondition');
  const tempNumberEl = document.getElementById('tempNumber');
  const realFeelEl = document.getElementById('realFeel');
  const humidityEl = document.getElementById('humidity');
  const rainChanceEl = document.getElementById('rainChance');
  const windEl = document.getElementById('wind');
  const weatherIconEl = document.getElementById('weatherIcon');
  const forecastDaysEl = document.getElementById('forecast-days');
  const forecastStatusEl = document.getElementById('forecastStatus');
  let forecastRequestId = 0;

  async function fetchOpenMeteoWeather(locationName) {
    const geocodingUrl = new URL('https://geocoding-api.open-meteo.com/v1/search');
    geocodingUrl.search = new URLSearchParams({ name: locationName, count: '1', language: 'pt', format: 'json' });
    const geocodingResponse = await fetch(geocodingUrl);
    if (!geocodingResponse.ok) throw new Error('Não foi possível consultar a localização.');
    const location = (await geocodingResponse.json()).results?.[0];
    if (!location) throw new Error('Cidade não encontrada. Tente informar também o estado ou país.');

    const forecastUrl = new URL('https://api.open-meteo.com/v1/forecast');
    forecastUrl.search = new URLSearchParams({
      latitude: String(location.latitude),
      longitude: String(location.longitude),
      current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
      forecast_days: '5',
      timezone: 'auto',
      wind_speed_unit: 'kmh'
    });
    const forecastResponse = await fetch(forecastUrl);
    if (!forecastResponse.ok) throw new Error('Não foi possível carregar a previsão do tempo.');
    const forecast = await forecastResponse.json();

    return {
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
        weatherCode: forecast.current.weather_code,
        windSpeed: forecast.current.wind_speed_10m,
        isDay: forecast.current.is_day
      },
      daily: forecast.daily.time.map((date, index) => ({
        date,
        weatherCode: forecast.daily.weather_code[index],
        min: forecast.daily.temperature_2m_min[index],
        max: forecast.daily.temperature_2m_max[index],
        precipitationProbability: forecast.daily.precipitation_probability_max[index]
      }))
    };
  }

  async function fetchWeather(locationName) {
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(locationName)}`);
      if (response.ok) return await response.json();
    } catch {
      // Static hosts do not provide the optional Node API.
    }
    return fetchOpenMeteoWeather(locationName);
  }

  function describeWeather(code) {
    if (code === 0) return 'Céu limpo';
    if ([1, 2].includes(code)) return 'Predomínio de sol e nuvens';
    if (code === 3) return 'Céu encoberto';
    if ([45, 48].includes(code)) return 'Neblina';
    if ([51, 53, 55, 56, 57].includes(code)) return 'Garoa';
    if ([61, 63, 65, 66, 67].includes(code)) return 'Chuva';
    if ([71, 73, 75, 77].includes(code)) return 'Neve';
    if ([80, 81, 82, 85, 86].includes(code)) return 'Pancadas';
    if ([95, 96, 99].includes(code)) return 'Trovoadas';
    return 'Condição variável';
  }

  function iconForWeather(code, isDay = true) {
    if (code === 0) return isDay ? '☀️' : '🌙';
    if ([1, 2].includes(code)) return isDay ? '🌤️' : '☁️';
    if (code === 3) return '☁️';
    if ([45, 48].includes(code)) return '🌫️';
    if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return '🌧️';
    if ([71, 73, 75, 77, 85, 86].includes(code)) return '🌨️';
    if ([95, 96, 99].includes(code)) return '⛈️';
    return '🌡️';
  }

  async function renderForecast(locationName) {
    const requestId = ++forecastRequestId;
    cityNameEl.textContent = locationName;
    forecastStatusEl.textContent = 'Consultando previsão atualizada...';
    cityConditionEl.textContent = 'Buscando condições atuais...';
    tempNumberEl.textContent = '--';
    realFeelEl.textContent = '--';
    humidityEl.textContent = '--';
    rainChanceEl.textContent = '--';
    windEl.textContent = '--';
    forecastDaysEl.replaceChildren();

    try {
      const weather = await fetchWeather(locationName);
      if (requestId !== forecastRequestId) return;

      const { current, daily, location } = weather;
      cityNameEl.textContent = [location.name, location.region].filter(Boolean).join(', ');
      cityConditionEl.textContent = describeWeather(current.weatherCode);
      tempNumberEl.textContent = `${Math.round(current.temperature)}°`;
      realFeelEl.textContent = `${Math.round(current.feelsLike)}°C`;
      humidityEl.textContent = `${current.humidity}%`;
      rainChanceEl.textContent = `${daily[0].precipitationProbability ?? '—'}%`;
      windEl.textContent = `${Math.round(current.windSpeed)} km/h`;
      weatherIconEl.textContent = iconForWeather(current.weatherCode, current.isDay === 1);

      forecastDaysEl.innerHTML = daily.map((day) => `
      <article class="day-card">
        <div class="day-name">${new Intl.DateTimeFormat('pt-BR', { weekday: 'short', timeZone: 'UTC' }).format(new Date(`${day.date}T12:00:00Z`))}</div>
        <div class="day-icon">${iconForWeather(day.weatherCode)}</div>
        <div class="day-temp">${day.max}°</div>
        <div class="day-range">${day.min}° / ${day.max}°</div>
      </article>
    `).join('');

      cityInput.value = location.name;
      forecastStatusEl.textContent = `Atualizado ${current.time.replace('T', ' ')} (${location.timezone}).`;
      const selectedCity = Object.entries(cityLocations).find(([, name]) => name.toLowerCase() === location.name.toLowerCase())?.[0];
    cityButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.city === selectedCity);
      });
    } catch (error) {
      if (requestId !== forecastRequestId) return;
      cityConditionEl.textContent = error.message;
      forecastStatusEl.textContent = 'Previsão indisponível. Verifique a conexão e tente novamente.';
      forecastDaysEl.replaceChildren();
    }
  }

  cityButtons.forEach((button) => {
    button.addEventListener('click', () => {
      preferences.city = button.dataset.city;
      renderForecast(cityLocations[preferences.city]);
      savePreferences();
    });
  });

  function handleCitySearch() {
    const locationName = cityInput.value.trim();
    if (!locationName) return;
    const selectedCity = Object.entries(cityLocations).find(([, name]) => name.toLowerCase() === locationName.toLowerCase())?.[0];
    if (selectedCity) preferences.city = selectedCity;
    renderForecast(locationName);
    savePreferences();
  }

  searchButton.addEventListener('click', handleCitySearch);
  cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleCitySearch();
    }
  });

  renderForecast(cityLocations[preferences.city]);

  const assistantForm = document.getElementById('assistantForm');
  const assistantQuestion = document.getElementById('assistantQuestion');
  const assistantMessages = document.getElementById('assistantMessages');
  const assistantStatus = document.getElementById('assistantStatus');
  const assistantSubmit = document.getElementById('assistantSubmit');
  const weatherConversation = [];

  function addAssistantMessage(role, content) {
    const message = document.createElement('p');
    message.className = `assistant-message ${role}`;
    message.textContent = content;
    assistantMessages.append(message);
  }

  assistantForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const question = assistantQuestion.value.trim();
    if (!question) return;

    addAssistantMessage('user', question);
    assistantQuestion.value = '';
    assistantStatus.textContent = 'Consultando previsão e preparando resposta...';
    assistantSubmit.disabled = true;

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          city: cityInput.value.trim() || 'São Paulo',
          question,
          history: weatherConversation.slice(-6)
        })
      });
      if (response.status === 404) {
        throw new Error('Assistente indisponível nesta publicação estática. Ele requer servidor Node e configuração protegida da API.');
      }
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Não foi possível obter uma resposta.');

      weatherConversation.push({ role: 'user', content: question }, { role: 'assistant', content: result.answer });
      addAssistantMessage('assistant', result.answer);
      assistantStatus.textContent = `Resposta baseada nos dados do Open-Meteo para ${result.weather.location.name}, em ${result.weather.current.time.replace('T', ' ')}.`;
    } catch (error) {
      assistantStatus.textContent = error.message;
    } finally {
      assistantSubmit.disabled = false;
    }
  });

  const radarCanvas = document.getElementById('radarCanvas');
  const zoomButtons = document.querySelectorAll('.zoom-button');
  let radarScale = preferences.radarScale;
  radarCanvas.style.setProperty('--radar-scale', radarScale);

  zoomButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = Number(button.dataset.zoom);
      radarScale = Math.round(Math.min(1.45, Math.max(0.9, radarScale + direction * 0.12)) * 100) / 100;
      radarCanvas.style.setProperty('--radar-scale', radarScale);
      preferences.radarScale = radarScale;
      savePreferences();
    });
  });

  const layerButtons = document.querySelectorAll('.layer-button');
  layerButtons.forEach((button) => {
    button.classList.toggle('active', button.textContent.trim() === preferences.layer);
  });
  layerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      layerButtons.forEach((item) => item.classList.toggle('active', item === button));
      preferences.layer = button.textContent.trim();
      savePreferences();
    });
  });

  const stateButtons = document.querySelectorAll('.state-marker');
  const stateTitle = document.getElementById('stateTitle');
  const stateTag = document.getElementById('stateTag');
  const stateCondition = document.getElementById('stateCondition');
  const stateRisk = document.getElementById('stateRisk');
  const stateImpact = document.getElementById('stateImpact');
  const stateAlert = document.getElementById('stateAlert');

  function renderState(nameKey) {
    const state = stateDetails[nameKey];
    if (!state) return;

    stateTitle.textContent = state.name;
    stateTag.textContent = state.tag;
    stateCondition.textContent = state.condition;
    stateRisk.textContent = state.risk;
    stateImpact.textContent = state.impact;
    stateAlert.textContent = state.alert;

    stateButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.state === nameKey);
    });
  }

  stateButtons.forEach((button) => {
    button.addEventListener('click', () => {
      preferences.state = button.dataset.state;
      renderState(preferences.state);
      savePreferences();
    });
  });

  renderState(preferences.state);

  const yearEl = document.getElementById('currentYear');
  yearEl.textContent = new Date().getFullYear();
  if (storageAvailable) {
    showSaveStatus('Preferências salvas somente neste navegador.');
  }
});
