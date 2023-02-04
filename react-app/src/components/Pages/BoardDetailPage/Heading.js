import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Editor from "./Editor";
import PopOver from "./PopOver";
import "./Heading.css";

function BoardDetailHeading() {
  const { boardId } = useParams();
  const board = useSelector((state) => state.board[boardId]);

  const [editorOpen, setEditorOpen] = useState(false);
  const [popOverOpen, setPopOverOpen] = useState(false);

  if (!board) {
    return null;
  }

  const { title, description } = board;

  return (
    <>
      {editorOpen && <Editor setOpen={setEditorOpen} />}
      <div className="BoardDetail--Heading">
        <div className="BoardDetail--Title">
          <h1>{title}</h1>
          <PopOver
            open={popOverOpen}
            setOpen={setPopOverOpen}
            button={<button onClick={() => setPopOverOpen(true)}>...</button>}
          >
            <button
              onClick={() => {
                setEditorOpen(true);
                setPopOverOpen(false);
              }}
            >
              edit
            </button>
          </PopOver>
        </div>
        {description && <p>{description}</p>}
      </div>
    </>
  );
}

export default BoardDetailHeading;
