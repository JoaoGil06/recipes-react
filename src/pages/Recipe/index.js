import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import recipesData from "../../data";

import {
  RecipeContainer,
  Header,
  RecipeMainContent,
  RecipePreparation,
  Ingredients,
  Steps,
} from "./styles";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const actualRecipe = recipesData.find((value) => value.id !== id);
    setRecipe(actualRecipe);
    console.log(actualRecipe);
  }, [id, setRecipe]);

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
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <RecipePreparation>
          <Ingredients>
            <h3>Ingredientes:</h3>
            <ol>
              {recipe.ingredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.value}</li>;
              })}
            </ol>
          </Ingredients>
          <Steps>
            <h3>Modo de Preparação:</h3>
            <ol>
              {recipe.preparationSetps.map((step) => {
                return <li key={step.id}>{step.value}</li>;
              })}
            </ol>
          </Steps>
        </RecipePreparation>
      </RecipeMainContent>
    </RecipeContainer>
  );
};

export default Recipe;
