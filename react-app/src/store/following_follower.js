const defaultState = {};

const LOAD_FOLLOW = 'followings_followers/LOAD_FOLLOWING';
const DELETE_FOLLOW = 'followings_followers/DELETE_FOLLOW';


const loadFollow = (payload) => {
    return {
        type: LOAD_FOLLOW,
        payload,
    };
}



const unFollow = (payload) => {
    return {
        type: DELETE_FOLLOW,
        payload,
    };
};

export const follow = (username) => async (dispatch) => {
    const response = await fetch(`/api/users/follow/${username}`,{
      method: 'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(username)
    })
  
    if (response.ok) {
      const data = await response.json();
      dispatch(loadFollow(data));
      return data
  
    }
  };



// export const getAllFollowingThunk = (id) => async (dispatch) => {
//     const res = await fetch(`/api/users/${id}/followings`);

//     if (res.ok) {
//         const data = await res.json();
//         dispatch(loadFollow(data));
//     }
// };



export const getAllFollowerThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/followers`);

    if (res.ok) {
        const data = await res.json();
        dispatch(loadFollow(data));
    }
};

export const unFollowThunk = (username) => async (dispatch) => {

    const res = await fetch(`/api/users/unfollow/${username}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(username)
    });

    if (res.ok) {
        dispatch(follow(username));
    }
};


const followerReducer = (state = defaultState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_FOLLOW:
            action.payload.followers.forEach(follower=>{
                newState[follower.id] = {...follower}
            })
            return newState


        case DELETE_FOLLOW:
            delete newState[action.payload];
            return newState;

        default:
            return state;
    }
};

export default followerReducer;
