import React from "react";
import { useLocation } from "react-router-dom";
import profileIcon from "../../images/letter-m.svg";
import emailIcon from "../../images/email-icon.svg";
import codeIcon from "../../images/code-icon.svg";
import homeIcon from "../../images/home-icon.svg";
import homeIconCurrent from "../../images/home-icon-current.svg";
import imageIcon from "../../images/image-icon.svg";
import linkedinIcon from "../../images/linkedin-icon.svg";
import githubIcon from "../../images/github-icon.svg";
import "./Sidebar.css";

function Sidebar() {
  let location = useLocation();
  const currentLocation = location.pathname;
  const handleGitHubLink = () => window.open("https://github.com/mnunezsa95");
  const handleLinkedinLink = () => window.open("https://www.linkedin.com/in/marlon-nunez-35ba43b4/");

  return (
    <section className="sidebar">
      <div className="sidebar__name-container">
        <img className="sidebar__name-icon" src={profileIcon} alt="Marlon Nunez icon"></img>
      </div>
      <div className="sidebar__navigation">
        <div className="sidebar__navigation-container">
          {currentLocation !== "/" ? (
            <button className="sidebar__navigation-button">
              <img className="sidebar__navigation-icon" src={homeIcon} alt="home icon"></img>
            </button>
          ) : (
            <button className="sidebar__navigation-button">
              <img className="sidebar__navigation-icon" src={homeIconCurrent} alt="home icon"></img>
            </button>
          )}
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
          <button className="sidebar__navigation-button" onClick={handleLinkedinLink}>
            <img className="sidebar__navigation-icon" src={linkedinIcon} alt="linkedin icon"></img>
          </button>
          <button className="sidebar__navigation-button" onClick={handleGitHubLink}>
            <img className="sidebar__navigation-icon" src={githubIcon} alt="linkedin icon"></img>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
