import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import { authenticate } from './store/session';
import PinterestLayout from './components/Pinterest_layout/PinterestLayout';
import HomePage from './components/pages/HomePage/HomePage';

function App() {
  const [isLoaded, setisLoaded] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state =>state.session.user)

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


      <Route exact path="/">
        <HomePage />
      </Route>
   

    {sessionUser&&(
      <Navigation isLoaded={isLoaded} />
      )}
      {isLoaded &&(
        <Switch>
      
          <Route exact path="/">
            <PinterestLayout />
          </Route>

          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/signup">
            <SignUpForm />
          </Route>
      

          {/*
            <Route path='/pins'>
              <PinsPage />
            </Route>
            <Route path='/pins/:pinId'>
              <PinsDetailPage />
            </Route>
            <Route path='/boards'>
              <BoardsPage/>
            </Route>
            <Route path='/boards/:boardId'>
              <BoardsDetailPage/>
        
            </Route>
            */}
          {/* 
            <Route path='/following`'> 
              <FollowingPage/>
            </Route>
            <Route path='/followers/:userId`'>  
              <FollowersPage/>
            </Route>
          */}

          {/* 
					 <ProtectedRoute exact path='/users'>
							<UsersList />
						</ProtectedRoute>
						<ProtectedRoute exact path='/users/:userId'>
							<User />
						</ProtectedRoute> */}
           
        </Switch>
        )}

       
      
    </div>
  );
}

export default App;
