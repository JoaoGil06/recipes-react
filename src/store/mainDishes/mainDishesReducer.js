import * as actionTypes from "./mainDishesActionTypes";
import initialState from "./mainDishesInitialState";
import * as categoriesActionTypes from "../categories/categoriesActionTypes";
import * as recipeActionTypes from "../recipe/recipeActionTypes";

import { combineReducers } from "redux";
import { GLOBAL_RECIPES_TYPES } from "../../constants/globalConstansts";

export const isLoadingRecipes = (
  state = initialState.isLoadingRecipes,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_MD_RECIPES_START:
    case actionTypes.GET_MD_RECIPES_COUNT_START:
      return true;
    case actionTypes.GET_MD_RECIPES_FAIL:
      return false;
    case actionTypes.GET_MD_RECIPES_SUCCESS:
    case actionTypes.GET_MD_RECIPES_COUNT_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const recipes = (state = initialState.recipes, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_MD_RECIPES_SUCCESS:
      return {
        values: action.payload.recipes,
        total: action.payload.totalRecipes,
      };
    case recipeActionTypes.DELETE_RECIPE_SUCCESS:
      const { id, recipes, recipe_type } = action.payload;

      if (recipe_type === GLOBAL_RECIPES_TYPES.MAIN_DISHES) {
        const newRecipes = recipes["values"].filter(
          (recipe) => recipe.id !== id
        );

        return {
          values: newRecipes,
          total: recipes.total - 1,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export const recipesCount = (
  state = initialState.totalRecipes,
  action = {}
) => {
  switch (action.type) {
    case actionTypes.GET_MD_RECIPES_COUNT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const isLoadingCategories = (
  state = initialState.isLoadingCategories,
  action
) => {
  switch (action.type) {
    case categoriesActionTypes.GET_CATEGORIES_START:
      return true;
    case categoriesActionTypes.GET_CATEGORIES_FAIL:
      return false;
    case categoriesActionTypes.GET_CATEGORIES_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const categories = (state = initialState.categories, action = {}) => {
  switch (action.type) {
    case categoriesActionTypes.GET_CATEGORIES_SUCCESS:
      const { main_dishes } = action.payload[0];
      return main_dishes;
    default:
      return state;
  }
};

export const filters = (state = initialState.filters, action = {}) => {
  switch (action.type) {
    case actionTypes.UPDATE_MD_FILTER:
      return {
        category: action.payload.category,
        search: action.payload.search,
      };
    default:
      return state;
  }
};

export default combineReducers({
  isLoadingRecipes,
  totalRecipes: recipesCount,
  recipes,
  isLoadingCategories,
  categories,
  filters,
});
