import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function FollowersPage () {
    const [followers, setFollowers] = useState();
    console.log('X')
    console.log(followers)

    useEffect(() => {
        if (!followers) {
			return;
		}
		(async () => {
			const response = await fetch(`/api/followings_followers`);
			const follow = await response.json();
			setFollowers(follow);
		})();
	}, [followers]);

    return (
        <>
            <h1>followers...</h1>
            <h2>{}</h2>
        </>
    )
}

export default FollowersPage
