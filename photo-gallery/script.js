'use strict';

const root = document.documentElement;
const gridOptionsEl = document.querySelector('.grid-options');
const galleryEl = document.querySelector('.gallery');

const KEY = '1PxpVrDBqXwLB8mG9JkXiufKelmopLOgJc48i0oE98g';
let images = [];
let gridClass = `grid-${gridOptionsEl.value}`;
let totalImages = (+gridOptionsEl.value) ** 2;

// Default grid
galleryEl.classList.add(gridClass);

const getImages = async function (ACCESS_KEY) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random/?count=25&client_id=${ACCESS_KEY}`
    );
    if (!res.ok) {
      if (res.status === 403) {
        throw new Error('Rate limit exceeded! Try again later.');
      } else {
        throw new Error('Something went wrong :(');
      }
    }
    let results = await res.json();
    images = results.map(result => {
      return {
        imgUrl: result.urls.regular,
        alt: result.alt_description,
        link: result.links.html,
      };
    });
    if (images.length) {
      renderImages(images);
    } else {
      throw new Error('No images at this moment :(');
    }
  } catch (err) {
    galleryEl.textContent = err.message;
  }
};

// This needs to be called only once
getImages(KEY);

const renderImages = function (imgArr) {
  galleryEl.innerHTML = '';
  let markup = '';
  imgArr.slice(0, totalImages).forEach(img => {
    markup += `
      <div class="image-box">
        <img class="image" src="${img.imgUrl}" alt="${img.alt}" />
      </div>
    `;
  });
  galleryEl.insertAdjacentHTML('beforeend', markup);
};

const updateGrid = function () {
  gridClass = `grid-${gridOptionsEl.value}`;
  totalImages = (+gridOptionsEl.value) ** 2;
  for (let i = 2; i <= 5; i++) {
    galleryEl.classList.remove(`grid-${i}`);
  }
  galleryEl.classList.add(gridClass);
  switch (+gridOptionsEl.value) {
    case 2:
      root.style.setProperty('--image-height', '35rem');
      break;
    case 3:
      root.style.setProperty('--image-height', '30rem');
      break;
    case 4:
      root.style.setProperty('--image-height', '25rem');
      break;
    case 5:
      root.style.setProperty('--image-height', '20rem');
      break;
  }
  renderImages(images);
};

gridOptionsEl.addEventListener('input', updateGrid);
