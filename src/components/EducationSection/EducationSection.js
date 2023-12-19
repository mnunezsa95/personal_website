import React from "react";
import Education from "../Education/Education";
import educationItems from "../../utils/educationItems";
import "./EducationSection.css";

function EducationSection() {
  return (
    <section className="education__section">
      <div className="education__item">
        {educationItems.map((eduItem) => {
          return <Education eduItem={eduItem} key={eduItem?.educationId ?? eduItem?.educationId}></Education>;
        })}
      </div>
    </section>
  );
}

export default EducationSection;
