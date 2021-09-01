import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MainDishes from "./pages/MainDishes";
import Recipe from "./pages/Recipe";
import AddRecipe from "./pages/AddRecipe";
import Cart from "./pages/Cart";

import { useSelector } from "react-redux";

import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/mainDishes" exact>
          <MainDishes />
        </Route>
        <Route path="/recipes/add" exact>
          <AddRecipe />
        </Route>
        <Route path="/recipes/:id" exact>
          <Recipe />
        </Route>
        {!cart.length ? (
          <Route exact path="/cart">
            <Cart />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
