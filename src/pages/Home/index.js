import React from "react";

import { Link } from "react-router-dom";

import CutleryIcon from "../../assets/icons/cutlery.svg";
import ShoppingCart from "../../assets/icons/shoppingcart.svg";
import HorizontalCard from "../../components/HorizontalCard";

import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <Link to="/recipes">
        <HorizontalCard
          gradient={{
            backgroundImage:
              "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)",
          }}
          title="Receitas"
          icon={CutleryIcon}
          quantity="10"
          description="disponíveis"
        />
      </Link>
      <Link to="/cart">
        <HorizontalCard
          gradient={{
            backgroundImage:
              "linear-gradient(to right, #473b7b 0%, #3584a7 48.53%, #30d2be 100%)",
          }}
          title="Carrinho"
          icon={ShoppingCart}
          quantity="05"
          description="adicionadas"
        />
      </Link>
    </HomeContainer>
  );
};

export default Home;
