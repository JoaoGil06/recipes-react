import * as actionTypes from "./toastActionTypes";

export const sendToast = ({ type, title, message, show }) => {
  return {
    type: actionTypes.SEND_TOAST,
    payload: { type, title, message, show },
  };
};

export const closeToast = () => {
  return { type: actionTypes.CLOSE_TOAST };
};
