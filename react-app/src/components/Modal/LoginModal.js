import React from "react";
import LoginForm from "../auth/LoginForm";
import "./Modal.css";

function LoginModal({ setLoginModalOpen }) {
  const handleClick = (event) => {
    if (event.target.className === "modalBackground") {
      setLoginModalOpen(false);
    }
  };

  return (
    <div className="modalBackground" onClick={handleClick}>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setLoginModalOpen(false);
            }}
          >
            X
          </button>
        </div>

        <div className="Log_in">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
