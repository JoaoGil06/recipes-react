import axios from "axios";
import * as actionTypes from "./recipesActionTypes";

import { db } from "../../firebase";
import { RECIPES_TYPES } from "../../constants/globalConstansts";

export const getRecipesStart = () => {
  return { type: actionTypes.GET_RECIPES_START };
};

export const getRecipesSuccess = (recipes, totalRecipes) => {
  return {
    type: actionTypes.GET_RECIPES_SUCCESS,
    payload: { recipes, totalRecipes },
  };
};

export const getRecipesFail = (error) => {
  return { type: actionTypes.GET_RECIPES_FAIL, payload: error };
};

export const getCategoriesStart = () => {
  return { type: actionTypes.GET_CATEGORIES_START };
};

export const getCategoriesSuccess = (recipes) => {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: recipes,
  };
};

export const getCategoriesFail = (error) => {
  return { type: actionTypes.GET_CATEGORIES_FAIL, payload: error };
};

export const getRecipeStart = () => {
  return { type: actionTypes.GET_RECIPE_START };
};

export const getRecipeSuccess = (recipe) => {
  return { type: actionTypes.GET_RECIPE_SUCCESS, payload: recipe };
};

export const getRecipeFail = (error) => {
  return { type: actionTypes.GET_RECIPE_FAIL, payload: error };
};

export const getRecipesCountStart = () => {
  return { type: actionTypes.GET_RECIPES_COUNT_START };
};

export const getRecipesCountSuccess = (recipes) => {
  return { type: actionTypes.GET_RECIPES_COUNT_SUCCESS, payload: recipes };
};

export const updateFilter = (filterType) => {
  return { type: actionTypes.UPDATE_FILTER, payload: filterType };
};

export const getCategories = () => async (dispatch) => {
  try {
    dispatch(getCategoriesStart());
    const snapshot = await db.collection("categories").get();
    const categories = snapshot.docs
      .map((category) => category.data())
      .map((category) => category.categories)
      .flat();

    dispatch(getCategoriesSuccess(categories));

    return categories;
  } catch (error) {
    dispatch(getCategoriesFail(error));
  }
};

const isRecipeInCart = (recipeId, cart) => {
  return cart.some((cartItem) => cartItem.id === recipeId);
};

const getRecipesCount =
  (filterType = RECIPES_TYPES.TODOS) =>
  async (dispatch, getState) => {
    try {
      const { cart } = getState().cart;
      let snapshot = [];

      if (filterType !== RECIPES_TYPES.TODOS) {
        snapshot = await db
          .collection("recipes")
          .where("category", "==", filterType)
          .get();
      } else {
        snapshot = await db.collection("recipes").get();
      }
      const recipes = snapshot.docs.map((recipe) => {
        const IS_RECIPE_IN_CART = isRecipeInCart(recipe.id, cart);
        return {
          ...recipe.data(),
          id: recipe.id,
          isRecipeInCart: IS_RECIPE_IN_CART,
        };
      });

      return recipes.length;
    } catch (error) {
      console.log(error);
    }
  };

export const getRecipes =
  (filterType = RECIPES_TYPES.TODOS, limit) =>
  async (dispatch, getState) => {
    try {
      const { cart } = getState().cart;
      dispatch(getRecipesStart());
      let snapshot = [];
      const totalRecipes = await dispatch(getRecipesCount(filterType));

      if (filterType !== RECIPES_TYPES.TODOS) {
        snapshot = await db
          .collection("recipes")
          .where("category", "==", filterType)
          .limit(limit)
          .get();
      } else {
        snapshot = await db.collection("recipes").limit(limit).get();
      }
      const recipes = snapshot.docs.map((recipe) => {
        const IS_RECIPE_IN_CART = isRecipeInCart(recipe.id, cart);
        return {
          ...recipe.data(),
          id: recipe.id,
          isRecipeInCart: IS_RECIPE_IN_CART,
        };
      });
      console.log("totalRecipes", totalRecipes);
      dispatch(getRecipesSuccess(recipes, totalRecipes));
      dispatch(updateFilter(filterType));

      return recipes;
    } catch (error) {
      console.log(error);
      dispatch(getRecipesFail(error));
    }
  };

export const getRecipe = (id) => async (dispatch, getState) => {
  try {
    const { cart } = getState().cart;
    dispatch(getRecipeStart());

    const snapshot = await db.collection("recipes").doc(id).get();
    const recipe = snapshot.data();
    const IS_RECIPE_IN_CART = isRecipeInCart(id, cart);

    dispatch(
      getRecipeSuccess({ ...recipe, isRecipeInCart: IS_RECIPE_IN_CART, id })
    );
  } catch (error) {
    dispatch(getRecipeFail(error));
  }
};

export const getTotalRecipesCount = () => async (dispatch) => {
  try {
    dispatch(getRecipesCountStart());

    const snapshot = await db.collection("recipes").get();
    const recipes = snapshot.docs;
    dispatch(getRecipesCountSuccess(recipes.length));
  } catch (error) {}
};
