import * as actionTypes from "./recipeActionTypes";
import initialState from "./recipeInitialState";

import { combineReducers } from "redux";

export const isLoading = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case actionTypes.GET_RECIPE_START:
    case actionTypes.ADD_RECIPE_START:
      return true;
    case actionTypes.GET_RECIPE_SUCCESS:
    case actionTypes.GET_RECIPE_FAIL:
    case actionTypes.ADD_RECIPE_SUCCESS:
    case actionTypes.ADD_RECIPE_FAIL:
      return false;
    default:
      return state;
  }
};

export const recipe = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_RECIPE_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  recipe,
  isLoading,
});
