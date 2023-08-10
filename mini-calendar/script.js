'use strict';

const yearEl = document.querySelector('.year');
const monthEl = document.querySelector('.month');
const dayEl = document.querySelector('.day');
const dateEl = document.querySelector('.date');

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDay();
const date = today.getDate();

const monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const daysArray = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const updateCalendar = function () {
  yearEl.textContent = year;
  monthEl.textContent = monthsArray[month];
  dayEl.textContent = daysArray[day];
  dateEl.textContent = date;
};

updateCalendar();
