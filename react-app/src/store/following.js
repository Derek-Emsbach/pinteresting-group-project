const defaultState = {};

const LOAD_FOLLOWING = 'GET_FOLLOWINGS';



const loadFollowing = (payload) => {
    return {
        type: LOAD_FOLLOWING,
        payload,
    };
};


export const getAllFollowingThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/followings`);

    if (res.ok) {
        const data = await res.json();
        dispatch(loadFollowing(data));
    }
};

const followingReducer = (state = defaultState, action) => {
    
    switch (action.type) {
        case LOAD_FOLLOWING:{
            const newState = {}
            action.payload.followings.forEach(following=>{
                newState[following.id] = {...following}
            })
            return newState
        }
        

        default:
            return state;
    }
};

export default followingReducer;