import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import Followers from "./Followers";
import Followings from "./Followings";
import GridLayout from "../../GridLayout";
import {
  selectMyBoards,
  deleteBoardThunk,
  getAllBoardsByAUser,
} from "../../../store/board";
import "./Profile.css";

function Profile() {
  const [loadingStatus, setLoadingStatus] = useState("uninitialized");
  const [loadingError, setLoadingError] = useState(null);
  const [openMyBoards, setOpenMyBoards] = useState(true);
  const [openCreate, setOpenCreate] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { currentUser, myBoards } = useSelector((state) => {
    const currentUser = state.session.user;
    const myBoards = selectMyBoards(state);

    return {
      currentUser,
      myBoards,
    };
  });

  useEffect(async () => {
    if (currentUser && loadingStatus === "uninitialized") {
      try {
        setLoadingStatus("loading");
        await dispatch(getAllBoardsByAUser(currentUser.id));
        setLoadingStatus("success");
      } catch (err) {
        setLoadingStatus("failed");
        setLoadingError(err);
      }
    }
  }, [currentUser, loadingStatus]);

  const myPins = async (e) => {
    history.push("/pins");
  };

  const profileForm = async (e) => {
    history.push(`/users/${currentUser.id}`);
  };

  const navigateToBoard = (board) => {
    history.push(`/boards/${board.id}`);
  };

  if (!currentUser) {
    return null;
  }

  if (!myBoards) {
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

        <button className="regular-button" onClick={myPins}>
          My Pins
        </button>
        <button className="regular-button" onClick={profileForm}>
          Edit Profile
        </button>
      </div>

      <div className="option">
        <div className="option_btn">
          <button
            onClick={() => {
              setOpenCreate(true);
              setOpenMyBoards(false);
            }}
            className={`button ${openCreate ? "active" : null}`}
          >
            {" "}
            <span>Create</span>
          </button>
          <button
            onClick={() => {
              setOpenMyBoards(true);
              setOpenCreate(false);
            }}
            className={`button ${openMyBoards ? "active" : null}`}
          >
            <span>My Boards</span>{" "}
          </button>
        </div>
      </div>
      <div>
        {openMyBoards && (
          <GridLayout
            items={myBoards}
            buttonLabel="delete"
            onItemClick={navigateToBoard}
            renderItemActions={(board, closeActionPopOver) => (
              <button
                className="create-button"
                onClick={() => {
                  dispatch(deleteBoardThunk(board.id));
                  closeActionPopOver();
                }}
              >
                Are you sure?
              </button>
            )}
          />
        )}
      </div>
      {openCreate && (
        <>
          <div className="create_pin_container">
            <h2> Inspire with an Idea Pin</h2>
            <button
              onClick={() => history.push("/pinform")}
              className="create_pin_btn"
            >
              Create
            </button>
          </div>
          <div className="create_board_container">
            <h2> Create A Board </h2>
            <button
              onClick={() => history.push("/boardform")}
              className="create_pin_btn"
            >
              Create
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default Profile;
