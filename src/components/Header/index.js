import React from "react";

import { HeaderContainer, Title, TabContainer, Tab, TabCircle } from "./styles";

const Header = ({ categories, filterRecipes }) => {
  return (
    <HeaderContainer>
      <Title>
        <h1>Receitas dos Gil</h1>
        <span className="underline"></span>
      </Title>
      <TabContainer>
        {categories.map((category, index) => (
          <Tab
            category={category}
            onClick={() => filterRecipes(category)}
            key={index}
          >
            <TabCircle category={category} />
            {category}
          </Tab>
        ))}
      </TabContainer>
    </HeaderContainer>
  );
};

export default Header;
