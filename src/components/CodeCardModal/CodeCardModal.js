import React from "react";
import "./CodeCardModal.css";

function CodeCardModal() {
  return (
    <div className="modal">
      <div className="modal__content-card">
        <img className="modal__image" src={""} alt={""} />
        <button className="modal__close-button-image" type="button" />
        <div className="modal__info-section-container">
          <div className="modal__info">
            <p className="modal__info-name">{""}</p>
            <p className="modal__info-description"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeCardModal;
