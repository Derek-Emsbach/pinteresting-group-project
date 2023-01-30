const defaultState = {};

const LOAD_BOARDS = 'boards/LOAD_BOARDS';
const DELETE_BOARD = 'boards/DELETE_BOARD';

const loadBoards = (payload) => {
    return {
        type: LOAD_BOARDS,
        payload,
    };
};

const deleteBoard = (payload) => {
    return {
        type: DELETE_BOARD,
        payload,
    };
};

export const getAllBoardsThunk = () => async (dispatch) => {
    const res = await fetch('/api/boards');

    if (res.ok) {
        const data = await res.json();
        dispatch(loadBoards(data));
    }
};

export const createBoardThunk = (data) => async (dispatch) => {
    const newBoard = JSON.stringify(data);

    const res = await fetch('/api/boards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: newBoard,
    });

    if (res.ok) {
        const newData = await res.json();
        dispatch(loadBoards(newData));
    }
};

export const editBoardThunk = (data) => async (dispatch) => {
    const editBoard = JSON.stringify(data);

    const res = await fetch('/api/boards', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: editBoard,
    });

    if (res.ok) {
        const newData = await res.json();
        dispatch(loadBoards(newData));
    }
};

export const deleteBoardThunk = (data) => async (dispatch) => {
    const body = JSON.stringify(data);

    const res = await fetch(`/api/boards/${data.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });

    if (res.ok) {
        dispatch(deleteBoard(data.id));
    }
};

const boardReducer = (state = defaultState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case LOAD_BOARDS:
            return { ...newState, ...action.payload };

        case DELETE_BOARD:
            delete newState[action.payload];
            return newState;

        default:
            return state;
    }
};

export default boardReducer;
