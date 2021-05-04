import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
  }

  h1 {
    margin: 0;
  }

  .underline {
    height: 0.5rem;
    width: 8rem;
    background: #f9dc5c;
    margin-top: 1.25rem;
  }
`;
