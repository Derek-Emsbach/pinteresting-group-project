import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/User/UsersList';
import { authenticate } from './store/session';
import PinterestLayout from './components/Pinterest_layout/PinterestLayout';
import HomePage from './components/Pages/HomePage/HomePage';
import Profile from './components/Pages/ProfilePage/Profile';
import CreatePinForm from './components/Forms/CreatePinForm';
import PinPage from './components/Pages/PinPage';
import BoardDetailPage from './components/Pages/BoardDetailPage';
import BoardsPage from './components/Pages/BoardsPage';
import CreateBoardForm from './components/Forms/CreateBoardForm';
import EditProfileForm from './components/Forms/EditProfileForm';
import FollowersPage from './components/Pages/FollowersPage';
import FollowingPage from './components/Pages/FollowingPage';
import { useParams } from 'react-router-dom';
import User from './components/User/User';

function App() {
	const [isLoaded, setisLoaded] = useState(false);
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);

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
			<Route exact path='/'>
				<HomePage />
			</Route>

			{sessionUser && <Navigation isLoaded={isLoaded} />}
			{isLoaded && (
				<Switch>
					{sessionUser && (
						<Route exact path={`/${sessionUser.username}`}>
							<Profile />
						</Route>
					)}
					<Route exact path='/'>
						<PinterestLayout />
					</Route>
					<Route exact path='/login'>
						<LoginForm />
					</Route>
					<Route exact path='/signup'>
						<SignUpForm />
					</Route>
					{/* <Route path='/pins'>
              <PinDetailPage />
            </Route> */}
					={' '}
					<ProtectedRoute exact path='/boards'>
						<BoardsPage />
					</ProtectedRoute>
					<ProtectedRoute exact path='/boards/:boardId'>
						<BoardDetailPage />
					</ProtectedRoute>
					<Route exact path='/pins'>
						<PinPage />
					</Route>
					<Route exact path='/pinform'>
						<CreatePinForm />
					</Route>
					<Route exact path='/boardform'>
						<CreateBoardForm />
					</Route>
					<Route exact path='/profileform'>
						<EditProfileForm />
					</Route>
					<Route exact path ='/followings_followers'>
						<FollowersPage />
					</Route>
					{/* <Route exact path ='/following'>
						<FollowingPage />
					</Route> */}
					{/*
            <Route path='/following`'>
              <FollowingPage/>
            </Route>
            <Route path='/followers/:userId`'>
              <FollowersPage/>
            </Route>
          */}
					<ProtectedRoute exact path='/users'>
						<UsersList />
					</ProtectedRoute>
					<ProtectedRoute exact path='/users/:userId'>
						<User />
					</ProtectedRoute>
				</Switch>
			)}
		</div>
	);
}

export default App;
