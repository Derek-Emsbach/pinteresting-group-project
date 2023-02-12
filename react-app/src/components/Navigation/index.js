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
  let menuRef = useRef();
  const history = useHistory();

  const currentUser = useSelector((state) => state.session.user);

  const routerChange = () => {
    history.push("/my-profile");
  };

  return (
    <div className="main-container">
      <div className="Nav-container">
        <nav id="navigation-bar">
          <ul>
            <div className="left_side">
              <button className="pinterest_icon">
                <img src={pinterestIcon} className="globe" alt="globe" />
              </button>
              <li>
                <NavLink
                  className="nav-title"
                  to="/"
                  exact={true}
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              {/* <li className='nav-title'>Today</li> */}
              <li>
                <NavLink
                  className="nav-title"
                  to="/pinform"
                  exact={true}
                  activeClassName="active"
                >
                  CreatePin
                </NavLink>
              </li>
            </div>

            <div className="search_middle">
              {/* <form>
              <input type = 'Text' placeholder='Search'></input>
              <button type ='Submit'></button>
            </form> */}
            </div>

            <div className="right_side">
              {/* <div className='notification'>
            <button><img src={bell} alt=''></img></button>

            </div>

            <div className='message'>
            <button><img src={message} alt=''></img></button>
            </div> */}

              <div className="profile">
                <button onClick={routerChange}>
                  <img src={currentUser.image} alt=""></img>
                </button>
              </div>

              <div className="dropdown_buttton">
                <button
                  className=""
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>

            <div
              className={`dropdown-menu ${open ? "active" : "inactive"} `}
              ref={menuRef}
            >
              {currentUser && (
                <div className="menu_dropdown">
                  <h5>Currently in</h5>
                  <div className="profile">
                    <div className="prof_icon">
                      <button onClick={routerChange}>
                        <img src={currentUser.image} alt="" />
                      </button>
                    </div>
                    <div className="user_info">
                      {currentUser.username}
                      <h5>Personal</h5>
                      {currentUser.email}
                    </div>
                  </div>

                  {/* <li>
                   <NavLink to='/signup' exact={true} activeClassName='active'>
                  Sign Up
                  </NavLink>
                </li> */}

                  <li>
                    <LogoutButton />
                  </li>
                </div>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
