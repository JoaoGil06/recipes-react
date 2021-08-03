import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipes" exact>
          <Recipes />
        </Route>
        <Route path="/recipes/:id">
          <Recipe />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
