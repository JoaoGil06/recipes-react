import styled from "styled-components";

export const RecipesContainer = styled.main`
  height: calc(100vh - 30rem);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 1.5rem;
  justify-items: center;
`;
