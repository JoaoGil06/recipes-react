import React, { useState, useEffect } from "react";

import * as cartActions from "../../store/cart/cartActions";
import { useSelector, useDispatch } from "react-redux";

import { CartContainer, CartItem } from "./styles";

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartList(cart);
  }, [cart]);

  const handleDeleteClick = (id) => {
    dispatch(cartActions.deleteCartRecipe(id));
  };

  return (
    <CartContainer>
      {cartList.map((item) => (
        <CartItem>
          <p key={item.id}>{item.title}</p>
          <div onClick={() => handleDeleteClick(item.id)}>Apagar</div>
        </CartItem>
      ))}
    </CartContainer>
  );
};

export default Cart;
