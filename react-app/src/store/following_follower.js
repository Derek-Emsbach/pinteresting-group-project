const defaultState = {};

const LOAD_FOLLOW = 'followings_followers/LOAD_FOLLOWING';
const DELETE_FOLLOW = 'followings_followers/DELETE_FOLLOW';

const loadFollow = (payload) => {
    return {
        type: LOAD_FOLLOW,
        payload,
    };
};

const unFollow = (payload) => {
    return {
        type: DELETE_FOLLOW,
        payload,
    };
};

export const getAllFollowingThunk = () => async (dispatch) => {
    const res = await fetch(`/api/followings_followers`);

    if (res.ok) {
        const data = await res.json();
        dispatch(loadFollow(data));
    }
};

export const getAllFollowerThunk = () => async (dispatch) => {
    const res = await fetch(`/api/followings_followers`);

    if (res.ok) {
        const data = await res.json();
        dispatch(loadFollow(data));
    }
};

export const unFollowThunk = (data) => async (dispatch) => {
    const body = JSON.stringify(data);

    const res = await fetch(`/api/followings_followers`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });

    if (res.ok) {
        dispatch(unFollow(data.id));
    }
};

const followReducer = (state = defaultState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case LOAD_FOLLOW:
            return { ...newState, ...action.payload };

        case DELETE_FOLLOW:
            delete newState[action.payload];
            return newState;

        default:
            return state;
    }
};

export default followReducer;
