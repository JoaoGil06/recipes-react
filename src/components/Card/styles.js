import styled from "styled-components";

export const CardContainer = styled.div`
  width: 22rem;

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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  border-radius: 10px;

  background: #f9dc5c;
`;
export const CardButton = styled.button`
  background: transparent;
  border: 1px solid #222222;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-family: "Open Sans";
  font-size: 1rem;
  width: 50%;
  margin: 0 auto;
  transition: 0.5s;

  a {
    text-decoration: none;
    color: #222222;
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

/* .isHide {
  display: none;
  transition: 1s;
} */
