import React from "react";
import "./CodeCard.css";

function CodeCard({ codeItem = "" }) {
  return (
    <div className="newscard__container">
      <img className="newscard__image" src={codeItem.img} alt={codeItem.name} />
      <div className="newscard__info-container">
        <h3 className="newscard__info-title">{codeItem.name}</h3>
        <p className="newscard__info-text">{codeItem.description}</p>
      </div>
    </div>
  );
}

export default CodeCard;
