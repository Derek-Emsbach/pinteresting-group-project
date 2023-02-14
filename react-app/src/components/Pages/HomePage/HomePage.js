import React, { useState } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Modal/Modal";
import LoginModal from "../../Modal/LoginModal";
import { login } from "../../../store/session";
import PinterestLayout from "../../PinterestLayout";
function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const demo = async (e) => {
    e.preventDefault();
    const user = {
      email: "demo@aa.io",
      password: "password",
    };
    setModalOpen(false);
    dispatch(login(user.email, user.password));
  };

  return (
    <div className="Splash">
      <div className="nav_bar">
        <div className="icon">
          <img src="/favicon.svg" />
          Pinspired
        </div>

        <div className="right_menu">
          <button className="signup-button" onClick={demo}>
            Demo User
          </button>

          <button
            className="login-button"
            onClick={() => {
              setLoginModalOpen(true);
            }}
          >
            {" "}
            Login{" "}
          </button>
          {loginModalOpen && (
            <LoginModal setLoginModalOpen={setLoginModalOpen} />
          )}

          <button
            className="signup-button"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            {" "}
            Sign Up{" "}
          </button>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
      </div>
      <PinterestLayout />
    </div>
  );
}

export default HomePage;
