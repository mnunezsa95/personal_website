import React, { useState, useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.js";
import Main from "../Main/Main.js";
import CodeCardModal from "../CodeCardModal/CodeCardModal.js";
import EmailModal from "../EmailModal/EmailModal.js";
import Loader from "../Loader/Loader.js";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCard, setSelectedCard] = useState({});
  const AboutMe = lazy(() => import("../AboutMe/AboutMe.js"));
  const CodeSection = lazy(() => import("../CodeSection/CodeSection.js"));
  const handleEmailModal = () => setActiveModal("email");
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
          <Suspense fallback={<Loader />}>
            <AboutMe></AboutMe>
          </Suspense>
        </Route>
        <Route path="/education"></Route>
        <Route path="/code">
          <Suspense fallback={<Loader />}>
            <CodeSection handleSelectedCard={handleSelectedCard}></CodeSection>
          </Suspense>
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
