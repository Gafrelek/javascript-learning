import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js';
import 'regenerator-runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipes() {
  try {
    // TODO move API key to ENV
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpiner();

    // 1. Loading recipe
    await model.loadRecipe(id);

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(error.message);
  }
}

controlRecipes();
const events = ['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
