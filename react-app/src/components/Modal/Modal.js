import React from "react";
import SignUpForm from "../auth/SignUpForm";
import "./Modal.css";

function Modal({ setOpenModal }) {
  const handleClick = (event) => {
    if (event.target.className === "modalBackground") {
      setOpenModal(false);
    }
  };

  return (
    <div className="modalBackground" onClick={handleClick}>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="sign_up">
          <SignUpForm
            onSuccess={() => {
              setOpenModal(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
