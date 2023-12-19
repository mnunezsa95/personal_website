import React from "react";
import "./Education.css";

function Education({ eduItem }) {
  console.log(eduItem);
  return (
    <div className="education__container">
      <p className="education__date">
        {eduItem.startYear} - {eduItem.graduationYear} ({eduItem.duration})
      </p>
      <div className="education__item-info">
        <h3 className="education__degree">{eduItem.degree}</h3>
        <h4 className="education__major">{eduItem.major}</h4>
        <p className="education__institution-name">
          {eduItem?.institutionName} | {eduItem?.institutionCity}
          {eduItem?.institutionState ? `, ${eduItem?.institutionState}` : ""}
        </p>
      </div>
    </div>
  );
}

export default Education;
