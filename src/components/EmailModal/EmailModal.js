import React, { useState } from "react";
import { send } from "emailjs-com";
import letterM from "../../images/letter-m.svg";
import "./EmailModal.css";

function EmailModal({ handleCloseModal }) {
  const [toSend, setToSend] = useState({ first_name: "", last_name: "", message: "", reply_to: "" });
  const onSubmit = (evt) => {
    evt.preventDefault();
    send("service_cm2gxqw", "template_03drn25", toSend, "mhe4v6w4zwYssI1F3")
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
      })
      .then(() => {
        setToSend({ first_name: "", last_name: "", message: "", reply_to: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (evt) => {
    setToSend({ ...toSend, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="email__modal">
      <form className="email__modal-form" onSubmit={onSubmit}>
        <p className="email__modal-title">
          Contact <img className="email__modal-letter-m" src={letterM} alt="letter m"></img>e,
        </p>
        <button className="email__modal-close-button-image" type="button" onClick={handleCloseModal} />
        <div className="email__modal-input-container">
          <input
            className="email__modal-input"
            type="text"
            name="first_name"
            placeholder="First name"
            autoFocus
            value={toSend.first_name}
            onChange={handleChange}
          />
          <input className="email__modal-input" type="text" name="last_name" placeholder="Last name" value={toSend.last_name} onChange={handleChange} />
          <textarea
            className="email__modal-input"
            rows="5"
            cols="5"
            wrap="soft"
            type="text"
            name="message"
            placeholder="Message"
            value={toSend.message}
            onChange={handleChange}
          />
          <input className="email__modal-input" type="text" name="reply_to" placeholder="Your email" value={toSend.reply_to} onChange={handleChange} />
          <button className="email__modal-submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default EmailModal;
