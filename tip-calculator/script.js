'use strict';

const btnEl = document.querySelector('.btn');
const billInputEl = document.querySelector('.bill-input');
const tipInputEl = document.querySelector('.tip-input');
const resultEL = document.querySelector('.result');

btnEl.addEventListener('click', function () {
  resultEL.textContent = `${
    +billInputEl.value + +billInputEl.value * (+tipInputEl.value / 100)
  }`;
});
