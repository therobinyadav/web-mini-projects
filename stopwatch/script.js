'use strict';

const btnStartEl = document.querySelector('.btn-start');
const btnStopEl = document.querySelector('.btn-stop');
const btnResetEl = document.querySelector('.btn-reset');
const stopwatchEl = document.querySelector('.stopwatch');

let stopwatchInterval;
let startTime = 0;
let elapsedTime = 0;
let stopwatchStarted = false;

const updateStopwatch = function () {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  stopwatchEl.textContent =
    `${hours}`.padStart(2, '0') +
    ':' +
    `${minutes}`.padStart(2, '0') +
    ':' +
    `${seconds}`.padStart(2, '0') +
    '.' +
    `${milliseconds}`.padStart(2, '0');
};

const startStopwatch = function () {
  if (!stopwatchStarted) {
    stopwatchStarted = true;
    startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateStopwatch();
    }, 10);
  }
};

const stopStopwatch = function () {
  clearInterval(stopwatchInterval);
  stopwatchStarted = false;
};

const resetStopwatch = function () {
  elapsedTime = 0;
  clearInterval(stopwatchInterval);
  stopwatchStarted = false;
  updateStopwatch();
};

btnStartEl.addEventListener('click', startStopwatch);
btnStopEl.addEventListener('click', stopStopwatch);
btnResetEl.addEventListener('click', resetStopwatch);
