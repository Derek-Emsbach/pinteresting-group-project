import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBoardThunk } from "../../../store/board";
import Editor from "./Editor";
import PopOver from "../../PopOver";
import "./Heading.css";

function BoardDetailHeading() {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { board, isMyBoard } = useSelector((state) => {
    const currentUser = state.session.user;
    const board = state.board[boardId] || {};

    return {
      board,
      isMyBoard: `${currentUser.id}` === `${board.userId}`,
    };
  });

  const [editorOpen, setEditorOpen] = useState(false);
  const [popOverOpen, setPopOverOpen] = useState(false);

  if (!board) {
    return null;
  }

  const { title, description } = board;

  const deleteBoard = async (e) => {
    e.preventDefault();

    await dispatch(deleteBoardThunk(boardId));

    history.push(`/boards`);
  };

  return (
    <>
      {editorOpen && <Editor setOpen={setEditorOpen} />}
      <div className="BoardDetail--Heading">
        <div className="BoardDetail--Title">
          <h1>{title}</h1>
          {!!isMyBoard && (
            <PopOver
              open={popOverOpen}
              setOpen={setPopOverOpen}
              button={
                <button
                  className="create-button"
                  onClick={() => setPopOverOpen(true)}
                >
                  ...
                </button>
              }
            >
              <div className="BoardDetail--Actions">
                <button
                  className="regular-button"
                  onClick={() => {
                    setEditorOpen(true);
                    setPopOverOpen(false);
                  }}
                >
                  edit
                </button>
                <button
                  className="create-button"
                  type="button"
                  onClick={deleteBoard}
                >
                  delete
                </button>
              </div>
            </PopOver>
          )}
        </div>
        {description && <p>{description}</p>}
      </div>
    </>
  );
}

export default BoardDetailHeading;
