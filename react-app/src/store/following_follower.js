const defaultState = {};

const LOAD_FOLLOW = 'followings_followers/LOAD_FOLLOWING';
const DELETE_FOLLOW = 'followings_followers/DELETE_FOLLOW';
const FOLLOW_USER = "follow/FOLLOW_USER"


const loadFollow = (payload) => {
    return {
        type: LOAD_FOLLOW,
        payload,
    };
}

const followAUser = (payload) =>{
    return {
        type:FOLLOW_USER,
        payload
    }
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
      dispatch(followAUser(data));
      return data
  
    }
  };



export const getAllFollowingThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/followings`);

    if (res.ok) {
        const data = await res.json();
        dispatch(loadFollow(data));
    }
};



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
        dispatch(unFollow(username));
    }
};


const followerReducer = (state = defaultState, action) => {


    switch (action.type) {
        
        case LOAD_FOLLOW:{
            const newState ={}
            action.payload.followers.forEach(follower=>{
                newState[follower.id] = {...follower}
            })
            return newState
        }

        case FOLLOW_USER:{
            const newState ={}
             newState[action.payload.id] = action.payload
            return newState
        }


        case DELETE_FOLLOW:{
            const newState ={}
            newState[action.payload.id] = action.payload
            return newState;
        }

        default:
            return state;
    }
};

export default followerReducer;
