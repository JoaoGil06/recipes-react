import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer, Title } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        <Link to="/">
          <h1>Receitas dos Gil</h1>
        </Link>
        <span className="underline"></span>
      </Title>
    </HeaderContainer>
  );
};

export default Header;
