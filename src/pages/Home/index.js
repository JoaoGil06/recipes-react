import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import * as recipesActions from "../../store/recipes/recipesActions";

import CutleryIcon from "../../assets/icons/cutlery.svg";
import ShoppingCart from "../../assets/icons/shoppingcart.svg";
import RecipeBook from "../../assets/icons/recipebook.svg";
import HorizontalCard from "../../components/HorizontalCard";

import { HomeContainer } from "./styles";

const Home = () => {
  const { totalRecipes } = useSelector((state) => state.recipes);
  useSelector((state) => console.log(state));
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipesActions.getTotalRecipesCount());
  }, [dispatch]);

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
          quantity={totalRecipes}
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
          quantity={cart.length}
          description="adicionadas"
        />
      </Link>

      <Link to="/recipes/add">
        <HorizontalCard
          gradient={{
            backgroundImage: "linear-gradient(to right, #ff4e50, #f9d423)",
          }}
          title="Adicionar Receita"
          icon={RecipeBook}
          quantity={cart.length}
          description="disponíveis"
        />
      </Link>
    </HomeContainer>
  );
};

export default Home;
