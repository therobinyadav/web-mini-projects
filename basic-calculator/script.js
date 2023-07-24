'use strict';

const displayEl = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', function () {
    const currentDisplayText = displayEl.textContent;
    if (btn.classList.contains('btn-clear')) {
      displayEl.textContent = '';
    } else if (btn.classList.contains('btn-backspace')) {
      displayEl.textContent = currentDisplayText.slice(0, -1);
    } else if (btn.classList.contains('btn-result')) {
      try {
        if (typeof eval(currentDisplayText) === 'number') {
          displayEl.textContent = eval(currentDisplayText);
        } else {
          displayEl.textContent = 'Error';
        }
      } catch {
        displayEl.textContent = 'Error';
      }
    } else {
      if (currentDisplayText.length != 12) {
        displayEl.textContent = currentDisplayText + btn.textContent;
      }
    }
  });
});
