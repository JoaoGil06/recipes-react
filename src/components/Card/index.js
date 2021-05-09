import React, { useState } from "react";
import { Link } from "react-router-dom";
import CutleryIcon from "../../assets/icons/cutlery.svg";

import {
  CardContainer,
  CardImage,
  CardInfo,
  CardInfoHeader,
  CardInfoContent,
  CardButton,
  CardButtons,
} from "./styles";

const Card = ({ id, cardImage, title, category }) => {
  const [isCardHover, setIsCardHover] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
    >
      <CardImage className="front">
        <img src={cardImage} alt={title} />
      </CardImage>
      <CardInfo isCardHover={isCardHover} category={category} className="back">
        <CardInfoHeader>
          <h1>{category}</h1>
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
            <CardButton category={category}>
              <Link to={`/recipes/${id}`}>Abrir Receita</Link>
            </CardButton>

            <CardButton category={category}>
              <Link to={`/recipes/${id}`}>Adicionar ao carrinho</Link>
            </CardButton>
          </CardButtons>
        </CardInfoContent>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
