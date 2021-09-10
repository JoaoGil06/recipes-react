import * as actionTypes from "./accompanimentsActionTypes";
import initialState from "./accompanimentsInitialState";

import { combineReducers } from "redux";

// export const isLoadingRecipes = (
//   state = initialState.isLoadingRecipes,
//   action
// ) => {
//   switch (action.type) {
//     case actionTypes.GET_AC_RECIPES_START:
//     case actionTypes.GET_AC_RECIPES_COUNT_START:
//       return true;
//     case actionTypes.GET_AC_RECIPES_FAIL:
//       return false;
//     case actionTypes.GET_AC_RECIPES_SUCCESS:
//     case actionTypes.GET_AC_RECIPES_COUNT_SUCCESS:
//       return false;
//     default:
//       return state;
//   }
// };

export const recipes = (state = initialState.recipes, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_AC_RECIPES_SUCCESS:
      return {
        values: action.payload.recipes,
        total: action.payload.totalRecipes,
      };
    // case actionTypes.DELETE_AC_RECIPE_SUCCESS:
    //   const { id, recipes } = action.payload;
    //   const newRecipes = recipes["values"].filter((recipe) => recipe.id !== id);

    //   return {
    //     values: newRecipes,
    //     total: recipes.total - 1,
    //   };
    default:
      return state;
  }
};

export const recipesCount = (
  state = initialState.totalRecipes,
  action = {}
) => {
  switch (action.type) {
    case actionTypes.GET_AC_RECIPES_COUNT_SUCCESS:
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
    case actionTypes.GET_AC_CATEGORIES_START:
      return true;
    case actionTypes.GET_AC_CATEGORIES_FAIL:
      return false;
    case actionTypes.GET_AC_CATEGORIES_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const categories = (state = initialState.categories, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_AC_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

// export const filters = (state = initialState.filters, action = {}) => {
//   switch (action.type) {
//     case actionTypes.UPDATE_AC_FILTER:
//       return {
//         category: action.payload.category,
//         search: action.payload.search,
//       };
//     default:
//       return state;
//   }
// };

export const recipe = (state = initialState.recipe, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_AC_RECIPE_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  // isLoadingRecipes,
  totalRecipes: recipesCount,
  recipes,
  isLoadingCategories,
  categories,
  // filters,
  recipe,
});
