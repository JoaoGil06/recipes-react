import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CardContainer, CardImage, CardInfo, CardButton } from "./styles";

const Card = ({ id, cardImage, title }) => {
  return (
    <CardContainer>
      <CardImage>
        <img src={cardImage} alt={title} />
      </CardImage>
      <CardInfo>
        <h2 className="card__info-title">{title}</h2>

        <CardButton isHide={true}>
          <Link to={`/recipes/${id}`}>Receita &#x2192;</Link>
        </CardButton>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
