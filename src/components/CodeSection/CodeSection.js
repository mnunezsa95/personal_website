import React from "react";
import CodeCard from "../CodeCard/CodeCard.js";
import codeItems from "../utils/codingItems.js";
import "./CodeSection.css";

function CodeSection() {
  return (
    <div className="code__section-container">
      {codeItems.map((item) => {
        return <CodeCard codeItem={item} key={item?.codeId ?? item?.codeId}></CodeCard>;
      })}
    </div>
  );
}

export default CodeSection;
