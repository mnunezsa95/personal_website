import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.js";
import Main from "../Main/Main.js";
import AboutMe from "../AboutMe/AboutMe.js";
import CodeSection from "../CodeSection/CodeSection.js";
import CodeCardModal from "../CodeCardModal/CodeCardModal.js";
import EmailModal from "../EmailModal/EmailModal.js";
import "./App.css";

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

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") handleCloseModal();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  return (
    <div className="page">
      <Sidebar handleEmailModal={handleEmailModal}></Sidebar>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/about-me">
          <AboutMe></AboutMe>
        </Route>
        <Route path="/education"></Route>
        <Route path="/code">
          <CodeSection handleSelectedCard={handleSelectedCard}></CodeSection>
        </Route>
      </Switch>
      {activeModal === "preview" && (
        <CodeCardModal isOpen={activeModal === "preview"} selectedCard={selectedCard} handleCloseModal={handleCloseModal}></CodeCardModal>
      )}
      {activeModal === "email" && <EmailModal isOpen={activeModal === "email"} handleCloseModal={handleCloseModal}></EmailModal>}
    </div>
  );
}

export default App;
