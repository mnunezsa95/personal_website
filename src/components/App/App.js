import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar.js";
import Main from "../Main/Main.js";
import AboutMe from "../AboutMe/AboutMe.js";
import CodeSection from "../CodeSection/CodeSection.js";
import CodeCardModal from "../CodeCardModal/CodeCardModal.js";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCard, setSelectedCard] = useState({});
  const handleCloseModal = () => setActiveModal(null);
  const handleSelectedCard = (codeCard) => {
    setActiveModal("preview");
    setSelectedCard(codeCard);
  };

  console.log(selectedCard);
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
          <CodeSection handleSelectedCard={handleSelectedCard}></CodeSection>
        </Route>
      </Switch>
      {activeModal === "preview" && <CodeCardModal isOpen={activeModal === "preview"} handleCloseModal={handleCloseModal}></CodeCardModal>}
    </div>
  );
}

export default App;
