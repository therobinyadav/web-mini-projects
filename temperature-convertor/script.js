'use strict';

const celsiusInputEl = document.querySelector('.input-celsius');
const fahrenheitInputEl = document.querySelector('.input-fahrenheit');
const kelvinInputEl = document.querySelector('.input-kelvin');

celsiusInputEl.addEventListener('input', function () {
  const celsius = Number(celsiusInputEl.value);
  fahrenheitInputEl.value = (celsius * 1.8 + 32).toFixed(2);
  kelvinInputEl.value = (celsius + 273.15).toFixed(2);
});

fahrenheitInputEl.addEventListener('input', function () {
  const fahrenheit = Number(fahrenheitInputEl.value);
  celsiusInputEl.value = ((fahrenheit - 32) * (5 / 9)).toFixed(2);
  kelvinInputEl.value = (+celsiusInputEl.value + 273.15).toFixed(2);
});

kelvinInputEl.addEventListener('input', function () {
  const kelvin = Number(kelvinInputEl.value);
  celsiusInputEl.value = (kelvin - 273.15).toFixed(2);
  fahrenheitInputEl.value = (+celsiusInputEl.value * 1.8 + 32).toFixed(2);
});
