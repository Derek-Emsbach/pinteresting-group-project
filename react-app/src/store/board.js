


const LOAD_BOARDS = 'boards/LOAD_BOARDS';
const DELETE_BOARD = 'boards/DELETE_BOARD';
const ADD_BOARD = 'boards/ADD_BOARD';
const EDIT_BOARD = 'boards/EDIT_BOARD';

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

const editBoard = (boards) => {
return {
    type: EDIT_BOARD,
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
        return data
    }
};

// export const getOneBoardThunk = (boardId) => async (dispatch) => {
//     const res = await fetch(`/api/boards/${boardId}`);

//     if (res.ok) {
//         const board = await res.json();
//         dispatch(loadBoards(board));
//     }
// };

export const createBoardThunk = (data) => async (dispatch) => {
    const newBoard = JSON.stringify(data);

    const res = await fetch('/api/boards/', {
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

export const editBoardThunk = (board) => async (dispatch) => {
    console.log('***********EDIT BOARD STORE *********************',board)
    const res = await fetch(`/api/boards/${board.id}`, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(board)
    });

    if (res.ok) {
        console.log('***********EDIT BOARDasdf*********************')
        const board = await res.json();
        dispatch(loadBoards(board));
        return board

    }

};


export const deleteBoardThunk = (data) => async (dispatch) => {
  const body = JSON.stringify(data);

  const res = await fetch(`/api/boards/${data.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  if (res.ok) {
    dispatch(deleteBoard(data.id));
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

        case EDIT_BOARD:
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
