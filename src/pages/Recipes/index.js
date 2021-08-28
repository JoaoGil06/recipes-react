import React, { useEffect, useState, useCallback } from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";

import { RecipesContainer, EndLoaderMessage } from "./styles";

import { useSelector, useDispatch } from "react-redux";
import * as recipesActions from "../../store/recipes/recipesActions";
import * as cartActions from "../../store/cart/cartActions";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "../../components/Search";

const styleCardsObj = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  columnGap: "1rem",
  rowGap: "1.5rem",
  justifyItems: "center",
};

const Recipes = () => {
  const [limit, setLimit] = useState(9);
  const { categories, recipes, recipeFilter } = useSelector(
    (state) => state.recipes
  );
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipesActions.getCategories());
    dispatch(recipesActions.getRecipes(recipeFilter, limit));
  }, [dispatch, limit, recipeFilter]);

  const filterRecipes = useCallback(
    (category) => {
      dispatch(recipesActions.getRecipes(category, limit));
    },
    [dispatch, limit]
  );

  const handleClickAddOrRemoveRecipeToCart = (recipe, isRecipeInCart) => {
    isRecipeInCart
      ? dispatch(cartActions.deleteCartRecipe(recipe.id))
      : dispatch(cartActions.addRecipeToCart(recipe));
  };

  const renderCards = (recipes, totalRecipes) => {
    return (
      <InfiniteScroll
        style={styleCardsObj}
        dataLength={recipes.length}
        next={() => setLimit(limit + 3)}
        hasMore={recipes.length < totalRecipes}
        loader={<h4>A Carregar...</h4>}
      >
        {recipes.map((recipe) => {
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
        })}
      </InfiniteScroll>
    );
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
      <Search handleSearch={recipesActions.searchRecipes} />
      <RecipesContainer>
        {recipes.values && renderCards(recipes.values, recipes.total)}
      </RecipesContainer>
      {recipes.values?.length === recipes.total ? (
        <EndLoaderMessage>Não existem mais receitas</EndLoaderMessage>
      ) : (
        ""
      )}
    </>
  );
};

export default Recipes;
