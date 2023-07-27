'use strict';

const gridOptionsEl = document.querySelector('.grid-options');
const galleryEl = document.querySelector('.gallery');

let gridClass = `grid-${gridOptionsEl.value}`;

// Default grid
galleryEl.classList.add(gridClass);

const updateGrid = function () {
  gridClass = `grid-${gridOptionsEl.value}`;
  for (let i = 2; i <= 5; i++) {
    galleryEl.classList.remove(`grid-${i}`);
  }
  galleryEl.classList.add(gridClass);
};

gridOptionsEl.addEventListener('input', updateGrid);
