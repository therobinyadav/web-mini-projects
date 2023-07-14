'use strict';

const searchInputEl = document.querySelector('.search-input');
const searchBtnEl = document.querySelector('.search-btn');
const recipesEl = document.querySelector('.recipes');

const getRecipes = async function (searchQuery) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`
  );
  const data = await res.json();
  return data.data.recipes;
};

const renderRecipe = async function (searchQuery) {
  const recipeArr = await getRecipes(searchQuery);
  if (!recipeArr.length) {
    // Display error
    const error = `
    <div class="error">No results found! Try using a different query :)</div>
    `;
    recipesEl.insertAdjacentHTML('beforeend', error);
  } else {
    // render recipes
    for (let recipe of recipeArr) {
      const recipeMarkup = `
        <div class="recipe">
          <div class="recipe-image-box">
            <img
              class="recipe-image"
              src=${recipe.image_url}
              alt=${recipe.title}
            />
          </div>
          <div class="recipe-content">
            <p class="recipe-title">${recipe.title}</p>
            <p class="recipe-publisher">by ${recipe.publisher}</p>
          </div>
          <a class="recipe-link" href="#">View Recipe</a>
        </div>
          `;
      recipesEl.insertAdjacentHTML('beforeend', recipeMarkup);
    }
  }
};

searchBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  recipesEl.innerHTML = '';
  renderRecipe(searchInputEl.value);
  searchInputEl.value = '';
});
