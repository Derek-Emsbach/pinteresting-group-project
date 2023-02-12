import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getAllPinsByAUser } from "../../store/pin";
import {
  getOneUserThunk,
  followUserThunk,
  unfollowUserThunk,
} from "../../store/user";
import GridLayout from "../GridLayout";
import { AddPinningControls } from "../PinterestLayout";

function User() {
  const { userId } = useParams();
  const [loadingStatus, setLoadingStatus] = useState("uninitialized");
  const [loadingError, setLoadingError] = useState(null);

  const { currentUser, otherUser, isFollowing, pins } = useSelector((state) => {
    const currentUser = state.session.user;
    const otherUser = state.otherUser[userId];
    const pins = Object.values(state.pin).filter(
      ({ userId: authorId }) => `${authorId}` === `${userId}`
    );

    let isFollowing = false;

    if (currentUser && otherUser) {
      isFollowing = currentUser.following.some(
        ({ id }) => `${id}` === `${otherUser.id}`
      );
    }

    return {
      otherUser,
      currentUser,
      isFollowing,
      pins,
    };
  });

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (userId && !otherUser && loadingStatus === "uninitialized") {
      dispatch(getOneUserThunk(userId));
    }
  }, [userId, otherUser]);

  useEffect(async () => {
    if (userId && loadingStatus === "uninitialized") {
      try {
        setLoadingStatus("pending");
        await dispatch(getAllPinsByAUser(userId));
        setLoadingStatus("success");
      } catch (err) {
        setLoadingStatus("failed");
        setLoadingError(err);
      }
    }
  }, [userId, loadingStatus]);

  if (!userId) {
    return <Redirect to="/404" />;
  }

  if (!otherUser) {
    return null;
  }

  const follow = () => {
    dispatch(followUserThunk(otherUser.id));
  };

  const unfollow = () => {
    dispatch(unfollowUserThunk(otherUser.id));
  };

  const navigateToPinPage = (pin) => {
    history.push(`/pins/${pin.id}`);
  };

  return (
    <div>
      <ul>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {otherUser.username}
        </li>
        <li>
          <strong>Email</strong> {otherUser.email}
        </li>
      </ul>
      <button
        className={isFollowing ? "regular-button" : "create-button"}
        onClick={isFollowing ? unfollow : follow}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
      <GridLayout
        items={pins}
        onItemClick={navigateToPinPage}
        renderItemActions={(pin, closeActionPopOver) => (
          <AddPinningControls pin={pin} onPinningDone={closeActionPopOver} />
        )}
      />
    </div>
  );
}
export default User;
