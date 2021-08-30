import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CutleryIcon from "../../assets/icons/cutlery.svg";

import {
  CardContainer,
  CardImage,
  CardInfo,
  CardInfoHeader,
  CardInfoContent,
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

  useEffect(() => {
    console.log("isCardHover", isCardHover);
  }, [isCardHover]);

  return (
    <Link to={`/recipes/${id}`}>
      <CardContainer
        onMouseEnter={() => setIsCardHover(true)}
        onMouseLeave={() => setIsCardHover(false)}
      >
        <CardImage className="front" isCardHover={isCardHover}>
          <img src={image} alt={title} />
        </CardImage>
        <CardInfo
          category={category}
          className="back"
          isCardHover={isCardHover}
        >
          <CardInfoHeader>
            <h1>{category}</h1>
            <img src={CutleryIcon} alt="recipes" />
          </CardInfoHeader>
          <CardInfoContent isCardHover={isCardHover}>
            <h1>{title}</h1>
            <p>{description}</p>
          </CardInfoContent>
        </CardInfo>
      </CardContainer>
    </Link>
  );
};

export default Card;
