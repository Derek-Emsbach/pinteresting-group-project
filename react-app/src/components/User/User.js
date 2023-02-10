import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { follow, getAllFollowingThunk, unFollowThunk } from '../../store/following_follower';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const [openFollow, setOpenFollow] = useState()
  const dispatch = useDispatch()
  const history = useHistory()
  const allMyFollowings= useSelector(state =>Object.values(state.following))
  console.log(allMyFollowings)
  console.log(userId)


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
    setOpenFollow(true)

  }

  const unFollowing = async () =>{
    await dispatch(unFollowThunk(user.username))
    setOpenFollow(false)
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
      {allMyFollowings && (
        <div>
        {allMyFollowings.map(following => following.id === userId ? <div>hi</div>:<button onClick={following}>Follow</button>)}
      
        </div>
      )}
      <button onClick={unFollowing}>UnFollow</button>
    </div>
  );
}
export default User;
