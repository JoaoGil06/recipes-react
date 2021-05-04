import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import recipesData from "../../data";

import { RecipeContainer, Header, Ingredients, Steps } from "./styles";

const Recipe = () => {
  const { id } = useParams();
  const params = useLocation();
  const [recipe, setRecipe] = useState({});

  console.log(params);

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
        <div className="recipe__image">
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className="recipe__title">
          <h1>{recipe.title}</h1>
        </div>
      </Header>
      <main>
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
      </main>
    </RecipeContainer>
  );
};

export default Recipe;
