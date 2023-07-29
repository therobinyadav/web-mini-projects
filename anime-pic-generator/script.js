'use strict';

const imageEl = document.querySelector('.image');
const loadingEl = document.querySelector('.loading');
const generateBtnEl = document.querySelector('.btn-generate');

const generateImage = async function () {
  const res = await fetch('https://api.catboys.com/img');
  const data = await res.json();
  imageEl.setAttribute('src', data.url);
};

// Displays a random image on page load
generateImage();

imageEl.addEventListener('load', function () {
  loadingEl.classList.toggle('hidden');
  imageEl.classList.toggle('hidden');
});

generateBtnEl.addEventListener('click', async function () {
  loadingEl.classList.toggle('hidden');
  imageEl.classList.toggle('hidden');
  generateBtnEl.textContent = 'Generating...';
  await generateImage();
  generateBtnEl.textContent = 'Generate';
});
