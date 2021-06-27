import styled from "styled-components";
import { RECIPES_TYPES } from "../../constants/globalConstansts";

export const CardContainer = styled.div`
  width: 30rem;
  height: 45rem;
  perspective: 150rem;
  -moz-perspective: 150rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  transition: all 0.8s;

  &:hover {
    transform: rotateY(180deg);
  }
`;
export const CardImage = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
export const CardInfo = styled.div`
  color: #fff;
  position: absolute;

  border-radius: 10px;
  display: flex;
  flex-direction: column;

  display: none;
  transition: 1s;
  height: 100%;
  width: 100%;

  ${({ isCardHover }) =>
    isCardHover &&
    `
    display: flex;
    transform: rotateY(180deg);
    `}

  background: ${(props) => {
    switch (props.category) {
      case RECIPES_TYPES.CARNE:
        return "var(--redGradient)";
      case RECIPES_TYPES.PEIXE:
        return "var(--blueGradient)";
      case RECIPES_TYPES.VEGETARIANO:
        return "var(--greenGradient)";
      default:
        return "#fff";
    }
  }};
`;

export const CardInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0 1.5rem;

  h1 {
    color: #fff;
    text-transform: capitalize;
  }

  img {
    width: 3.5rem;
  }
`;

export const CardInfoContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    margin-bottom: 2rem;
  }

  p {
    max-width: 25.5rem;
    text-align: left;
    color: #fff;
    font-weight: 200;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

export const CardButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const CardButton = styled.button`
  background: transparent;

  padding: 0.5rem 1rem;
  font-weight: 600;
  font-family: "Open Sans";
  font-size: 1.1rem;
  transition: 0.5s;
  border: 1px solid #fff;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: #fff;

    img {
      width: 2rem;
    }
  }

  &:hover {
    cursor: pointer;
    background: #fff;
    a {
      color: ${(props) => {
        switch (props.category) {
          case RECIPES_TYPES.CARNE:
            return "var(--brilliantRose)";
          case RECIPES_TYPES.PEIXE:
            return "var(--fountainBlue)";
          case RECIPES_TYPES.VEGETARIANO:
            return "var(--limeade)";
          default:
            return "var(--brilliantRose)";
        }
      }};
    }
  }

  &:focus {
    outline: none !important;
  }
`;
