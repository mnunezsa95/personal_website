import React from "react";
import "./CodeCardModal.css";

function CodeCardModal({ handleCloseModal, selectedCard }) {
  return (
    <div className="modal">
      <div className="modal__content-card">
        <img className="modal__image" src={selectedCard.img} alt={selectedCard.name} />
        <button className="modal__close-button-image" type="button" onClick={handleCloseModal} />
        <div className="modal__info">
          <p className="modal__info-name">{selectedCard.name}</p>
          <p className="modal__info-description">{selectedCard.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CodeCardModal;
