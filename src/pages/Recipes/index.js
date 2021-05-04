import React, { useState } from "react";
import recipesData from "../../data";

import Card from "../../components/Card";
import { RecipesContainer } from "./styles";
const Recipes = () => {
  const [recipes, setRecipes] = useState([...recipesData]);

  return (
    <RecipesContainer>
      {recipes.map((recipe) => {
        return <Card key={recipe.id} {...recipe} />;
      })}
    </RecipesContainer>
  );
};

export default Recipes;
