import React, { useEffect, useState, useCallback } from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";

import { MainDishesContainer, EndLoaderMessage } from "./styles";

import { useSelector, useDispatch } from "react-redux";
import * as mainDishesActions from "../../store/mainDishes/mainDishesActions";
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

const MainDishes = () => {
  const [limit, setLimit] = useState(9);
  const { categories, recipes, recipeFilter } = useSelector(
    (state) => state.mainDishes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mainDishesActions.getCategories());
    dispatch(mainDishesActions.getRecipes(recipeFilter, limit));
  }, [dispatch, limit, recipeFilter]);

  const filterRecipes = useCallback(
    (category) => {
      dispatch(mainDishesActions.getRecipes(category, limit));
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
      <Search handleSearch={mainDishesActions.searchRecipes} />
      <MainDishesContainer>
        {recipes.values && renderCards(recipes.values, recipes.total)}
      </MainDishesContainer>
      {recipes.values?.length === recipes.total ? (
        <EndLoaderMessage>Não existem mais receitas</EndLoaderMessage>
      ) : (
        ""
      )}
    </>
  );
};

export default MainDishes;
