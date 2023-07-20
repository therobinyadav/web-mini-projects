'use strict';

const KEY = 'e44c5a643b00f2ae44df6ad5867b5b68';

const weatherDataEl = document.querySelector('.weather-data');
const cityInputEl = document.querySelector('.city-input');
const getWeatherBtnEL = document.querySelector('.btn-get-weather');

const getWeatherData = async function (API_KEY, city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  const data = await res.json();
  return {
    icon: data.weather[0].icon,
    temperature: Math.round(data.main.temp - 273.15),
    description: data.weather[0].description,
    feelsLike: Math.round(data.main.feels_like - 273.15),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
};

const renderData = function (weatherDataObj) {
  weatherDataEl.innerHTML = '';
  const markup = `
    <img class="weather-icon" src="http://openweathermap.org/img/wn/${weatherDataObj.icon}.png" alt="${weatherDataObj.description} icon" />
    <p class="temperature">${weatherDataObj.temperature}&deg;C</p>
    <p class="description">${weatherDataObj.description}</p>
    <div class="weather-details">
      <span class="feels-like">Feels like: ${weatherDataObj.feelsLike}</span>
      <span class="humidity">Humidity: ${weatherDataObj.humidity}%</span>
      <span class="wind-speed">Wind speed: ${weatherDataObj.windSpeed}m/s</span>
    </div>
  `;
  weatherDataEl.insertAdjacentHTML('beforeend', markup);
};

getWeatherBtnEL.addEventListener('click', function (e) {
  e.preventDefault();
  getWeatherData(KEY, cityInputEl.value).then(data => renderData(data));
});
