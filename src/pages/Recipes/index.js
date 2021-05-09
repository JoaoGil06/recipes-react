import React, { useState } from "react";
import recipesData from "../../data";

import Header from "../../components/Header";
import Card from "../../components/Card";
import { RecipesContainer } from "./styles";

const allCategories = [
  "todos",
  ...new Set(recipesData.map((recipe) => recipe.category)),
];

const teste = ["todos", "carne", "peixe", "vegetariano"];

const Recipes = () => {
  const [recipes, setRecipes] = useState(recipesData);
  const [categories, setCategories] = useState(allCategories);

  const filterRecipes = (category) => {
    if (category === "todos") {
      setRecipes(recipesData);
      return;
    }
    const newRecipes = recipesData.filter(
      (recipe) => recipe.category === category
    );
    setRecipes(newRecipes);
  };

  const renderCard = (recipes) => {
    const cards = recipes.map((recipe) => {
      return <Card key={recipe.id} {...recipe} category={recipe.category} />;
    });
    return cards;
  };

  const renderHeader = () => (
    <Header categories={categories} filterRecipes={filterRecipes} />
  );

  return (
    <>
      {renderHeader()}
      <RecipesContainer>{renderCard(recipes)}</RecipesContainer>
    </>
  );
};

export default Recipes;
