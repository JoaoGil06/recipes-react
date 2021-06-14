import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 5rem - 9rem);
  margin: 0 auto;
  margin-top: 2.5rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50rem;

  .underline {
    height: 0.2rem;
    width: 100%;
    background: #fff;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .p {
    font-size: 1.2rem;
  }
`;

export const RecipeMainContent = styled.main`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .recipe__image {
    width: 55rem;
  }
  img {
    width: 100%;
  }
`;

export const RecipePreparation = styled.main`
  font-size: 1.2rem;
  margin-left: 5rem;
  max-width: 30vw;
`;

export const Ingredients = styled.div`
  li:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

export const Steps = styled.div`
  li:not(:first-child) {
    margin-top: 0.5rem;
  }
`;
