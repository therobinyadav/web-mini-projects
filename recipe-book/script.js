'use strict';

const searchInputEl = document.querySelector('.search-input');
const searchBtnEl = document.querySelector('.search-btn');
const recipesEl = document.querySelector('.recipes');

const getAllRecipes = async function (searchQuery) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`
  );
  const data = await res.json();
  return data.data.recipes;
};

const getRecipeData = async function (recipeID) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeID}`
  );
  const {
    data: { recipe },
  } = await res.json();
  return recipe;
};

const renderRecipe = async function (recipesArr) {
  if (!recipesArr.length) {
    // Display error
    const error = `
    <div class="error">No results found! Try using a different query :)</div>
    `;
    recipesEl.insertAdjacentHTML('beforeend', error);
  } else {
    // render recipes
    for (let recipe of recipesArr) {
      const recipeData = await getRecipeData(recipe.id);
      const recipeMarkup = `
        <div class="recipe">
          <div class="recipe-image-box">
            <img
              class="recipe-image"
              src=${recipeData.image_url}
              alt=${recipeData.title}
            />
          </div>
          <div class="recipe-content">
            <p class="recipe-title">${recipeData.title}</p>
            <p class="recipe-publisher">by ${recipeData.publisher}</p>
          </div>
          <a class="recipe-link" target="_blank" href=${recipeData.source_url}>View Recipe</a>
        </div>
          `;
      recipesEl.insertAdjacentHTML('beforeend', recipeMarkup);
    }
  }
};

searchBtnEl.addEventListener('click', async function (e) {
  e.preventDefault();
  recipesEl.innerHTML = '';
  const recipes = await getAllRecipes(searchInputEl.value);
  renderRecipe(recipes);
  searchInputEl.value = '';
});
