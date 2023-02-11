import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { follow, unFollowThunk } from '../../store/following_follower';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector(state=>state.session.user)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  const following = async ()=>{

    await dispatch(follow(user.username))
  history.push(`/${sessionUser.username}`)
  }

  const unFollowing = async () =>{
    await dispatch(unFollowThunk(user.username))
    history.push(`/${sessionUser.username}`)
  }

  return (
    <div>
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
      <button className='create-button'onClick={following}>Follow</button>
      <button className='regular-button' onClick={unFollowing}>UnFollow</button>
    </div>
  );
}
export default User;
