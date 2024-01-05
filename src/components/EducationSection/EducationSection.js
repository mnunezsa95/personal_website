import React from "react";
import Education from "../Education/Education";
import educationItems from "../../utils/educationItems";
import "./EducationSection.css";

function EducationSection() {
  return (
    <section className="education__section">
      <h3 className="education__section-title">Education</h3>
      <div className="education__item">
        {educationItems.map((eduItem) => {
          return <Education eduItem={eduItem} key={eduItem?.educationId ?? eduItem?.educationId}></Education>;
        })}
      </div>
    </section>
  );
}

export default EducationSection;
