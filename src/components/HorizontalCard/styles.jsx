import styled from "styled-components";

export const HorizontalCardContainer = styled.div`
  width: 45rem;
  height: 20rem;
  border-radius: 2.5rem;
  color: #fff;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem 0 3rem;

  h2 {
    font-size: 2.5rem;
  }

  img {
    width: 3rem;
  }
`;
export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .line {
    height: 2px;
    width: 25rem;
    background-color: #fff;
  }
`;
export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Lato", sans-serif;
    font-size: 10rem;
  }

  h2 {
    font-family: "Lato", sans-serif;
    font-size: 2.5rem;
    margin-top: -1.5rem;
  }
`;
