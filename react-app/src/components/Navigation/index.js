import React, { useState, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setSearchbarValue, selectSearchbarValue } from "../../store/searchbar";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();
  const { currentUser, searchbarValue } = useSelector((state) => {
    const currentUser = state.session.user;
    const searchbarValue = selectSearchbarValue(state);

    return {
      currentUser,
      searchbarValue,
    };
  });

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
            <div className="icon">
              <img src="/favicon.svg" />
              Pinspired
            </div>

            <button className="regular-button" onClick={navigateToHomePage}>
              Home
            </button>
            <button className="create-button" onClick={navigateToPinForm}>
              Create Pin
            </button>
          </div>

          <div
            className={`search_middle ${
              location.pathname === "/" ? "" : "hidden_search"
            }`}
          >
            <input
              type="Text"
              placeholder="Search"
              value={searchbarValue}
              onChange={(event) => {
                dispatch(setSearchbarValue(event.target.value));
              }}
            />
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
