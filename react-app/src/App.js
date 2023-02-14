import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import PinterestLayout from "./components/PinterestLayout";
import HomePage from "./components/Pages/HomePage/HomePage";
import Profile from "./components/Pages/ProfilePage/Profile";
import CreatePinForm from "./components/Forms/CreatePinForm";
import PinPage from "./components/Pages/PinPage";
import BoardDetailPage from "./components/Pages/BoardDetailPage";
import BoardsPage from "./components/Pages/BoardsPage";
import CreateBoardForm from "./components/Forms/CreateBoardForm";
import EditProfileForm from "./components/Forms/EditProfileForm";
import User from "./components/User/User";
import PinDetailPage from "./components/Pages/PinDetailPage";
import EditPinForm from "./components/Forms/EditPinForm";

function App() {
  const [isLoaded, setisLoaded] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setisLoaded(true);
    })();
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div>
      {!!currentUser && <Navigation isLoaded={isLoaded} />}
      <Switch>
        {!!currentUser && (
          <Route exact path="/my-profile">
            <Profile />
          </Route>
        )}
        <Route exact path="/">
          {currentUser ? <PinterestLayout /> : <HomePage />}
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignUpForm />
        </Route>
        <ProtectedRoute exact path="/boards">
          <BoardsPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/boards/:boardId">
          <BoardDetailPage />
        </ProtectedRoute>
        <Route exact path="/pins">
          <PinPage />
        </Route>
        <Route exact path="/pins/:pinId">
          <PinDetailPage />
        </Route>
        <Route exact path="/pins/:pinId/update">
          <EditPinForm />
        </Route>
        <Route exact path="/pinform">
          <CreatePinForm />
        </Route>
        <Route exact path="/boardform">
          <CreateBoardForm />
        </Route>
        {!!currentUser && (
          <Route exact path={`/users/${currentUser.id}`}>
            <EditProfileForm />
          </Route>
        )}
        <ProtectedRoute exact path="/users/:userId">
          <User />
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
