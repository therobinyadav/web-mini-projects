'use strict';

const calcBtnEl = document.querySelector('.btn');
const dobInputEl = document.querySelector('.dob-input');
const ageEl = document.querySelector('.age');

const today = new Date();
const year = today.getFullYear();
const month = `${today.getMonth()}`.padStart(2, '0');
const date = `${today.getDate()}`.padStart(2, '0');

// Initialization
(function () {
  dobInputEl.setAttribute('value', `${year}-${month}-${date}`);
  dobInputEl.setAttribute('min', `${year - 200}-${month}-${date}`);
  dobInputEl.setAttribute('max', `${year}-${month}-${date}`);
})();

calcBtnEl.addEventListener('click', function () {
  const [dobYear, dobMonth, dobDate] = dobInputEl.value.split('-');

  if (+dobYear === year && +dobMonth === +month && +dobDate === +date) {
    ageEl.textContent = 'Happy Birthday 🎉';
    ageEl.classList.remove('hidden');
  } else {
    ageEl.textContent = `Your age is ${year - +dobYear}`;
    ageEl.classList.remove('hidden');
  }
});
