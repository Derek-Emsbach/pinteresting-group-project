import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import Followers from "./Followers";
import Followings from "./Followings";

function Profile() {
  const currentUser = useSelector((state) => state.session.user);
  const history = useHistory();

  const myPins = async (e) => {
    history.push("/pins");
  };
  const myBoards = async (e) => {
    history.push("/boards");
  };

  const profileForm = async (e) => {
    history.push(`/users/${currentUser.id}`);
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="profile_container">
      <div className="user_info">
        <img src={currentUser.image}></img>
        <div className="profile_info">
          <h1>
            {currentUser.firstName} {currentUser.lastName}
          </h1>
          <h3>{currentUser.about}</h3>
          <h4>{currentUser.email}</h4>
        </div>

        <div className="follow-container">
          <div className="follower_container">
            {currentUser.followers.length}

            <Followers />
          </div>

          <div className="following_container">
            {currentUser.following.length}

            <Followings />
          </div>
        </div>

        <button className="regular-button" onClick={profileForm}>
          Edit Profile
        </button>
      </div>

      <div className="option">
        <button className="regular-button" onClick={myPins}>
          My Pins
        </button>
        <button className="regular-button" onClick={myBoards}>
          {" "}
          My boards
        </button>
      </div>
    </div>
  );
}
export default Profile;
