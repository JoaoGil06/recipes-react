import React from "react";

import { Background, ModalContainer, ModalTitle, ModalList } from "./styles";

const Modal = ({ data, setShowModal }) => {
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setShowModal(false);
    }
  });
  const handleCloseModalClick = () => {
    setShowModal(false);
  };
  return (
    <>
      <ModalContainer>
        <ModalTitle>Ingredientes</ModalTitle>
        <ModalList>
          {!!data.ingredients.length
            ? data.ingredients.map((item) => <li>{item}</li>)
            : "A carregar ingredientes..."}
        </ModalList>
      </ModalContainer>
      <Background onClick={handleCloseModalClick} />
    </>
  );
};

export default Modal;
