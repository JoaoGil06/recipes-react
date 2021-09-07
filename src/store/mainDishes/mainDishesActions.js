import * as actionTypes from "./mainDishesActionTypes";
import { storage } from "../../firebase";

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

export const updateFilter = (category, search) => {
  return { type: actionTypes.UPDATE_FILTER, payload: { category, search } };
};

export const deleteRecipeStart = () => {
  return { type: actionTypes.DELETE_RECIPE_START };
};

export const deleteRecipeSuccess = (id, recipes) => {
  return {
    type: actionTypes.DELETE_RECIPE_SUCCESS,
    payload: { id, recipes },
  };
};

export const deleteRecipeFail = (error) => {
  return { type: actionTypes.DELETE_RECIPE_FAIL, payload: error };
};

export const getCategories = () => async (dispatch) => {
  try {
    dispatch(getCategoriesStart());
    const snapshot = await db.collection("categories").get();
    const categories = snapshot.docs
      .map((category) => category.data())
      .map((category) => category.main_dishes)
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
  (filterType = RECIPES_TYPES.TODOS, searchValue) =>
  async (dispatch, getState) => {
    try {
      let snapshot = [];

      if (filterType !== RECIPES_TYPES.TODOS) {
        snapshot = await db
          .collection("main_dishes")
          .where("category", "==", filterType)
          .where("searchKeys", "array-contains", searchValue.toLowerCase())
          .get();
      } else {
        snapshot = await db
          .collection("main_dishes")
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
          .collection("main_dishes")
          .where("category", "==", filterType)
          .where("searchKeys", "array-contains", searchValue.toLowerCase())
          .limit(limit)
          .get();
      } else {
        snapshot = await db
          .collection("main_dishes")
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

export const getRecipe = (id) => async (dispatch, getState) => {
  try {
    const { cart } = getState().cart;
    dispatch(getRecipeStart());

    const snapshot = await db.collection("main_dishes").doc(id).get();
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

    const snapshot = await db.collection("main_dishes").get();
    const recipes = snapshot.docs;
    dispatch(getRecipesCountSuccess(recipes.length));
  } catch (error) {}
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
  ({ title, category, description, image, ingredients, preparationSteps }) =>
  async (dispatch, getState) => {
    try {
      const searchKeys = convertTitleToSearchKeys(title.toLowerCase());
      const responseImage = await uploadImage(image);
      const url = await responseImage.ref
        .getDownloadURL()
        .then((response) => response);

      await db.collection("main_dishes").add({
        title,
        category,
        description,
        image: url,
        ingredients,
        preparationSteps,
        searchKeys,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteRecipe = (id) => async (dispatch, getState) => {
  try {
    dispatch(deleteRecipeStart());

    await db
      .collection("main_dishes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Receita apagada");
      });

    const { recipes } = getState();

    dispatch(deleteRecipeSuccess(id, recipes.recipes));
  } catch (error) {
    dispatch(deleteRecipeFail(error));
  }
};
