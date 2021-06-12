import axios from "axios";
import * as actionTypes from "./recipesActionTypes";

/* Recipes */
import recipesData from "../../data";

export const getRecipesStart = () => {
  return { type: actionTypes.GET_RECIPES_START };
};

export const getRecipesSuccess = (recipes) => {
  return { type: actionTypes.GET_RECIPES_SUCCESS, payload: recipes };
};

export const getRecipesFail = (error) => {
  return { type: actionTypes.GET_RECIPES_FAIL, payload: error };
};

export const getCategoriesStart = () => {
  return { type: actionTypes.GET_CATEGORIES_START };
};

export const getCategoriesSuccess = (recipes) => {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: recipes };
};

export const getCategoriesFail = (error) => {
  return { type: actionTypes.GET_CATEGORIES_FAIL, payload: error };
};

export const getRecipesCountStart = () => {
  return { type: actionTypes.GET_RECIPES_COUNT_START };
};

export const getRecipesCountSuccess = (recipes) => {
  return { type: actionTypes.GET_RECIPES_COUNT_SUCCESS, payload: recipes };
};

export const updateFilter = (recipes, filterType) => {
  return { type: actionTypes.UPDATE_FILTER, payload: { recipes, filterType } };
};

export const getCategories = () => {
  return (dispatch) => {
    dispatch(getCategoriesStart());
    dispatch(getCategoriesSuccess(recipesData));
    // dispatch(getCategoriesFail("error"));
  };
};

export const getRecipes = () => {
  return (dispatch) => {
    dispatch(getRecipesStart());
    dispatch(getRecipesSuccess(recipesData));
    // dispatch(getRecipesFail("error"));

    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     const recipes = response.data;
    //     dispatch(getRecipesSuccess(recipes));
    //   })
    //   .catch((error) => {
    //     const errorMsg = error.message;
    //     dispatch(getRecipesFail(errorMsg));
    //   });
  };
};

export const getRecipesCount = () => {
  return (dispatch) => {
    dispatch(getRecipesCountStart());
    dispatch(getRecipesCountSuccess(recipesData));
  };
};

export const filterRecipes = (filterType) => {
  return (dispatch) => {
    const recipes = recipesData;

    dispatch(updateFilter(recipes, filterType));
  };
};
