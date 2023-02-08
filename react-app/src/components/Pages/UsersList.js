import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { follow } from '../../store/following_follower';

function UsersList() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);




  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>

        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>

        <button onClick={() =>{ dispatch(follow(user.username))}}>Follow</button>
      </li>

    );
  });

  return (
    <>
      <h1>User List: </h1>
      <div>{userComponents}</div>
    </>
  );
}

export default UsersList;
