'use strict';

const root = document.documentElement;
const toggleEl = document.querySelector('.toggle');
const switchEl = document.querySelector('.switch');

let toggled = false;

const switchColor = function () {
  if (!toggled) {
    root.style.setProperty('--color-black', '#fff');
    root.style.setProperty('--color-white', '#000');
  } else {
    root.style.setProperty('--color-black', '#000');
    root.style.setProperty('--color-white', '#fff');
  }
};

toggleEl.addEventListener('click', function (e) {
  if (!toggled) {
    switchEl.style.transform = `translateX(calc(${
      toggleEl.clientWidth - switchEl.clientWidth
    }px - .25em))`;
    switchColor();
    toggled = true;
  } else {
    switchEl.style.transform = `translateX(0)`;
    switchColor();
    toggled = false;
  }
});
