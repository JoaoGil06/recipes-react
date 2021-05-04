import React, { useState } from "react";
import recipesData from "../../data";

import Card from "../../components/Card";
import { RecipesContainer } from "./styles";
const Recipes = () => {
  const [recipes, setRecipes] = useState([...recipesData]);

  const renderCard = (recipes) => {
    const cards = recipes.map((recipe) => {
      let gradient = "";

      switch (recipe.type) {
        case "carne":
          gradient = "linear-gradient(to right, #ec8c69 0%, #ee609c 100%)";
          break;
        case "peixe":
          gradient =
            "linear-gradient(to right, #b7f8db 0%, #5aafc5 100%, #50a7c2 100%)";
          break;
        case "vegetariano":
          gradient = "linear-gradient(to right, #9be15d 0%, #00e3ae 100%)";

          break;
        default:
          gradient = "linear-gradient(to right, #ec8c69 0%, #ee609c 100%)";
      }

      return <Card key={recipe.id} {...recipe} gradient={gradient} />;
    });

    return cards;
  };

  return <RecipesContainer>{renderCard(recipes)}</RecipesContainer>;
};

export default Recipes;
