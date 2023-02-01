import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function FollowingPage () {
    const [following, setFollowing] = useState({});

    useEffect(() => {
		(async () => {
			const response = await fetch(`/api/followings_followers`);
			const follow = await response.json();
			setFollowing(follow);
		})();
	}, []);

    return (
        <>
            <h1>following!!!</h1>

        </>
    )
}

export default FollowingPage
