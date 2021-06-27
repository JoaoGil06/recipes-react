import React, { useState } from "react";
import { Link } from "react-router-dom";
import CutleryIcon from "../../assets/icons/cutlery.svg";

import { useSelector, useDisptach } from "react-redux";

import {
  CardContainer,
  CardImage,
  CardInfo,
  CardInfoHeader,
  CardInfoContent,
  CardButton,
  CardButtons,
} from "./styles";

const Card = ({
  id,
  image,
  title,
  category,
  description,
  ingredients,
  handleClickAddOrRemoveRecipeToCart,
  isRecipeInCart,
}) => {
  const [isCardHover, setIsCardHover] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
    >
      <CardImage className="front">
        <img src={image} alt={title} />
      </CardImage>
      <CardInfo isCardHover={isCardHover} category={category} className="back">
        <CardInfoHeader>
          <h1>{category}</h1>
          <img src={CutleryIcon} alt="recipes" />
        </CardInfoHeader>
        <CardInfoContent>
          <h1>{title}</h1>
          <p>{description}</p>
          <CardButtons>
            <CardButton category={category}>
              <Link to={`/recipes/${id}`}>Abrir Receita</Link>
            </CardButton>

            <CardButton category={category}>
              <Link
                to={`/cart`}
                onClick={() =>
                  handleClickAddOrRemoveRecipeToCart(
                    {
                      id,
                      title,
                      category,
                      ingredients,
                      description,
                      image,
                    },
                    isRecipeInCart
                  )
                }
              >
                {!isRecipeInCart
                  ? "Adicionar ao carrinho"
                  : "Remover do carrinho"}
              </Link>
            </CardButton>
          </CardButtons>
        </CardInfoContent>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
