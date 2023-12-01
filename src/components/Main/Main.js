import React from "react";
import "./Main.css";
import letterM from "../../images/letter-m.svg";
import mainImage from "../../images/obsidan-graph-view.png";

function Main() {
  return (
    <div>
      <section className="main">
        <div className="main__title">
          <p className="main__title-text">Hi,</p>
          <p className="main__title-text">
            I'm <img className="main__title-letter-m" src={letterM} alt="letter m"></img>arlon,
          </p>
          <p className="main__title-text">a software enginner.</p>
        </div>
        <div className="main__image-container">
          <img className="main__image" src={mainImage} alt="coding neural network"></img>
        </div>
      </section>
    </div>
  );
}

export default Main;
