import styled from "styled-components";

export const HomeContainer = styled.div`
  height: calc(100vh - 25rem);
  margin-top: 10rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 2.5rem;
  justify-items: center;

  & > a {
    height: 20rem;
  }
`;
