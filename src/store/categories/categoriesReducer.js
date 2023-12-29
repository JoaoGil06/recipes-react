import * as actionTypes from "./categoriesActionTypes";
import initialState from "./categoriesInitialState";

import { combineReducers } from "redux";

export const categories = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  categories,
});
