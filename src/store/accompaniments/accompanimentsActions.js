import * as actionTypes from "./accompanimentsActionTypes";

import { db } from "../../firebase";
import { RECIPES_TYPES } from "../../constants/globalConstansts";

export const getRecipesStart = () => {
  return { type: actionTypes.GET_AC_RECIPES_START };
};

export const getRecipesSuccess = (recipes, totalRecipes) => {
  return {
    type: actionTypes.GET_AC_RECIPES_SUCCESS,
    payload: { recipes, totalRecipes },
  };
};

export const getRecipesFail = (error) => {
  return { type: actionTypes.GET_AC_RECIPES_FAIL, payload: error };
};

export const getRecipesCountStart = () => {
  return { type: actionTypes.GET_AC_RECIPES_COUNT_START };
};

export const getRecipesCountSuccess = (recipes) => {
  return { type: actionTypes.GET_AC_RECIPES_COUNT_SUCCESS, payload: recipes };
};

export const updateFilter = (category, search) => {
  return { type: actionTypes.UPDATE_AC_FILTER, payload: { category, search } };
};

const getRecipesCount =
  (filterType = RECIPES_TYPES.TODOS, searchValue) =>
  async (dispatch, getState) => {
    try {
      let snapshot = [];

      if (filterType !== RECIPES_TYPES.TODOS) {
        snapshot = await db
          .collection("accompaniments")
          .where("category", "==", filterType)
          .where("searchKeys", "array-contains", searchValue.toLowerCase())
          .get();
      } else {
        snapshot = await db
          .collection("accompaniments")
          .where("searchKeys", "array-contains", searchValue.toLowerCase())
          .get();
      }
      const recipes = snapshot.docs.map((recipe) => {
        return {
          ...recipe.data(),
          id: recipe.id,
        };
      });

      return recipes.length;
    } catch (error) {
      console.log(error);
    }
  };

export const getRecipes =
  (filterType = RECIPES_TYPES.TODOS, searchValue = "", limit) =>
  async (dispatch, getState) => {
    try {
      dispatch(getRecipesStart());
      let snapshot = [];
      const totalRecipes = await dispatch(
        getRecipesCount(filterType, searchValue)
      );

      if (filterType !== RECIPES_TYPES.TODOS) {
        snapshot = await db
          .collection("accompaniments")
          .where("category", "==", filterType)
          .where("searchKeys", "array-contains", searchValue.toLowerCase())
          .limit(limit)
          .get();
      } else {
        snapshot = await db
          .collection("accompaniments")
          .where("searchKeys", "array-contains", searchValue.toLowerCase())
          .limit(limit)
          .get();
      }

      const recipes = snapshot.docs.map((recipe) => {
        return {
          ...recipe.data(),
          id: recipe.id,
        };
      });

      dispatch(getRecipesSuccess(recipes, totalRecipes));
      dispatch(updateFilter(filterType, searchValue));

      return recipes;
    } catch (error) {
      console.log(error);
      dispatch(getRecipesFail(error));
    }
  };

export const getTotalRecipesCount = () => async (dispatch) => {
  try {
    dispatch(getRecipesCountStart());

    const snapshot = await db.collection("accompaniments").get();
    const recipes = snapshot.docs;
    dispatch(getRecipesCountSuccess(recipes.length));
  } catch (error) {}
};
