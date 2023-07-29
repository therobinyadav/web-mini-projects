'use strict';

const imageEl = document.querySelector('.image');
const generateBtnEl = document.querySelector('.btn-generate');

const generateImage = async function () {
  const res = await fetch('https://api.catboys.com/img');
  const data = await res.json();
  imageEl.setAttribute('src', data.url);
};

// Displays a random image on page load
generateImage();

generateBtnEl.addEventListener('click', generateImage);
