'use strict';

const KEY = '1PxpVrDBqXwLB8mG9JkXiufKelmopLOgJc48i0oE98g';

const imageResultsEL = document.querySelector('.image-results');
const searchInputEl = document.querySelector('.search-input');
const btnSearchEl = document.querySelector('.btn-search');

const getImages = async function (ACCESS_KEY, query) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos/?per_page=30&client_id=${ACCESS_KEY}&query=${query}`
    );
    if (!res.ok) {
      if (res.status === 403) {
        throw new Error('Rate limit exceeded! Try again later.');
      } else {
        throw new Error('Something went wrong :(');
      }
    }
    let { results } = await res.json();
    results = results.map(result => {
      return {
        imgUrl: result.urls.regular,
        alt: result.alt_description,
        link: result.links.html,
      };
    });
    if (results.length) {
      imageResultsEL.classList.remove('error');
      renderImages(results);
    } else {
      throw new Error('No results found :(');
    }
  } catch (err) {
    imageResultsEL.classList.add('error');
    imageResultsEL.textContent = err.message;
  }
};

const renderImages = function (imgArr) {
  imageResultsEL.innerHTML = '';
  let markup = '';
  imgArr.forEach(img => {
    markup += `
      <div class="image-result">
        <a href="${img.imgUrl}" target="_blank">
          <img class="image" src="${img.imgUrl}" alt="${img.alt}" />
        </a>
      </div>
      `;
  });
  imageResultsEL.insertAdjacentHTML('beforeend', markup);
};

btnSearchEl.addEventListener('click', function (e) {
  e.preventDefault();
  getImages(KEY, searchInputEl.value);
  searchInputEl.value = '';
});
