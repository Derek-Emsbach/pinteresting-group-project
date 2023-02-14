import { FULL_RESET } from "./full-reset";

const REPLACE_BOARD = "board/REPLACE_BOARD";
const LOAD_BOARDS = "board/LOAD_BOARDS";
const DELETE_BOARD = "board/DELETE_BOARD";
const ADD_BOARD = "board/ADD_BOARD";

export const replaceBoard = (board) => {
  return {
    type: REPLACE_BOARD,
    board,
  };
};

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
  const res = await fetch("/api/boards/");

  if (res.ok) {
    const boards = await res.json();
    dispatch(loadBoards(boards));
  }
};

export const getAllBoardsByAUser = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/boards`);

  if (res.ok) {
    const boards = await res.json();
    dispatch(loadBoards(boards));
  }
};

export const getOneBoardThunk = (boardId) => async (dispatch) => {
  const res = await fetch(`/api/boards/${boardId}`);

  if (res.ok) {
    const board = await res.json();
    dispatch(loadBoards(board));
    return board;
  }
};

export const createBoardThunk = (boards) => async (dispatch) => {
  const res = await fetch("/api/boards/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(boards),
  });

  if (res.ok) {
    const newData = await res.json();
    dispatch(addBoard(newData));
    return newData;
  } else {
    const error = await res.json();
    return error;
  }
};

export const editBoardThunk = (boardId, boardData) => async (dispatch) => {
  const res = await fetch(`/api/boards/${boardId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(boardData),
  });

  if (res.ok) {
    const boardData = await res.json();
    dispatch(addBoard(boardData));
    return boardData;
  } else {
    const error = await res.json();
    return error;
  }
};

export const deleteBoardThunk = (boardId) => async (dispatch) => {
  const res = await fetch(`/api/boards/${boardId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    dispatch(deleteBoard(boardId));
  }
};

const defaultState = {};

const boardReducer = (state = defaultState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case FULL_RESET:
      return { ...defaultState };

    case REPLACE_BOARD:
      newState[action.board.id] = action.board;
      return newState;

    case LOAD_BOARDS: {
      action.boards.forEach((board) => {
        newState[board.id] = board;
      });

      return newState;
    }

    case ADD_BOARD:
      newState[action.boards.id] = action.boards;
      return newState;

    case DELETE_BOARD:
      delete newState[action.boards];
      return newState;

    default:
      return state;
  }
};

export default boardReducer;

export function selectMyBoards(state) {
  const currentUser = state.session.user;

  if (!currentUser) {
    return [];
  }

  return Object.values(state.board).filter(
    ({ userId: boardAuthorId }) => boardAuthorId === currentUser.id
  );
}
