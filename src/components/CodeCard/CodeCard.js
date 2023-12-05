import React from "react";
import "./CodeCard.css";

function CodeCard({ codeItem = "", onSelectedCard }) {
  return (
    <div className="newscard__container">
      <button onClick={onSelectedCard}>
        <img className="newscard__image" src={codeItem.img} alt={codeItem.name} />
      </button>
      <div className="newscard__info-container">
        <h3 className="newscard__info-title">{codeItem.name}</h3>
      </div>
    </div>
  );
}

export default CodeCard;
