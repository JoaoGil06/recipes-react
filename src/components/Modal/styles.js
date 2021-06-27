import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 80rem;
  height: 50rem;
  background: #fff;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  position: absolute;
  left: 50%;
  margin-left: -40rem;
  top: 50%;
  margin-top: -25rem;
  border-radius: 2rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
`;

export const ModalTitle = styled.h2`
  margin-top: 5rem;
`;

export const ModalList = styled.ul`
  list-style-type: none;
  margin-top: 2.5rem;

  & > li {
    font-size: 1.2rem;
  }
`;
