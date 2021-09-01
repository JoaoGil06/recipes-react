import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import * as cartActions from "../../store/cart/cartActions";
import { useSelector, useDispatch } from "react-redux";

import {
  CartPageContainer,
  CartHeader,
  CartHeaderSummary,
  SummaryCategory,
  CartContainer,
  CartItem,
  CartItemImage,
  CartItemName,
  CartItemDescription,
  CartItemInfo,
  CartItemDelete,
  CartButtons,
  Button,
} from "./styles";
import { RECIPES_TYPES } from "../../constants/globalConstansts";
import Modal from "../../components/Modal";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    !cart.length && history.push("/");
  }, [cart, history]);

  const handleDeleteClick = (id) => {
    dispatch(cartActions.deleteCartRecipe(id));
  };

  const handleCleanCartClick = () => {
    dispatch(cartActions.cleanCart());
  };

  const handleExportIngredientsClick = () => {
    const allIngredients = cart.map((cartItem) => cartItem.ingredients);
    // Converter um array com multiplos arrays em um array unico
    const arrayOfIngredients = [
      ...new Set([].concat.apply([], allIngredients)),
    ];
    setIngredients(arrayOfIngredients);
    console.log(arrayOfIngredients);
    setShowModal(!showModal);
  };

  const renderCartHeader = () => {
    const cartCarneCount = cart.filter(
      (cartItem) => cartItem.category === RECIPES_TYPES.CARNE
    ).length;

    const cartPeixeCount = cart.filter(
      (cartItem) => cartItem.category === RECIPES_TYPES.PEIXE
    ).length;

    const cartVegetarianosCount = cart.filter(
      (cartItem) => cartItem.category === RECIPES_TYPES.VEGETARIANO
    ).length;

    return (
      <CartHeader>
        <h1>Carrinho de Receitas</h1>
        <CartHeaderSummary>
          <SummaryCategory>
            <h3>Carne</h3>
            <h4>{cartCarneCount}</h4>
          </SummaryCategory>

          <SummaryCategory>
            <h3>Peixe</h3>
            <h4>{cartPeixeCount}</h4>
          </SummaryCategory>

          <SummaryCategory>
            <h3>Vegetariano</h3>
            <h4>{cartVegetarianosCount}</h4>
          </SummaryCategory>
        </CartHeaderSummary>
      </CartHeader>
    );
  };

  const renderCart = () =>
    cart.length > 0
      ? cart.map((item) => (
          <CartItem category={item.category}>
            <CartItemImage>
              <img src={item.image} alt={item.title} />
            </CartItemImage>
            <div>
              <CartItemName category={item.category}>{item.title}</CartItemName>
              <CartItemDescription>
                {`${item.description.substring(0, 100)}...`}
              </CartItemDescription>
              <CartItemInfo>
                <h4>{item.category}</h4>
                <h4>{item.ingredients.length} Ing.</h4>
              </CartItemInfo>
            </div>
            <CartItemDelete onClick={() => handleDeleteClick(item.id)}>
              X
            </CartItemDelete>
          </CartItem>
        ))
      : "Carrinho vazio";

  const renderCardButtons = () => (
    <CartButtons>
      <Button onClick={handleCleanCartClick}>Limpar carrinho</Button>
      <div>
        {cart.length}
        {cart.length > 1 ? " Receitas no carrinho" : " Receita no carrinho"}
      </div>
      <Button onClick={handleExportIngredientsClick}>
        Exportar ingredientes
      </Button>
    </CartButtons>
  );

  const renderModal = () => (
    <Modal
      data={{ title: "ingredientes", ingredients }}
      setShowModal={setShowModal}
    />
  );

  return (
    <CartPageContainer>
      {renderCartHeader()}
      <CartContainer isMoreThanOne={cart.length > 1}>
        {renderCart()}
      </CartContainer>
      {renderCardButtons()}
      {showModal && renderModal()}
    </CartPageContainer>
  );
};

export default Cart;
