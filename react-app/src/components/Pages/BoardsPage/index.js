import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBoardThunk, getAllBoardsThunk } from "../../../store/board";
import "./BoardsPage.css";
import GridLayout from "../../GridLayout";

function BoardsPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const myBoards = useSelector((state) => {
    const currentUser = state.session.user;

    if (!currentUser) {
      return [];
    }

    return Object.values(state.board).filter(
      ({ userId: boardAuthorId }) => boardAuthorId === currentUser.id
    );
  });

  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  const navigateToCreateBoardForm = () => {
    history.push("/boardform");
  };

  const navigateToBoard = (board) => {
    history.push(`/boards/${board.id}`);
  };

  return (
    <div className="MyBoards--Page">
      <div className="MyBoards--Heading">
        <h1>My Boards</h1>
        <button className="create-button" onClick={navigateToCreateBoardForm}>
          Create Board
        </button>
      </div>
      <GridLayout
        items={myBoards}
        onItemClick={navigateToBoard}
        renderItemActions={(board, closeActionPopOver) => (
          <button
            className="create-button"
            onClick={() => {
              dispatch(deleteBoardThunk(board.id));
              closeActionPopOver();
            }}
          >
            Delete
          </button>
        )}
      />
    </div>
  );
}

export default BoardsPage;
