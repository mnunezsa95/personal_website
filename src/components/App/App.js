import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar.js";
import Main from "../Main/Main.js";

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
        </Route>
        <Route path="/code">
          <Sidebar></Sidebar>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
