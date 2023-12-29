import * as actionTypes from "./categoriesActionTypes";
import { db } from "../../firebase";

export const getCategoriesStart = () => {
  return { type: actionTypes.GET_CATEGORIES_START };
};

export const getCategoriesSuccess = (categories) => {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const getCategoriesFail = (error) => {
  return { type: actionTypes.GET_CATEGORIES_FAIL, payload: error };
};

export const getCategories = () => async (dispatch) => {
  try {
    dispatch(getCategoriesStart());
    const snapshot = await db.collection("categories").get();
    const categories = snapshot.docs.map((category) => category.data());
    dispatch(getCategoriesSuccess(categories));
  } catch (error) {
    alert("entra aqui no erro");
    console.log("error", error);
    dispatch(getCategoriesFail(error));
  }
};
