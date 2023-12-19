import React from "react";
import "./CodeCard.css";

function CodeCard({ codeItem = "", handleSelectedCard }) {
  return (
    <div className="codecard__container">
      <button className="codecard__button" onClick={() => handleSelectedCard(codeItem)} type="button">
        <img className="codecard__image" src={codeItem?.img} alt={codeItem?.name} />
        <div className="codecard__info-container">
          <h3 className="codecard__info-title">{codeItem?.name}</h3>
        </div>
      </button>
    </div>
  );
}

export default CodeCard;
