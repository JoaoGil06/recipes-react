import * as actionTypes from "./recipeActionTypes";
import * as toastActions from "../toast/toastActions";
import { storage } from "../../firebase";

import { db } from "../../firebase";
import {
  GLOBAL_RECIPES_TYPES,
  TOAST_TYPES,
} from "../../constants/globalConstansts";

export const getRecipeStart = () => {
  return { type: actionTypes.GET_RECIPE_START };
};

export const getRecipeSuccess = (recipe) => {
  return { type: actionTypes.GET_RECIPE_SUCCESS, payload: recipe };
};

export const getRecipeFail = (error) => {
  return { type: actionTypes.GET_RECIPE_FAIL, payload: error };
};

export const addRecipeStart = () => {
  return { type: actionTypes.ADD_RECIPE_START };
};

export const addRecipeSuccess = () => {
  return { type: actionTypes.ADD_RECIPE_SUCCESS };
};

export const addRecipeFail = () => {
  return { type: actionTypes.ADD_RECIPE_FAIL };
};

export const deleteRecipeStart = () => {
  return { type: actionTypes.DELETE_RECIPE_START };
};

export const deleteRecipeSuccess = (id, recipes, recipe_type) => {
  return {
    type: actionTypes.DELETE_RECIPE_SUCCESS,
    payload: { id, recipes, recipe_type },
  };
};

export const deleteRecipeFail = (error) => {
  return { type: actionTypes.DELETE_RECIPE_FAIL, payload: error };
};

const isRecipeInCart = (recipeId, cart) => {
  return cart.some((cartItem) => cartItem.id === recipeId);
};

export const getRecipe = (id, recipe_type) => async (dispatch, getState) => {
  try {
    const { cart } = getState().cart;
    dispatch(getRecipeStart());
    const snapshot =
      recipe_type === GLOBAL_RECIPES_TYPES.MAIN_DISHES
        ? await db.collection("main_dishes").doc(id).get()
        : await db.collection("accompaniments").doc(id).get();

    const recipe = snapshot.data();

    const IS_RECIPE_IN_CART = isRecipeInCart(id, cart);

    dispatch(
      getRecipeSuccess({ ...recipe, isRecipeInCart: IS_RECIPE_IN_CART, id })
    );
  } catch (error) {
    dispatch(getRecipeFail(error));
  }
};

export const deleteRecipe = (id, recipe_type) => async (dispatch, getState) => {
  try {
    dispatch(deleteRecipeStart());
    let recipes;
    if (recipe_type === GLOBAL_RECIPES_TYPES.MAIN_DISHES) {
      await db
        .collection("main_dishes")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Receita apagada");
        });
      recipes = getState().mainDishes.recipes;
    } else {
      await db
        .collection("accompaniments")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Receita apagada");
        });
      recipes = getState().accompaniments.recipes;
    }
    dispatch(deleteRecipeSuccess(id, recipes, recipe_type));
    dispatch(
      toastActions.sendToast({
        type: TOAST_TYPES.SUCCESS,
        title: "Receita Apagada",
        message: `A receita foi apagada com sucesso.`,
        show: true,
      })
    );
  } catch (error) {
    dispatch(deleteRecipeFail(error));
    dispatch(
      toastActions.sendToast({
        type: TOAST_TYPES.ERROR,
        title: "Erro ao apagar a receita",
        message: "A receita não foi apagada, tente novamente.",
        show: true,
      })
    );
  }
};

const uploadImage = (image) => {
  let progress = 0;

  const uploadTask = storage.ref(`images/${image.name}`).put(image);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
    },
    (error) => {
      console.log(error);
    }
  );

  return uploadTask;
};

const convertTitleToSearchKeys = (title) => {
  let searchKeys = [];

  for (let i = 0; searchKeys.length <= title.length; i++) {
    if (i === 0) {
      searchKeys.push("", title[i]);
    } else {
      searchKeys.push(title.slice(0, i + 1));
    }
  }

  return searchKeys;
};

export const addRecipe =
  ({
    title,
    category,
    description,
    image,
    ingredients,
    preparationSteps,
    recipeType,
  }) =>
  async (dispatch, getState) => {
    try {
      dispatch(addRecipeStart());
      const searchKeys = convertTitleToSearchKeys(title.toLowerCase());
      const responseImage = await uploadImage(image);
      const url = await responseImage.ref
        .getDownloadURL()
        .then((response) => response);

      if (recipeType === GLOBAL_RECIPES_TYPES.MAIN_DISHES) {
        await db.collection("main_dishes").add({
          title,
          category,
          description,
          image: url,
          ingredients,
          preparationSteps,
          searchKeys,
        });
      } else {
        await db.collection("accompaniments").add({
          title,
          category,
          description,
          image: url,
          ingredients,
          preparationSteps,
          searchKeys,
        });
      }

      dispatch(
        toastActions.sendToast({
          type: TOAST_TYPES.SUCCESS,
          title: "Receita Adicionada",
          message: `A receita ${title} foi adicionada com sucesso.`,
          show: true,
        })
      );

      dispatch(addRecipeSuccess());
    } catch (error) {
      dispatch(
        toastActions.sendToast({
          type: TOAST_TYPES.ERROR,
          title: "Erro ao adicionar a receita",
          message: "A receita não foi adicionada, tente novamente.",
          show: true,
        })
      );

      dispatch(addRecipeFail());
    }
  };
