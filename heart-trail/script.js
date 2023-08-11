'use strict';

const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', function (e) {
  const heartEL = document.createElement('span');
  heartEL.classList.add('heart');

  heartEL.style.left = `${e.offsetX}px`;
  heartEL.style.top = `${e.offsetY}px`;

  const size = `${Math.floor(Math.random() * 81) + 20}px`;
  heartEL.style.width = size;
  heartEL.style.height = size;

  bodyEl.appendChild(heartEL);

  setTimeout(() => {
    heartEL.remove();
  }, 3000);
});
