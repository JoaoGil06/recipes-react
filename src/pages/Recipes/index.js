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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipesActions.getCategories());
    dispatch(recipesActions.getRecipes());
  }, [dispatch]);

  const filterRecipes = (category) => {
    dispatch(recipesActions.filterRecipes(category));
  };

  const handleClickAddRecipeToCart = (recipe) => {
    dispatch(cartActions.addRecipeToCart(recipe));
  };

  const renderCards = (recipes) => {
    const cards = recipes.map((recipe) => {
      return (
        <Card
          key={recipe.id}
          {...recipe}
          category={recipe.category}
          handleClickAddRecipeToCart={handleClickAddRecipeToCart}
        />
      );
    });
    return cards;
  };

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
