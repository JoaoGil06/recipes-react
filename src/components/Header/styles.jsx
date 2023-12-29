import styled from "styled-components";
import { RECIPES_TYPES } from "../../constants/globalConstansts";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
  }

  .underline {
    height: 0.2rem;
    width: 100%;
    background: #fff;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;

  background: ${(props) => {
    if (props.isActive && props.selectedCategory === RECIPES_TYPES.TODOS) {
      return "#fff";
    }

    if (props.isActive && props.selectedCategory === RECIPES_TYPES.CARNE) {
      return "var(--redGradient)";
    }

    if (props.isActive && props.selectedCategory === RECIPES_TYPES.PEIXE) {
      return "var(--blueGradient)";
    }

    if (
      props.isActive &&
      props.selectedCategory === RECIPES_TYPES.VEGETARIANO
    ) {
      return "var(--greenGradient)";
    }

    if (props.isActive && props.selectedCategory === RECIPES_TYPES.SALADAS) {
      return "var(--greenGradient)";
    }

    if (props.isActive && props.selectedCategory === RECIPES_TYPES.MOLHOS) {
      return "var(--orangeGrandient)";
    }

    if (props.isActive && props.selectedCategory === RECIPES_TYPES.CONSERVAS) {
      return "var(--pinkGradient)";
    }
  }};

  &:first-child {
    color: ${(props) =>
      props.isActive && props.selectedCategory === RECIPES_TYPES.TODOS
        ? "#222"
        : "#fff"};
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    background: ${(props) => {
      switch (props.category) {
        case RECIPES_TYPES.CARNE:
          return "var(--redGradient)";
        case RECIPES_TYPES.PEIXE:
          return "var(--blueGradient)";
        case RECIPES_TYPES.VEGETARIANO:
          return "var(--greenGradient)";
        case RECIPES_TYPES.SALADAS:
          return "var(--greenGradient)";
        case RECIPES_TYPES.MOLHOS:
          return "var(--orangeGrandient)";
        case RECIPES_TYPES.CONSERVAS:
          return "var(--pinkGradient)";
        default:
          return "#fff";
      }
    }};

    cursor: pointer;

    &:first-child {
      color: #222;

      & > span {
        background: #222;
      }
    }

    & > span {
      background: #fff;
    }
  }
`;

export const TabCircle = styled.span`
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.5rem;

  background: ${(props) => {
    switch (props.category) {
      case RECIPES_TYPES.CARNE:
        return "var(--redGradient)";
      case RECIPES_TYPES.PEIXE:
        return "var(--blueGradient)";
      case RECIPES_TYPES.VEGETARIANO:
        return "var(--greenGradient)";
      case RECIPES_TYPES.SALADAS:
        return "var(--greenGradient)";
      case RECIPES_TYPES.MOLHOS:
        return "var(--orangeGrandient)";
      case RECIPES_TYPES.CONSERVAS:
        return "var(--pinkGradient)";
      default:
        return "#fff";
    }
  }};

  background: ${(props) => {
    let color;
    if (props.isActive) {
      color = "#fff";
    }

    if (props.isActive && props.selectedCategory === RECIPES_TYPES.TODOS) {
      color = "#222";
    }

    return color;
  }};
`;
