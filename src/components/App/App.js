import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar.js";
import Main from "../Main/Main.js";
import AboutMe from "../AboutMe/AboutMe.js";
import CodeSection from "../CodeSection/CodeSection.js";
import CodeCardModal from "../CodeCardModal/CodeCardModal.js";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Sidebar></Sidebar>
          <Main></Main>
        </Route>
        <Route path="/about-me">
          <Sidebar></Sidebar>
          <AboutMe></AboutMe>
        </Route>
        <Route path="/education">
          <Sidebar></Sidebar>
        </Route>
        <Route path="/code">
          <Sidebar></Sidebar>
          <CodeSection></CodeSection>
          {/* <CodeCardModal></CodeCardModal> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
