import * as actionTypes from "./cartActionTypes";
import * as toastActions from "../toast/toastActions";
import { TOAST_TYPES } from "../../constants/globalConstansts";

export const addRecipeToCartSuccess = (recipe) => {
  return { type: actionTypes.ADD_RECIPE_TO_CART, payload: recipe };
};

export const addRecipeToCart = (recipe) => {
  return (dispatch) => {
    dispatch(addRecipeToCartSuccess(recipe));
    dispatch(
      toastActions.sendToast({
        type: TOAST_TYPES.SUCCESS,
        title: "Receita Adicionada",
        message: `A receita ${recipe.title} foi adicionada ao carrinho com sucesso.`,
        show: true,
      })
    );
  };
};

export const deleteRecipeFromCartSuccess = (recipeId) => {
  return { type: actionTypes.REMOVE_RECIPE_FROM_CART, payload: recipeId };
};

export const deleteCartRecipe = (recipeId) => {
  return (dispatch) => {
    dispatch(deleteRecipeFromCartSuccess(recipeId));
    dispatch(
      toastActions.sendToast({
        type: TOAST_TYPES.SUCCESS,
        title: "Receita Apagada",
        message: `A receita foi apagada do carrinho com sucesso.`,
        show: true,
      })
    );
  };
};

export const cleanCartSuccess = () => {
  return { type: actionTypes.CLEAN_CART };
};

export const cleanCart = () => {
  return (dispatch) => {
    dispatch(cleanCartSuccess());
    dispatch(
      toastActions.sendToast({
        type: TOAST_TYPES.SUCCESS,
        title: "Carrinho Limpo",
        message: `Todas as receitas do carrinho foram apagadas com sucesso.`,
        show: true,
      })
    );
  };
};
