import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import * as recipesActions from "../../store/recipes/recipesActions";

import {
  AddRecipeContainer,
  Form,
  FormControl,
  InputLabel,
  InputText,
  InputSelect,
  FormGrid,
  InputTextArea,
  HR,
} from "./styles";

const AddRecipe = () => {
  const [numOfIngredients, setNumOfIngredients] = useState([]);
  const [numOfSteps, setNumOfSteps] = useState([]);
  const [recipeData, setRecipeData] = useState({
    title: "",
    category: "carne",
    description: "",
    image: {},
    ingredients: {},
    preparationSteps: {},
  });

  const dispatch = useDispatch();

  const handleChangeNumberOfIngredients = (e) => {
    const quantity = parseInt(e.target.value);

    quantity > 15
      ? setNumOfIngredients(Array.apply(null, Array(15)).map((val, idx) => idx))
      : setNumOfIngredients(
          Array.apply(null, Array(quantity)).map((val, idx) => idx)
        );
  };

  const handleChangeNumberOfSteps = (e) => {
    const quantity = parseInt(e.target.value);

    quantity > 15
      ? setNumOfSteps(Array.apply(null, Array(15)).map((val, idx) => idx))
      : setNumOfSteps(
          Array.apply(null, Array(quantity)).map((val, idx) => idx)
        );
  };

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;

    if (name.includes("ingredient")) {
      setRecipeData({
        ...recipeData,
        ingredients: { ...recipeData.ingredients, [name]: value },
      });
    } else if (name.includes("preparationStep")) {
      setRecipeData({
        ...recipeData,
        preparationSteps: { ...recipeData.preparationSteps, [name]: value },
      });
    } else if (files !== null) {
      setRecipeData({
        ...recipeData,
        image: files["0"],
      });
    } else {
      setRecipeData({
        ...recipeData,
        [name]: value,
      });
    }
  };

  const handleAddRecipe = (e) => {
    e.preventDefault();

    const params = {
      ...recipeData,
      ingredients: Object.values(recipeData.ingredients),
      preparationSteps: Object.values(recipeData.preparationSteps),
    };

    dispatch(recipesActions.addRecipe(params));
  };

  return (
    <AddRecipeContainer>
      <Form onSubmit={handleAddRecipe}>
        <FormControl>
          <InputLabel htmlFor="title">
            <h3>Titulo</h3>
          </InputLabel>
          <InputText
            type="text"
            placeholder="Insere um titulo para a receita"
            name="title"
            onChange={handleOnChange}
            category={recipeData.category}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="category">
            <h3>Categoria</h3>
          </InputLabel>
          <InputSelect
            id="category"
            type="text"
            placeholder="Categoria"
            name="category"
            onChange={handleOnChange}
            category={recipeData.category}
            defaultValue={recipeData.category}
          >
            <option value="carne">Carne</option>
            <option value="peixe">Peixe</option>
            <option value="vegetariano">Vegetariano</option>
          </InputSelect>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="description">
            <h3>Descrição</h3>
          </InputLabel>
          <InputText
            type="text"
            placeholder="Insere uma descrição para a receita"
            name="description"
            onChange={handleOnChange}
            category={recipeData.category}
          />
        </FormControl>
        <input type="file" onChange={handleOnChange} />
        <HR />
        <FormControl type="number">
          <InputLabel htmlFor="numOfIngredients" type="number">
            <h3>Nº de Ingredientes</h3>
          </InputLabel>
          <InputText
            type="number"
            onChange={handleChangeNumberOfIngredients}
            max={15}
            min={0}
            placeholder="Nº de Ingredientes"
            name="numOfIngredients"
            category={recipeData.category}
          />
        </FormControl>
        <FormGrid type="ingredients">
          {numOfIngredients.map((value, index) => (
            <FormControl>
              <InputLabel htmlFor={`ingredient-${index + 1}`}>
                <h3>Ingrediente nº 0{index + 1}</h3>
              </InputLabel>
              <InputText
                key={index}
                type="text"
                placeholder={`Ingrediente 0${index + 1}`}
                name={`ingredient-${index + 1}`}
                onChange={handleOnChange}
                category={recipeData.category}
              />
            </FormControl>
          ))}
        </FormGrid>
        <HR />
        <FormControl type="number">
          <InputLabel htmlFor="numOfSteps" type="number">
            <h3>Nº de Passos</h3>
          </InputLabel>
          <InputText
            type="number"
            onChange={handleChangeNumberOfSteps}
            max={15}
            min={0}
            placeholder="Nº de Passos"
            name="numOfSteps"
            category={recipeData.category}
          />
        </FormControl>
        <FormGrid type="steps">
          {numOfSteps.map((value, index) => (
            <FormControl>
              <InputLabel htmlFor={`preparationStep-${index + 1}`}>
                <h3>Passo nº 0{index + 1}</h3>
              </InputLabel>
              <InputTextArea
                key={index}
                type="text"
                placeholder={`Passo 0${index + 1}`}
                name={`preparationStep-${index + 1}`}
                onChange={handleOnChange}
                rows="4"
                category={recipeData.category}
              ></InputTextArea>
            </FormControl>
          ))}
        </FormGrid>

        <button>Enviar</button>
      </Form>
    </AddRecipeContainer>
  );
};

export default AddRecipe;
