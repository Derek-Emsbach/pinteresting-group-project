import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFollowingThunk } from '../../../store/following_follower';



function FollowersPage () {
    const [followers, setFollowers] = useState();
    const dispatch = useDispatch();
    console.log('X')
    console.log(followers)

    useEffect(() => {
		dispatch(getAllFollowingThunk());
	}, [dispatch]);


    // useEffect(() => {
    //     if (!followers) {
	// 		return;
	// 	}
	// 	(async () => {
	// 		const response = await fetch(`/api/followings_followers`);
	// 		const follow = await response.json();
	// 		setFollowers(follow);
	// 	})();
	// }, [followers]);

    return (
        <>
            <h1>followers...</h1>
            
        </>
    )
}

export default FollowersPage
