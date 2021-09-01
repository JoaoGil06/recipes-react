import React from "react";
import { NavLink, Link } from "react-router-dom";

import { NavbarContainer, NavbarLogo, NavbarNav } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <Link to="/">LOGO</Link>
      </NavbarLogo>
      <NavbarNav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/mainDishes" activeClassName="active">
              Pratos Principais
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active">
              Carrinho
            </NavLink>
          </li>
        </ul>
      </NavbarNav>
    </NavbarContainer>
  );
};

export default Navbar;
