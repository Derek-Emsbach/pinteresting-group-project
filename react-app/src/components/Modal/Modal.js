import React from "react";
import SignUpForm from "../auth/SignUpForm";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
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
        <SignUpForm/>
        </div>
        
    
      </div>
    </div>
  );
}

export default Modal;
