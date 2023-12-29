import * as actionTypes from "./toastActionTypes";
import initialState from "./toastInitialState";

import { combineReducers } from "redux";

export const toast = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SEND_TOAST:
      return action.payload;

    case actionTypes.CLOSE_TOAST:
      return { type: "", title: "", message: "", show: false };
    default:
      return state;
  }
};

export default combineReducers({
  toast,
});
