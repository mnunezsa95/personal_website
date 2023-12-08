import React from "react";
import { useLocation, Link } from "react-router-dom";
import profileIcon from "../../images/letter-m.svg";
import emailIcon from "../../images/email-icon.svg";
import codeIcon from "../../images/code-icon.svg";
import codeIconActive from "../../images/code-icon-active.svg";
import homeIcon from "../../images/home-icon.svg";
import homeIconCurrent from "../../images/home-icon-active.svg";
import aboutMeIcon from "../../images/about-me.svg";
import aboutMeIconActive from "../../images/about-me-active.svg";
import educationIcon from "../../images/education-icon.svg";
import educationIconActive from "../../images/education-icon-active.svg";
import linkedinIcon from "../../images/linkedin-icon.svg";
import githubIcon from "../../images/github-icon.svg";
import "./Sidebar.css";

function Sidebar({ handleEmailModal }) {
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
            <Link to="/">
              <button className="sidebar__navigation-button">
                <img className="sidebar__navigation-icon" src={homeIcon} alt="home icon"></img>
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button className="sidebar__navigation-button">
                <img className="sidebar__navigation-icon" src={homeIconCurrent} alt="home icon"></img>
              </button>
            </Link>
          )}
          {currentLocation === "/about-me" ? (
            <Link to="/about-me">
              <button className="sidebar__navigation-button">
                <img className="sidebar__navigation-icon" src={aboutMeIconActive} alt="imageIcon"></img>
              </button>
            </Link>
          ) : (
            <Link to="/about-me">
              <button className="sidebar__navigation-button">
                <img className="sidebar__navigation-icon" src={aboutMeIcon} alt="imageIcon"></img>
              </button>
            </Link>
          )}
          {currentLocation === "/education" ? (
            <Link to="/education">
              <button className="sidebar__navigation-button">
                <img className="sidebar__navigation-icon" src={educationIconActive} alt="imageIcon"></img>
              </button>
            </Link>
          ) : (
            <Link to="/education">
              <button className="sidebar__navigation-button">
                <img className="sidebar__navigation-icon" src={educationIcon} alt="imageIcon"></img>
              </button>
            </Link>
          )}
          {currentLocation === "/code" ? (
            <Link to="/code">
              <button className="sidebar__navigation-button">
                <img className="sidebar__navigation-icon" src={codeIconActive} alt="code icon"></img>
              </button>
            </Link>
          ) : (
            <Link to="/code">
              <button className="sidebar__navigation-button">
                <img className="sidebar__navigation-icon" src={codeIcon} alt="code icon"></img>
              </button>
            </Link>
          )}
          <button className="sidebar__navigation-button" type="button" onClick={handleEmailModal}>
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
            <img className="sidebar__navigation-icon" src={githubIcon} alt="github icon"></img>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
