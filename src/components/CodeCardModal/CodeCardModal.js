import React from "react";
import "./CodeCardModal.css";

function CodeCardModal({ handleCloseModal, selectedCard, handleCloseModalOverlayClick }) {
  return (
    <div className="modal" onClick={handleCloseModalOverlayClick}>
      <div className="modal__content-card">
        <img className="modal__image" src={selectedCard.img} alt={selectedCard.name} />
        <button className="modal__close-button-image" type="button" onClick={handleCloseModal} />
        <div className="modal__info">
          <p className="modal__info-name">{selectedCard.name}</p>
          <p className="modal__info-description">{selectedCard.description}</p>
          {selectedCard?.projects?.map((item, index) => {
            return !selectedCard?.projectURL[index] ? (
              <button className="modal__info-project-button" key={index} disabled>
                {item}
              </button>
            ) : (
              <button className="modal__info-project-button" type="button" key={index} onClick={() => window.open(selectedCard?.projectURL[index])}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CodeCardModal;
