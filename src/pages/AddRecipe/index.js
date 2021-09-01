import React, { useState } from "react";

import { useDispatch } from "react-redux";
import * as mainDishesActions from "../../store/mainDishes/mainDishesActions";
import * as Yup from "yup";
import CloudUpload from "../../assets/icons/cloudupload.svg";

import {
  AddRecipeContainer,
  Title,
  Form,
  FormGrid,
  FormControl,
  InputLabel,
  InputText,
  InputSelect,
  InputFile,
  InputLabelFile,
  InputTextArea,
  HR,
  Button,
} from "./styles";
import { RECIPES_TYPES } from "../../constants/globalConstansts";

const AddRecipe = () => {
  const [numOfIngredients, setNumOfIngredients] = useState([]);
  const [preparationSteps, setPreparationSteps] = useState([]);
  const [recipeData, setRecipeData] = useState({
    title: "",
    category: "carne",
    description: "",
    image: {},
    ingredients: {},
    preparationSteps: {},
  });
  const [formErrors, setFormErrors] = useState({});

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
      ? setPreparationSteps(Array.apply(null, Array(15)).map((val, idx) => idx))
      : setPreparationSteps(
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
    } else if (files !== null && !!files) {
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

  const handleAddRecipe = async (e) => {
    e.preventDefault();

    const params = {
      ...recipeData,
      ingredients: Object.values(recipeData.ingredients),
      preparationSteps: Object.values(recipeData.preparationSteps),
    };

    try {
      const schema = Yup.object().shape({
        title: Yup.string().required({
          field: "title",
          errorMessage: "Titulo obrigatório",
        }),
        category: Yup.mixed().oneOf(
          [RECIPES_TYPES.CARNE, RECIPES_TYPES.PEIXE, RECIPES_TYPES.VEGETARIANO],
          {
            field: "category",
            errorMessage: "Categoria obrigatória",
          }
        ),
        description: Yup.string().required({
          field: "description",
          errorMessage: "Descrição obrigatória",
        }),
        ingredients: Yup.array().length(1, {
          field: "ingredients",
          errorMessage: "A receita deve ter pelo menos 1 ingrediente",
        }),
        preparationSteps: Yup.array().length(1, {
          field: "preparationSteps",
          errorMessage: "A receita deve ter pelo menos 1 passo",
        }),
      });

      await schema.validate(params, {
        abortEarly: false,
      });

      dispatch(mainDishesActions.addRecipe(params));
    } catch (err) {
      let errors = {};
      err.errors.map((error) => {
        errors[error.field] = error.errorMessage;
      });

      setFormErrors(errors);
    }
  };

  const renderTitle = () => (
    <Title>
      <h1>Adicionar nova receita</h1>
      <span className="underline"></span>
    </Title>
  );

  const renderForm = () => (
    <Form onSubmit={handleAddRecipe}>
      <FormControl>
        <InputLabel htmlFor="title">
          <h3>Titulo</h3>
          {!!formErrors.title && <span>{formErrors.title}</span>}
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
          {!!formErrors.category && <span>{formErrors.category}</span>}
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
          {!!formErrors.description && <span>{formErrors.description}</span>}
        </InputLabel>
        <InputText
          type="text"
          placeholder="Insere uma descrição para a receita"
          name="description"
          onChange={handleOnChange}
          category={recipeData.category}
        />
      </FormControl>
      <FormControl>
        <InputLabel>
          <h3>Imagem</h3>
        </InputLabel>
        <InputLabelFile htmlFor="file" category={recipeData.category}>
          <img src={CloudUpload} alt="Upload recipe" />
          <span>
            {!!recipeData["image"]?.name
              ? recipeData["image"].name
              : "Seleciona uma imagem"}
          </span>
        </InputLabelFile>
        <InputFile id="file" type="file" onChange={handleOnChange} />
      </FormControl>
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

        {!!formErrors.ingredients && <p>{formErrors.ingredients}</p>}
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
          name="preparationSteps"
          category={recipeData.category}
        />
        {!!formErrors.preparationSteps && <p>{formErrors.preparationSteps}</p>}
      </FormControl>
      <FormGrid type="steps">
        {preparationSteps.map((value, index) => (
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

      <Button onClick={handleAddRecipe} category={recipeData.category}>
        Adicionar receita
      </Button>
    </Form>
  );

  return (
    <AddRecipeContainer>
      {renderTitle()}
      {renderForm()}
    </AddRecipeContainer>
  );
};

export default AddRecipe;
