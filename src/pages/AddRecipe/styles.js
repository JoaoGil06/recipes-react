import styled from "styled-components";
import { RECIPES_TYPES } from "../../constants/globalConstansts";

export const AddRecipeContainer = styled.main`
  min-height: calc(100vh - 30rem);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    return props.type === "ingredients" ? "repeat(4, 1fr)" : "repeat(3, 1fr)";
  }};
  column-gap: 1.2rem;
  row-gap: 1.2rem;
  justify-items: center;
  margin-top: -1rem;
`;

export const FormControl = styled.div`
  margin-top: 2rem;
  width: 100%;

  display: ${(props) => props.type === "number" && "flex"};
  align-items: ${(props) => props.type === "number" && "center"};
`;

export const InputLabel = styled.label`
  max-width: ${(props) => props.type === "number" && "9rem"};
  h3 {
    margin-bottom: 0.6rem;
    font-size: 1.4rem;
  }
`;

export const InputText = styled.input`
  width: ${(props) => (props.type === "number" ? "20rem" : "100%")};
  margin-left: ${(props) => props.type === "number" && "1.2rem"};
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  background: #222;
  color: #fff;

  border: ${(props) => {
    switch (props.category) {
      case RECIPES_TYPES.CARNE:
        return "1px solid var(--brilliantRose)";
      case RECIPES_TYPES.PEIXE:
        return "1px solid var(--fountainBlue);";
      case RECIPES_TYPES.VEGETARIANO:
        return "1px solid var(--limeade);";
      default:
        return "1px solid #fff";
    }
  }};

  box-shadow: ${(props) => {
    switch (props.category) {
      case RECIPES_TYPES.CARNE:
        return "0px 0px 15px 0px rgba(238, 96, 156, 0.65)";
      case RECIPES_TYPES.PEIXE:
        return "0px 0px 15px 0px rgba(80, 167, 194, 0.65) ;";
      case RECIPES_TYPES.VEGETARIANO:
        return "0px 0px 15px 0px rgba(88, 189, 0, 0.65);";
      default:
        return "0px 0px 15px 0px rgba(255, 255, 255, 0.65)";
    }
  }};

  &::placeholder {
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  transition: all 0.5s;
`;

export const InputTextArea = styled.textarea`
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.8rem 1rem;
  background: #222;
  color: #fff;
  border: ${(props) => {
    switch (props.category) {
      case RECIPES_TYPES.CARNE:
        return "1px solid var(--brilliantRose)";
      case RECIPES_TYPES.PEIXE:
        return "1px solid var(--fountainBlue);";
      case RECIPES_TYPES.VEGETARIANO:
        return "1px solid var(--limeade);";
      default:
        return "1px solid #fff";
    }
  }};

  box-shadow: ${(props) => {
    switch (props.category) {
      case RECIPES_TYPES.CARNE:
        return "0px 0px 15px 0px rgba(238, 96, 156, 0.65)";
      case RECIPES_TYPES.PEIXE:
        return "0px 0px 15px 0px rgba(80, 167, 194, 0.65) ;";
      case RECIPES_TYPES.VEGETARIANO:
        return "0px 0px 15px 0px rgba(88, 189, 0, 0.65);";
      default:
        return "0px 0px 15px 0px rgba(255, 255, 255, 0.65)";
    }
  }};

  &::placeholder {
    color: #fff;
  }
  &:focus {
    outline: none;
  }

  transition: all 0.5s;
`;

export const InputSelect = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  background: #222;
  color: #fff;
  border: ${(props) => {
    switch (props.category) {
      case RECIPES_TYPES.CARNE:
        return "1px solid var(--brilliantRose)";
      case RECIPES_TYPES.PEIXE:
        return "1px solid var(--fountainBlue);";
      case RECIPES_TYPES.VEGETARIANO:
        return "1px solid var(--limeade);";
      default:
        return "1px solid #fff";
    }
  }};

  box-shadow: ${(props) => {
    switch (props.category) {
      case RECIPES_TYPES.CARNE:
        return "0px 0px 15px 0px rgba(238, 96, 156, 0.65)";
      case RECIPES_TYPES.PEIXE:
        return "0px 0px 15px 0px rgba(80, 167, 194, 0.65) ;";
      case RECIPES_TYPES.VEGETARIANO:
        return "0px 0px 15px 0px rgba(88, 189, 0, 0.65);";
      default:
        return "0px 0px 15px 0px rgba(255, 255, 255, 0.65)";
    }
  }};

  &::placeholder {
    color: #fff;
  }
  &:focus {
    outline: none;
  }

  transition: all 0.5s;
`;

export const HR = styled.hr`
  width: 100%;
  margin-top: 2.5rem;
`;
