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
    if (!res.ok) throw new Error();
    const { results } = await res.json();
    return results.map(result => {
      return {
        imgUrl: result.urls.regular,
        alt: result.alt_description,
        link: result.links.html,
      };
    });
  } catch {
    imageResultsEL.textContent = 'Something went wrong :(';
  }
};

const renderImages = function (imgArr) {
  imageResultsEL.innerHTML = '';
  let markup = '';
  if (imgArr.length !== 0) {
    imgArr.forEach(img => {
      markup += `
      <div class="image-result">
        <a href="${img.imgUrl}" target="_blank">
          <img class="image" src="${img.imgUrl}" alt="${img.alt}" />
        </a>
      </div>
      `;
    });
  } else {
    markup = 'No results found :(';
  }
  imageResultsEL.insertAdjacentHTML('beforeend', markup);
};

btnSearchEl.addEventListener('click', function (e) {
  e.preventDefault();
  getImages(KEY, searchInputEl.value).then(images => renderImages(images));
  searchInputEl.value = '';
});
