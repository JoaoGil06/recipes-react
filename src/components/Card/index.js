import React, { useState } from "react";
import { Link } from "react-router-dom";
import CutleryIcon from "../../assets/icons/cutlery.svg";
import ShoppingCart from "../../assets/icons/shoppingcart.svg";

import {
  CardContainer,
  CardImage,
  CardInfo,
  CardInfoHeader,
  CardInfoContent,
  CardButton,
  CardButtons,
} from "./styles";

const Card = ({ id, cardImage, title, type, gradient }) => {
  const [isCardHover, setIsCardHover] = useState(false);

  console.log(cardImage);

  return (
    <CardContainer
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
    >
      <CardImage>
        <img src={cardImage} alt={title} />
      </CardImage>
      <CardInfo isCardHover={isCardHover} gradient={gradient}>
        <CardInfoHeader>
          <h1>{type}</h1>
          <img src={CutleryIcon} alt="recipes" />
        </CardInfoHeader>
        <CardInfoContent>
          <h1>{title}</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, voluptatibus accusamus. Esse quisquam sunt, delectus a
            alias labore provident cupiditate est reprehenderit porro! Velit,
            dicta nemo nobis esse beatae pariatur.
          </p>
          <CardButtons>
            <CardButton>
              <Link to={`/recipes/${id}`}>
                <img src={ShoppingCart} alt="Recipes Cart" />
              </Link>
            </CardButton>

            <CardButton>
              <Link to={`/recipes/${id}`}>Receita &#x2192;</Link>
            </CardButton>
          </CardButtons>
        </CardInfoContent>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
