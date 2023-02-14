import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteBoardThunk,
  getAllBoardsThunk,
  selectMyBoards,
} from "../../../store/board";
import "./BoardsPage.css";
import GridLayout from "../../GridLayout";

function BoardsPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const myBoards = useSelector(selectMyBoards);

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
        buttonLabel="delete"
        onItemClick={navigateToBoard}
        renderItemActions={(board, closeActionPopOver) => (
          <button
            className="create-button"
            onClick={() => {
              dispatch(deleteBoardThunk(board.id));
              closeActionPopOver();
            }}
          >
            Are you sure?
          </button>
        )}
      />
    </div>
  );
}

export default BoardsPage;
