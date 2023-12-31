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
  const EducationSectionBlock = lazy(() => import("../EducationSection/EducationSection.js"));
  const handleEmailModal = () => setActiveModal("email");
  const handleCloseModal = () => setActiveModal(null);
  const handleSelectedCard = (codeCard) => {
    setActiveModal("preview");
    setSelectedCard(codeCard);
  };
  const handleCloseModalOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // close modal using ESC
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
      <Sidebar handleEmailModal={handleEmailModal} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about-me">
          <Suspense fallback={<Loader />}>
            <AboutMe />
          </Suspense>
        </Route>
        <Route path="/education">
          <Suspense fallback={<Loader />}>
            <EducationSectionBlock />
          </Suspense>
        </Route>
        <Route path="/code">
          <Suspense fallback={<Loader />}>
            <CodeSection handleSelectedCard={handleSelectedCard} />
          </Suspense>
        </Route>
      </Switch>
      {activeModal === "preview" && (
        <CodeCardModal
          isOpen={activeModal === "preview"}
          selectedCard={selectedCard}
          handleCloseModal={handleCloseModal}
          handleCloseModalOverlayClick={handleCloseModalOverlayClick}
        />
      )}
      {activeModal === "email" && (
        <EmailModal isOpen={activeModal === "email"} handleCloseModal={handleCloseModal} handleCloseModalOverlayClick={handleCloseModalOverlayClick} />
      )}
    </div>
  );
}

export default App;
