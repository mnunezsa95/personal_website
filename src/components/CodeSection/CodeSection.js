import React from "react";
import CodeCard from "../CodeCard/CodeCard.js";
import codeItems from "../utils/codingItems.js";
import "./CodeSection.css";

function CodeSection({ handleSelectedCard, selectedCard }) {
  return (
    <section className="code__section">
      <h2 className="code__section-title">Languages & Technologies</h2>
      <div className="code__section-container">
        {codeItems.map((item) => {
          return <CodeCard codeItem={item} key={item?.codeId ?? item?.codeId} handleSelectedCard={handleSelectedCard} selectedCard={selectedCard}></CodeCard>;
        })}
      </div>
    </section>
  );
}

export default CodeSection;
