import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 3rem;
  padding: 3rem;
  overflow: hidden;
`;

export const ToastContainer = styled.div`
  width: 36rem;

  position: relative;
  padding: 1.6rem 3rem 1.6rem 1.6rem;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);
  font-size: 1.4rem;
  display: flex;

  background: #ebf8ff;
  color: #3172b7;

  ${(props) =>
    props.type === "success" &&
    css`
      background: #e6fffa;
      color: #2e656a;
    `}

  ${(props) =>
    props.type === "error" &&
    css`
      background: #fddede;
      color: #c53030;
    `}

    ${(props) =>
    props.show &&
    css`
      -webkit-animation: slide-left 0.5s both;
      animation: slide-left 0.5s both;
    `}

  div {
    flex: 1;

    p {
      margin-top: 0.4rem;
      opacity: 0.8;
      line-height: 2rem;
      font-size: 1.2rem;
    }
  }

  button {
    position: absolute;
    right: 0.8rem;
    top: 1.5rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  @-webkit-keyframes slide-left {
    0% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`;
