import React, { useState } from "react";
import recipesData from "../../data";

import Card from "../../components/Card";
import { RecipesContainer } from "./styles";
const Recipes = () => {
  const [recipes, setRecipes] = useState([...recipesData]);

  const renderCard = (recipes) => {
    const cards = recipes.map((recipe) => {
      let gradient, btnColor;

      switch (recipe.type) {
        case "carne":
          gradient = "linear-gradient(to right, #ec8c69 0%, #ee609c 100%)";
          btnColor = "#ee609c";
          break;
        case "peixe":
          gradient =
            "linear-gradient(to right, #b7f8db 0%, #5aafc5 100%, #50a7c2 100%)";
          btnColor = "#50a7c2";

          break;
        case "vegetariano":
          gradient = "linear-gradient(to right, #9be15d 0%, #00e3ae 100%)";
          btnColor = "#58bd00";

          break;
        default:
          gradient = "linear-gradient(to right, #ec8c69 0%, #ee609c 100%)";
          btnColor = "#ee609c";
      }

      return (
        <Card
          key={recipe.id}
          {...recipe}
          gradient={gradient}
          btnColor={btnColor}
        />
      );
    });

    return cards;
  };

  return <RecipesContainer>{renderCard(recipes)}</RecipesContainer>;
};

export default Recipes;
