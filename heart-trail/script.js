'use strict';

const bodyEl = document.querySelector('body');

['mousemove', 'touchmove'].forEach(eventType => {
  bodyEl.addEventListener(eventType, function (e) {
    const heartEL = document.createElement('span');
    heartEL.classList.add('heart');

    heartEL.style.left = `${e.offsetX || e.touches[0].clientX}px`;
    heartEL.style.top = `${e.offsetY || e.touches[0].clientY}px`;

    const size = `${Math.floor(Math.random() * 81) + 20}px`;
    heartEL.style.width = size;
    heartEL.style.height = size;

    bodyEl.appendChild(heartEL);

    setTimeout(() => {
      heartEL.remove();
    }, 3000);
  });
});
