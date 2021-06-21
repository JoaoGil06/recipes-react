import * as actionTypes from "./recipesActionTypes";
import initialState from "./recipesInitialState";

import { combineReducers } from "redux";
import { RECIPES_TYPES } from "../../constants/globalConstansts";

export const isLoadingRecipes = (
  state = initialState.isLoadingRecipes,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_RECIPES_START:
    case actionTypes.GET_RECIPES_COUNT_START:
      return true;
    case actionTypes.GET_RECIPES_FAIL:
      return false;
    case actionTypes.GET_RECIPES_SUCCESS:
    case actionTypes.GET_RECIPES_COUNT_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const recipes = (state = initialState.recipes, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_RECIPES_SUCCESS:
      return action.payload;
    case actionTypes.UPDATE_FILTER:
      const { recipes, filterType } = action.payload;

      if (filterType === RECIPES_TYPES.TODOS) {
        return recipes;
      }

      const newRecipes = recipes.filter(
        (recipe) => recipe.category === filterType
      );

      return newRecipes;
    default:
      return state;
  }
};

export const isLoadingCategories = (
  state = initialState.isLoadingCategories,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_START:
      return true;
    case actionTypes.GET_CATEGORIES_FAIL:
      return false;
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const categories = (state = initialState.categories, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const recipeFilter = (
  state = initialState.recipeFilter,
  action = {}
) => {
  switch (action.type) {
    case actionTypes.UPDATE_FILTER:
      return action.payload.filterType;
    default:
      return state;
  }
};

export default combineReducers({
  isLoadingRecipes,
  recipes,
  isLoadingCategories,
  categories,
  recipeFilter,
});
