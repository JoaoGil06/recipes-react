import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import * as mainDishesActions from "../../store/mainDishes/mainDishesActions";
import * as cartActions from "../../store/cart/cartActions";

import {
  RecipeContainer,
  Header,
  RecipeMainContent,
  RecipePreparation,
  Ingredients,
  Steps,
  ButtonsContainer,
  Button,
} from "./styles";

const Recipe = () => {
  const { id } = useParams();
  const { recipe } = useSelector((state) => state.mainDishes);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(mainDishesActions.getRecipe(id));
  }, [id, dispatch]);

  const handleClickAddOrRemoveRecipeToCart = () => {
    recipe.isRecipeInCart
      ? dispatch(cartActions.deleteCartRecipe(recipe.id))
      : dispatch(cartActions.addRecipeToCart({ ...recipe, id: id }));

    history.push("/cart");
  };

  const handleDeleteRecipe = () => {
    dispatch(mainDishesActions.deleteRecipe(id));
    history.push("/recipes");
  };

  if (Object.keys(recipe).length === 0) {
    return <>Loading...</>;
  }

  return (
    <RecipeContainer>
      <Header>
        <h1>{recipe.title}</h1>
        <span className="underline"></span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
          voluptatibus accusamus. Esse quisquam sunt, delectus a alias labore
          provident cupiditate est reprehenderit porro! Velit, dicta nemo nobis
          esse beatae pariatur.
        </p>
      </Header>
      <RecipeMainContent>
        <div className="recipe__image">
          <img src={`${recipe.image}`} alt={recipe.title} />
        </div>
        <RecipePreparation>
          <Ingredients>
            <h3>Ingredientes:</h3>
            <ol>
              {recipe.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
            </ol>
          </Ingredients>
          <Steps>
            <h3>Modo de Preparação:</h3>
            <ol>
              {recipe.preparationSteps.map((step, index) => {
                return <li key={index}>{step}</li>;
              })}
            </ol>
          </Steps>
        </RecipePreparation>
      </RecipeMainContent>
      <ButtonsContainer>
        <Button onClick={handleClickAddOrRemoveRecipeToCart}>
          {recipe.isRecipeInCart
            ? "Remover do carrinho"
            : "Adicionar ao carrinho"}
        </Button>
        <Button onClick={handleDeleteRecipe}>Apagar receita</Button>
      </ButtonsContainer>
    </RecipeContainer>
  );
};

export default Recipe;
