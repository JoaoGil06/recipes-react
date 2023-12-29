import styled from "styled-components";
import { RECIPES_TYPES } from "../../constants/globalConstansts";

export const AddRecipeContainer = styled.main`
  min-height: calc(100vh - 30rem);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  a {
    text-decoration: none;
    color: #fff;
  }

  .underline {
    height: 0.2rem;
    width: 25%;
    background: #fff;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
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

  input[type="file"] {
    display: none;
  }

  p {
    margin-left: 0.6rem;
    color: red;
  }
`;

export const InputLabel = styled.label`
  max-width: ${(props) => props.type === "number" && "9rem"};
  display: flex;
  align-items: center;
  h3 {
    margin-bottom: 0.6rem;
    font-size: 1.4rem;
  }

  span {
    margin-left: 0.6rem;
    margin-bottom: 0.6rem;
    color: red;
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
      case RECIPES_TYPES.MOLHOS:
        return "1px solid var(--pastelOrange);";
      case RECIPES_TYPES.CONSERVAS:
        return "1px solid var(--classicRose);";
      case RECIPES_TYPES.SALADAS:
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
      case RECIPES_TYPES.MOLHOS:
        return "0px 0px 15px 0px rgba(255, 179, 71, 0.65);";
      case RECIPES_TYPES.CONSERVAS:
        return "0px 0px 15px 0px rgba(251, 211, 233, 0.65);";
      case RECIPES_TYPES.SALADAS:
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
      case RECIPES_TYPES.MOLHOS:
        return "1px solid var(--pastelOrange);";
      case RECIPES_TYPES.CONSERVAS:
        return "1px solid var(--classicRose);";
      case RECIPES_TYPES.SALADAS:
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
      case RECIPES_TYPES.MOLHOS:
        return "0px 0px 15px 0px rgba(255, 179, 71, 0.65);";
      case RECIPES_TYPES.CONSERVAS:
        return "0px 0px 15px 0px rgba(251, 211, 233, 0.65);";
      case RECIPES_TYPES.SALADAS:
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
      case RECIPES_TYPES.MOLHOS:
        return "1px solid var(--pastelOrange);";
      case RECIPES_TYPES.CONSERVAS:
        return "1px solid var(--classicRose);";
      case RECIPES_TYPES.SALADAS:
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
      case RECIPES_TYPES.MOLHOS:
        return "0px 0px 15px 0px rgba(255, 179, 71, 0.65);";
      case RECIPES_TYPES.CONSERVAS:
        return "0px 0px 15px 0px rgba(251, 211, 233, 0.65);";
      case RECIPES_TYPES.SALADAS:
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

export const InputLabelFile = styled.label`
  max-width: 30rem;
  background: transparent;
  box-shadow: ${(props) => {
    switch (props.category) {
      case RECIPES_TYPES.CARNE:
        return "0px 0px 15px 0px rgba(238, 96, 156, 0.65)";
      case RECIPES_TYPES.PEIXE:
        return "0px 0px 15px 0px rgba(80, 167, 194, 0.65) ;";
      case RECIPES_TYPES.VEGETARIANO:
        return "0px 0px 15px 0px rgba(88, 189, 0, 0.65);";
      case RECIPES_TYPES.MOLHOS:
        return "0px 0px 15px 0px rgba(255, 179, 71, 0.65);";
      case RECIPES_TYPES.CONSERVAS:
        return "0px 0px 15px 0px rgba(251, 211, 233, 0.65);";
      case RECIPES_TYPES.SALADAS:
        return "0px 0px 15px 0px rgba(88, 189, 0, 0.65);";
      default:
        return "0px 0px 15px 0px rgba(255, 255, 255, 0.65)";
    }
  }};
  border: ${(props) => {
    switch (props.category) {
      case RECIPES_TYPES.CARNE:
        return "1px solid var(--brilliantRose)";
      case RECIPES_TYPES.PEIXE:
        return "1px solid var(--fountainBlue);";
      case RECIPES_TYPES.VEGETARIANO:
        return "1px solid var(--limeade);";
      case RECIPES_TYPES.MOLHOS:
        return "1px solid var(--pastelOrange);";
      case RECIPES_TYPES.CONSERVAS:
        return "1px solid var(--classicRose);";
      case RECIPES_TYPES.SALADAS:
        return "1px solid var(--limeade);";
      default:
        return "1px solid #fff";
    }
  }};
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:not(.chosen):hover {
  }

  img {
    width: 5rem;
    margin-right: 1.5rem;
  }
`;

export const InputFile = styled.input``;

export const HR = styled.hr`
  width: 100%;
  margin-top: 2.5rem;
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  width: 15rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  align-self: center;
  background: transparent;
  color: #fff;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-family: "Open Sans";
  font-size: 1.1rem;
  transition: 0.5s;
  border: 1px solid #fff;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background: #fff;

    color: #222;
  }

  &:focus {
    outline: none !important;
  }
`;

export const SelectOption = styled.option`
  text-transform: capitalize;
  span {
    text-transform: capitalize;
  }
`;
