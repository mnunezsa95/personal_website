import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar.js";
import Main from "../Main/Main.js";
import AboutMe from "../AboutMe/AboutMe.js";
import CodeSection from "../CodeSection/CodeSection.js";
import CodeCardModal from "../CodeCardModal/CodeCardModal.js";
import EmailModal from "../EmailModal/EmailModal.js";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCard, setSelectedCard] = useState({});
  const handleEmailModal = () => {
    console.log("email");
    setActiveModal("email");
  };
  const handleCloseModal = () => setActiveModal(null);
  const handleSelectedCard = (codeCard) => {
    setActiveModal("preview");
    setSelectedCard(codeCard);
  };

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Sidebar handleEmailModal={handleEmailModal}></Sidebar>
          <Main></Main>
        </Route>
        <Route path="/about-me">
          <Sidebar handleEmailModal={handleEmailModal}></Sidebar>
          <AboutMe></AboutMe>
        </Route>
        <Route path="/education">
          <Sidebar handleEmailModal={handleEmailModal}></Sidebar>
        </Route>
        <Route path="/code">
          <Sidebar handleEmailModal={handleEmailModal}></Sidebar>
          <CodeSection handleSelectedCard={handleSelectedCard}></CodeSection>
        </Route>
      </Switch>
      {activeModal === "preview" && (
        <CodeCardModal isOpen={activeModal === "preview"} selectedCard={selectedCard} handleCloseModal={handleCloseModal}></CodeCardModal>
      )}
      {activeModal === "email" && <EmailModal isOpen={activeModal === "email"}></EmailModal>}
    </div>
  );
}

export default App;
