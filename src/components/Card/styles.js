import styled from "styled-components";

export const CardContainer = styled.div`
  width: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;
export const CardImage = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;
export const CardInfo = styled.div`
  color: #222222;
  position: absolute;

  border-radius: 10px;
  display: flex;
  flex-direction: column;

  /* display: none; */
  transition: 1s;
  /* background: #f9dc5c; */
  height: 100%;
  width: 100%;

  ${({ isCardHover }) =>
    isCardHover &&
    `
    display: flex;

      
    `}

  background: ${(props) => props.gradient};
`;

export const CardInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #fff;
    text-transform: capitalize;
  }

  img {
    width: 3.5rem;
  }
`;

export const CardInfoContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    margin-bottom: 1rem;
  }

  p {
    max-width: 25.5rem;
    text-align: left;
    color: #fff;
    font-weight: 200;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

export const CardButtons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const CardButton = styled.button`
  background: transparent;
  border: 1px solid #222222;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-family: "Open Sans";
  font-size: 1rem;
  transition: 0.5s;

  a {
    text-decoration: none;
    color: #222222;

    img {
      width: 2rem;
    }
  }

  &:hover {
    background: #222222;
    cursor: pointer;
    a {
      color: #f9dc5c;
    }
  }

  &:focus {
    outline: none !important;
  }
`;
