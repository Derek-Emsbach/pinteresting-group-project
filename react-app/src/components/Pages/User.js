import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function User() {
	const [user, setUser] = useState({});
	const { userId } = useParams();
	const [following, setFollowing] = useState()
	const sessionUser = useSelector(state =>state.session.user)

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

	

	return (
		<ul>
			<div>
				<h1>GET 1 USER</h1>
				<li><strong>User Id</strong>{userId}</li>
				<li><strong>Username</strong> {user.username}</li>
				<li><strong>Email</strong> {user.email}</li>
			</div>
		</ul>
	);
}
export default User;