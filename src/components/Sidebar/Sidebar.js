import React from "react";
import "./Sidebar.css";
import profileIcon from "../../images/letter-m.svg";
import emailIcon from "../../images/email-icon.svg";
import codeIcon from "../../images/code-icon.svg";
import homeIcon from "../../images/home-icon.svg";
import imageIcon from "../../images/image-icon.svg";
import linkedinIcon from "../../images/linkedin-icon.svg";
import githubIcon from "../../images/github-icon.svg";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar__name-container">
        <img className="sidebar__name-icon" src={profileIcon} alt="Marlon Nunez icon"></img>
      </div>
      <div className="sidebar__navigation">
        <div className="sidebar__navigation-container">
          <button className="sidebar__navigation-button">
            <img className="sidebar__navigation-icon" src={homeIcon} alt="home icon"></img>
          </button>
          <button className="sidebar__navigation-button">
            <img className="sidebar__navigation-icon" src={imageIcon} alt="imageIcon"></img>
          </button>
          <button className="sidebar__navigation-button">
            <img className="sidebar__navigation-icon" src={codeIcon} alt="code icon"></img>
          </button>
          <button className="sidebar__navigation-button">
            <img className="sidebar__navigation-icon" src={emailIcon} alt="email icon"></img>
          </button>
        </div>
      </div>
      <div className="sidebar__navigation-social-icons">
        <div className="sidebar__navigation-container">
          <button className="sidebar__navigation-button">
            <img className="sidebar__navigation-icon" src={linkedinIcon} alt="linkedin icon"></img>
          </button>
          <button className="sidebar__navigation-button">
            <img className="sidebar__navigation-icon" src={githubIcon} alt="linkedin icon"></img>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
