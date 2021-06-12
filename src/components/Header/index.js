import React from "react";

import { HeaderContainer, Title, TabContainer, Tab, TabCircle } from "./styles";

const Header = ({ categories, filterRecipes, selectedCategory }) => {
  console.log(selectedCategory);
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
            isActive={category === selectedCategory}
            selectedCategory={selectedCategory}
          >
            <TabCircle
              category={category}
              isActive={category === selectedCategory}
              selectedCategory={selectedCategory}
            />
            {category}
          </Tab>
        ))}
      </TabContainer>
    </HeaderContainer>
  );
};

export default Header;
