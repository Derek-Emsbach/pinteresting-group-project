import { replaceBoard } from "./board";

export const addPinning = (boardId, pinId) => async (dispatch) => {
  const res = await fetch(`/api/boards/${boardId}/pin/${pinId}`, {
    method: "POST",
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(replaceBoard(data));
  }
};

export const removePinning = (boardId, pinId) => async (dispatch) => {
  const res = await fetch(`/api/boards/${boardId}/pin/${pinId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(replaceBoard(data));
  }
};
