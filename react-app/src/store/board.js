const GET_ALL_BOARDS = "/spots/GET_ALL_BOARDS";

const ADD_BOARD = "/spots/ADD_BOARD";

const REMOVE_BOARD='/spots/REMOVE_BOARD'

const loadBoards = (boards) => {
  return {
    type: GET_ALL_BOARDS,
    boards
  };
};

const addingBoard = (boards) => {
  return {
    type: ADD_BOARD,
    boards,
  };
};

const removeBoard =(boardId)=>{
  return{
    type: REMOVE_BOARD,
    boardId
  }
}

export const getAllBoards = () => async (dispatch) => {
  const response = await fetch("/api/boards/");

  if (response.ok) {
    const list = await response.json();
    dispatch(loadBoards(list));

  }
};

export const getSingleBoard = (boardId) => async (dispatch) => {
  const response = await fetch(`/api/boards/${boardId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(addingBoard(data));
    return data;
  }
};

export const addABoard = (boards) => async (dispatch) => {
  const response = await fetch("/api/boards/",{
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(boards)
  })

  if (response.ok) {
    const data = await response.json();
    dispatch(addingBoard(data));
    return data

  }
};

export const editABoard=(id,boardData) =>async(dispatch)=>{
  const response = await fetch(`/api/boards/${id}`,{
    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(boardData)

  })
if(response.ok){
  const boardData= await response.json()
  dispatch(addingBoard(boardData))
  return boardData
}

}

export const deleteABoard = (boardId) => async (dispatch) => {
  const response = await fetch(`/api/boards/${boardId}`,{
    method: 'DELETE',
    headers:{
      'Content-Type':'application/json'
    }
  });

  if (response.ok) {

    dispatch(removeBoard(boardId));

  }
};
const initialBoards = {};

const boardsReducer = (state = initialBoards, action) => {
  let copy = { ...state };
  switch (action.type) {
    case GET_ALL_BOARDS:
    action.boards.boards.forEach((board) => {
        copy[board.id] = board;
      });
      return copy;

    case ADD_BOARD:
      copy[action.boards.id] = action.boards;
    return copy

    case REMOVE_BOARD:

    delete copy[action.boardId]


  return copy

    default:
      return state;
  }
};

export default boardsReducer;
