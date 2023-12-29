import styled from "styled-components";
import { RECIPES_TYPES } from "../../constants/globalConstansts";

export const CartPageContainer = styled.div`
  min-height: calc(100vh - 15rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartHeader = styled.div`
  margin-top: 5rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const CartHeaderSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SummaryCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: ${(props) => {
    return props.isMoreThanOne ? "5rem" : "0";
  }};
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 2rem 6rem;

  border-radius: 2rem;

  border: 1px solid var(--brilliantRose);

  position: relative;
  margin-top: 5rem;

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
        return "1px solid#fff";
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
`;

export const CartItemImage = styled.div`
  width: 16rem;
  margin-right: 2rem;
  img {
    width: 100%;
    border-radius: 2rem;
  }
`;

export const CartItemName = styled.h2`
  color: ${(props) => {
    switch (props.category) {
      case RECIPES_TYPES.CARNE:
        return "var(--brilliantRose)";
      case RECIPES_TYPES.PEIXE:
        return "var(--fountainBlue);";
      case RECIPES_TYPES.VEGETARIANO:
        return "var(--limeade);";
      case RECIPES_TYPES.MOLHOS:
        return "var(--pastelOrange);";
      case RECIPES_TYPES.CONSERVAS:
        return "var(--classicRose);";
      case RECIPES_TYPES.SALADAS:
        return "var(--limeade);";
      default:
        return "#fff";
    }
  }};
`;

export const CartItemDescription = styled.p`
  width: 20rem;
`;

export const CartItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    text-transform: capitalize;
  }
`;

export const CartItemDelete = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
  font-family: "Open Sans";
  font-weight: bold;
`;

export const CartButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.5rem;
  width: 50rem;
`;

export const Button = styled.button`
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
