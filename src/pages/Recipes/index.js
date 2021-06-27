import React, { useEffect } from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";
import { RecipesContainer } from "./styles";

import { useSelector, useDispatch } from "react-redux";
import * as recipesActions from "../../store/recipes/recipesActions";
import * as cartActions from "../../store/cart/cartActions";

const Recipes = () => {
  const { categories, recipes, recipeFilter } = useSelector(
    (state) => state.recipes
  );
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipesActions.getCategories());
    dispatch(recipesActions.getRecipes());
  }, [dispatch]);

  const filterRecipes = (category) => {
    dispatch(recipesActions.filterRecipes(category));
  };

  const handleClickAddOrRemoveRecipeToCart = (recipe, isRecipeInCart) => {
    isRecipeInCart
      ? dispatch(cartActions.deleteCartRecipe(recipe.id))
      : dispatch(cartActions.addRecipeToCart(recipe));
  };

  const renderCards = (recipes) =>
    recipes.map((recipe) => {
      return (
        <Card
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          title={recipe.title}
          description={recipe.description}
          category={recipe.category}
          ingredients={recipe.ingredients}
          handleClickAddOrRemoveRecipeToCart={
            handleClickAddOrRemoveRecipeToCart
          }
          isRecipeInCart={recipe.isRecipeInCart}
        />
      );
    });

  const renderHeader = () => (
    <Header
      categories={categories}
      filterRecipes={filterRecipes}
      selectedCategory={recipeFilter}
    />
  );

  return (
    <>
      {renderHeader()}
      <RecipesContainer>{renderCards(recipes)}</RecipesContainer>
    </>
  );
};

export default Recipes;
