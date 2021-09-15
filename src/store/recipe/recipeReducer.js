import * as actionTypes from "./recipeActionTypes";
import initialState from "./recipeInitialState";

import { combineReducers } from "redux";

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
});
