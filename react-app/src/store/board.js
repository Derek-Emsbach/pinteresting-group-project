


const LOAD_BOARDS = 'boards/LOAD_BOARDS';
const DELETE_BOARD = 'boards/DELETE_BOARD';
const ADD_BOARD = 'boards/ADD_BOARD';

const loadBoards = (boards) => {
    return {
        type: LOAD_BOARDS,
        boards,
    };
};

const addBoard = (boards) => {
    return {
      type: ADD_BOARD,
      boards,
    };
  };

const deleteBoard = (boards) => {
    return {
        type: DELETE_BOARD,
        boards,
    };
};

export const getAllBoardsThunk = () => async (dispatch) => {
    const res = await fetch('/api/boards/');

    if (res.ok) {
        const data = await res.json();
        dispatch(loadBoards(data));
        // return data
    }
};

export const getOneBoardThunk = (boardId) => async (dispatch) => {
    const res = await fetch(`/api/boards/${boardId}`);

    if (res.ok) {
        const board = await res.json();
        dispatch(loadBoards(board));
        return board
    }
};

export const createBoardThunk = (boards) => async (dispatch) => {

    const res = await fetch('/api/boards/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(boards),
    });

    if (res.ok) {
        const newData = await res.json();
        dispatch(addBoard(newData));
        return newData
    }
};

export const editBoardThunk = (boardId, boardData) => async (dispatch) => {

    const res = await fetch(`/api/boards/${boardId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(boardData),
    });

    if (res.ok) {
        const boardData = await res.json();
        dispatch(addBoard(boardData));
        return boardData
    }
};


export const deleteBoardThunk = (boardId) => async (dispatch) => {

  const res = await fetch(`/api/boards/${boardId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (res.ok) {
    dispatch(deleteBoard(boardId));
  }
};

const defaultState = {};

const boardReducer = (state = defaultState, action) => {

    let newState = { ...state };

    switch (action.type) {
        case LOAD_BOARDS:
            action.boards.boards.forEach((board) => {
                console.log(board)
                newState[board.id] = board;
              });
              return {
                ...state,
                ...newState
              }

        case ADD_BOARD:
            newState[action.boards.id] = action.boards;
            return newState

        case DELETE_BOARD:
            delete newState[action.boards];
            return newState;

    default:
      return state;
  }
};

export default boardReducer;
