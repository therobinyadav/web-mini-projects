'use strict';

const btnEl = document.querySelector('.btn');
const billInputEl = document.querySelector('.bill-input');
const tipInputEl = document.querySelector('.tip-input');
const resultEL = document.querySelector('.result');

// Initialization
(function () {
  billInputEl.setAttribute('min', 0);
  tipInputEl.setAttribute('min', 0);
  tipInputEl.setAttribute('max', 100);
})();

btnEl.addEventListener('click', function (e) {
  e.preventDefault();

  if (billInputEl.value < 0) {
    billInputEl.value = 0;
  } else if (tipInputEl.value < 0) {
    tipInputEl.value = 0;
  } else if (tipInputEl.value > 100) {
    tipInputEl.value = 100;
  }

  resultEL.textContent = Number.parseFloat(
    +billInputEl.value + +billInputEl.value * (+tipInputEl.value / 100)
  ).toFixed(2);
});
