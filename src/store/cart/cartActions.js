import * as actionTypes from "./cartActionTypes";

export const addRecipeToCartSuccess = (recipe) => {
  return { type: actionTypes.ADD_RECIPE_TO_CART, payload: recipe };
};

export const addRecipeToCart = (recipe) => {
  return (dispatch) => {
    dispatch(addRecipeToCartSuccess(recipe));
  };
};

export const deleteRecipeFromCartSuccess = (recipeId) => {
  return { type: actionTypes.REMOVE_RECIPE_FROM_CART, payload: recipeId };
};

export const deleteCartRecipe = (recipeId) => {
  return (dispatch) => {
    dispatch(deleteRecipeFromCartSuccess(recipeId));
  };
};

export const cleanCartSuccess = () => {
  return { type: actionTypes.CLEAN_CART };
};

export const cleanCart = () => {
  return (dispatch) => {
    dispatch(cleanCartSuccess());
  };
};
