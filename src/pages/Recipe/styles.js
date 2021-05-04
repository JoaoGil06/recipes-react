import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 35rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 35rem;

  img {
    width: 100%;
  }
`;

export const Ingredients = styled.div``;

export const Steps = styled.div`
  & > li:not(:first-child) {
    margin-top: 1rem;
  }
`;
