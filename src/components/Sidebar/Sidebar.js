import React from "react";
import "./Sidebar.css";
import profileIcon from "../../images/letter-m.svg";
import emailIcon from "../../images/email-icon.svg";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar__name-container">
        <img className="sidebar__name-icon" src={profileIcon} alt="Marlon Nunez icon"></img>
      </div>
      <div className="sidebar__navigation">
        <div className="sidebar__navigation-container">
          <button>
            <img></img>
          </button>
          <button>
            <img></img>
          </button>
          <button>
            <img></img>
          </button>
          <button className="sidebar__navigation-button">
            <img className="sidebar__navigation-icon" src={emailIcon} alt="email"></img>
          </button>
        </div>
      </div>
      <div className="sidebar__navigation-social-icons">
        <div className="sidebar__navigation-container">
          <button>
            <img></img>
          </button>
          <button>
            <img></img>
          </button>
          <button>
            <img></img>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
