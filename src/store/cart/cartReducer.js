import * as actionTypes from "./cartActionTypes";
import initialState from "./cartInitialState";

import { combineReducers } from "redux";

export const cart = (state = initialState.cart, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_RECIPE_TO_CART:
      return [...state, { ...action.payload }];
    case actionTypes.REMOVE_RECIPE_FROM_CART:
      const filteredCart = state.filter((item) => item.id !== action.payload);
      return filteredCart;
    case actionTypes.CLEAN_CART:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  cart,
});
