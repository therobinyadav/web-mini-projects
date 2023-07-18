'use strict';

const timerEl = document.querySelector('.timer');
const btnStartEl = document.querySelector('.btn-start');
const btnStopEl = document.querySelector('.btn-stop');
const btnResetEl = document.querySelector('.btn-reset');

let timerInterval;
let timeLeft = 1500; // 25 Minutes = 1500 Seconds
let timerStarted = false;

const updateTimer = function () {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime =
    `${minutes}`.padStart(2, '0') + ':' + `${seconds}`.padStart(2, '0');
  timerEl.textContent = formattedTime;
};

// Displaying initial timer value
updateTimer();

const startTimer = function () {
  if (!timerStarted) {
    timerStarted = true;
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        alert('Well done! Now you can have a break.');
        timeLeft = 1500;
        timerStarted = false;
      }
    }, 1000);
  }
};

const stopTimer = function () {
  clearInterval(timerInterval);
  timerStarted = false;
};

const resetTimer = function () {
  timeLeft = 1500;
  updateTimer();
};

btnStartEl.addEventListener('click', startTimer);
btnStopEl.addEventListener('click', stopTimer);
btnResetEl.addEventListener('click', resetTimer);
