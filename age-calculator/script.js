'use strict';

const calcBtnEl = document.querySelector('.btn');
const dobInputEl = document.querySelector('.dob-input');
const ageEl = document.querySelector('.age');

const today = new Date();
const year = today.getFullYear();
const month = `${today.getMonth() + 1}`.padStart(2, '0');
const date = `${today.getDate()}`.padStart(2, '0');

// Initialization
(function () {
  dobInputEl.setAttribute('value', `${year}-${month}-${date}`);
  dobInputEl.setAttribute('min', `${year - 200}-${month}-${date}`);
  dobInputEl.setAttribute('max', `${year}-${month}-${date}`);
})();

calcBtnEl.addEventListener('click', function () {
  const [dobYear, dobMonth, dobDate] = dobInputEl.value.split('-');
  let displayYear = +dobMonth > +month ? year - dobYear - 1 : year - dobYear;

  if (+dobMonth === +month) {
    displayYear = +dobDate > +date ? year - dobYear - 1 : year - dobYear;
  }

  if (+dobMonth === +month && +dobDate === +date) {
    ageEl.textContent = 'Happy Birthday 🎉';
    ageEl.classList.remove('hidden');
  } else {
    ageEl.textContent = `Your age is ${displayYear}`;
    ageEl.classList.remove('hidden');
  }
});
