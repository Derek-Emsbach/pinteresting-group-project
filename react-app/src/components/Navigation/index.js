import React, { useState, useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./Navigation.css";
import pinterestIcon from "../../icons/pinterest_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const history = useHistory();

  const currentUser = useSelector((state) => state.session.user);

  const navigateToHomePage = () => {
    history.push("/");
  };

  const navigateToPinForm = () => {
    history.push("/pinform");
  };

  const navigateToMyProfile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setOpen(false);
    history.push("/my-profile");
  };

  return (
    <div className="main-container">
      <div className="Nav-container">
        <nav id="navigation-bar">
          <div className="left_side">
            <button className="regular-button" onClick={navigateToHomePage}>
              Home
            </button>
            <button className="create-button" onClick={navigateToPinForm}>
              Create Pin
            </button>
          </div>

          <div className="search_middle">
            {/* <form>
              <input type = 'Text' placeholder='Search'></input>
              <button type ='Submit'></button>
            </form> */}
          </div>

          <div className="right_side" onClick={() => setOpen(!open)}>
            <div className="profile">
              <img src={currentUser.image} alt="" />
            </div>

            <div className="dropdown_button">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div
              className={`dropdown-menu ${open ? "active" : "inactive"}`}
              ref={menuRef}
            >
              {currentUser && (
                <div className="menu_dropdown">
                  <div>
                    <h5>Currently in</h5>
                    <div className="profile" onClick={navigateToMyProfile}>
                      <div className="prof_icon">
                        <button>
                          <img src={currentUser.image} alt="" />
                        </button>
                      </div>
                      <div className="user_info">
                        {currentUser.username}
                        <h5>Personal</h5>
                        {currentUser.email}
                      </div>
                    </div>
                  </div>
                  <LogoutButton />
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
