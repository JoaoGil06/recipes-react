import axios from "axios";
import * as actionTypes from "./recipesActionTypes";

import { db } from "../../firebase";

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

export const updateFilter = (recipes, filterType) => {
  return { type: actionTypes.UPDATE_FILTER, payload: { recipes, filterType } };
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

export const getRecipes = () => async (dispatch, getState) => {
  try {
    const { cart } = getState().cart;
    dispatch(getRecipesStart());
    const snapshot = await db.collection("recipes").get();
    const recipes = snapshot.docs.map((recipe) => {
      const IS_RECIPE_IN_CART = isRecipeInCart(recipe.id, cart);

      return {
        ...recipe.data(),
        id: recipe.id,
        isRecipeInCart: IS_RECIPE_IN_CART,
      };
    });
    dispatch(getRecipesSuccess(recipes));

    return recipes;
  } catch (error) {
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

export const getRecipesCount = () => async (dispatch) => {
  try {
    dispatch(getRecipesCountStart());

    const recipes = await dispatch(getRecipes());
    dispatch(getRecipesCountSuccess(recipes.length));
  } catch (error) {}
};

export const filterRecipes = (filterType) => async (dispatch) => {
  try {
    const recipes = await dispatch(getRecipes());
    dispatch(updateFilter(recipes, filterType));
  } catch (error) {}
};
