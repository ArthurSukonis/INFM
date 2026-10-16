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

  const cityForecasts = {
    sp: {
      name: 'São Paulo',
      condition: 'Tempestades isoladas',
      icon: '⛈️',
      temp: 25,
      realFeel: 28,
      humidity: 72,
      rainChance: 54,
      wind: 31,
      forecast: [
        { day: 'Seg', icon: '⛈️', min: 20, max: 27 },
        { day: 'Ter', icon: '🌧️', min: 19, max: 25 },
        { day: 'Qua', icon: '🌤️', min: 18, max: 26 },
        { day: 'Qui', icon: '⛈️', min: 19, max: 28 },
        { day: 'Sex', icon: '🌦️', min: 20, max: 29 }
      ]
    },
    rio: {
      name: 'Rio de Janeiro',
      condition: 'Chuvas rápidas e ventos de quadrante sul',
      icon: '🌧️',
      temp: 27,
      realFeel: 30,
      humidity: 69,
      rainChance: 62,
      wind: 24,
      forecast: [
        { day: 'Seg', icon: '🌧️', min: 23, max: 28 },
        { day: 'Ter', icon: '🌦️', min: 22, max: 29 },
        { day: 'Qua', icon: '⛈️', min: 23, max: 30 },
        { day: 'Qui', icon: '🌤️', min: 22, max: 29 },
        { day: 'Sex', icon: '🌧️', min: 23, max: 27 }
      ]
    },
    bh: {
      name: 'Belo Horizonte',
      condition: 'Instabilidade local com rajadas',
      icon: '🌤️',
      temp: 23,
      realFeel: 25,
      humidity: 64,
      rainChance: 46,
      wind: 18,
      forecast: [
        { day: 'Seg', icon: '🌤️', min: 18, max: 24 },
        { day: 'Ter', icon: '⛈️', min: 18, max: 25 },
        { day: 'Qua', icon: '🌦️', min: 17, max: 24 },
        { day: 'Qui', icon: '🌧️', min: 17, max: 23 },
        { day: 'Sex', icon: '🌤️', min: 18, max: 25 }
      ]
    },
    rec: {
      name: 'Recife',
      condition: 'Brisa úmida e pancadas de chuva',
      icon: '🌦️',
      temp: 29,
      realFeel: 32,
      humidity: 75,
      rainChance: 68,
      wind: 20,
      forecast: [
        { day: 'Seg', icon: '🌦️', min: 25, max: 30 },
        { day: 'Ter', icon: '🌧️', min: 25, max: 29 },
        { day: 'Qua', icon: '🌤️', min: 26, max: 31 },
        { day: 'Qui', icon: '🌧️', min: 25, max: 30 },
        { day: 'Sex', icon: '⛈️', min: 25, max: 31 }
      ]
    }
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
      if (Object.hasOwn(cityForecasts, saved.city)) preferences.city = saved.city;
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

  function renderForecast(cityKey) {
    const city = cityForecasts[cityKey];
    if (!city) return;

    cityNameEl.textContent = city.name;
    cityConditionEl.textContent = city.condition;
    tempNumberEl.textContent = `${city.temp}°`;
    realFeelEl.textContent = `${city.realFeel}°C`;
    humidityEl.textContent = `${city.humidity}%`;
    rainChanceEl.textContent = `${city.rainChance}%`;
    windEl.textContent = `${city.wind} km/h`;
    weatherIconEl.textContent = city.icon;

    forecastDaysEl.innerHTML = city.forecast.map((day) => `
      <article class="day-card">
        <div class="day-name">${day.day}</div>
        <div class="day-icon">${day.icon}</div>
        <div class="day-temp">${day.max}°</div>
        <div class="day-range">${day.min}° / ${day.max}°</div>
      </article>
    `).join('');

    cityInput.value = city.name;
    cityButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.city === cityKey);
    });
  }

  cityButtons.forEach((button) => {
    button.addEventListener('click', () => {
      preferences.city = button.dataset.city;
      renderForecast(preferences.city);
      savePreferences();
    });
  });

  function handleCitySearch() {
    const value = cityInput.value.trim().toLowerCase();
    const keyMap = {
      'sao paulo': 'sp',
      'são paulo': 'sp',
      'rio de janeiro': 'rio',
      'rj': 'rio',
      'belo horizonte': 'bh',
      'bh': 'bh',
      'recife': 'rec'
    };

    const key = keyMap[value] || value;
    if (cityForecasts[key]) {
      preferences.city = key;
      renderForecast(preferences.city);
      savePreferences();
    } else {
      cityConditionEl.textContent = 'Consulta sem dados em demonstração.';
    }
  }

  searchButton.addEventListener('click', handleCitySearch);
  cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleCitySearch();
    }
  });

  renderForecast(preferences.city);

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
