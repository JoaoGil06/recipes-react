import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0;
  margin-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
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

  .underline {
    height: 0.2rem;
    width: 100%;
    background: #fff;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    background: ${(props) => {
      switch (props.category) {
        case "carne":
          return "var(--redGradient)";
        case "peixe":
          return "var(--blueGradient)";
        case "vegetariano":
          return "var(--greenGradient)";
        default:
          return "#fff";
      }
    }};

    cursor: pointer;

    &:first-child {
      color: #222;

      & > span {
        background: #222;
      }
    }

    & > span {
      background: #fff;
    }
  }
`;

export const TabCircle = styled.span`
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.5rem;

  background: ${(props) => {
    switch (props.category) {
      case "carne":
        return "var(--redGradient)";
      case "peixe":
        return "var(--blueGradient)";
      case "vegetariano":
        return "var(--greenGradient)";
      default:
        return "#fff";
    }
  }};
`;
