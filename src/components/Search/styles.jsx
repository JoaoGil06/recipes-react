import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2.5rem;
`;

export const Input = styled.input`
  width: 39rem;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  background: #222;
  color: #fff;

  border: 1px solid #fff;

  &::placeholder {
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;
