'use strict';

const calcBtnEl = document.querySelector('.btn');
const dateInputEl = document.querySelector('.date');
const monthInputEl = document.querySelector('.month');
const yearInputEl = document.querySelector('.year');
const ageEl = document.querySelector('.age');

const today = new Date();

// Initialization
(function () {
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  dateInputEl.value = date;
  document.getElementsByTagName('option')[month].selected = 'selected';
  yearInputEl.value = year;
  yearInputEl.setAttribute('min', `${year - 200}`);
  yearInputEl.setAttribute('max', year);
})();

calcBtnEl.addEventListener('click', function () {
  if (
    +yearInputEl.value === today.getFullYear() &&
    +monthInputEl.value - 1 === today.getMonth() &&
    +dateInputEl.value === today.getDate()
  ) {
    ageEl.textContent = `Happy Birthday 🎉`;
  } else {
    ageEl.textContent = `Your age is ${
      today.getFullYear() - yearInputEl.value
    }`;
  }
});
