import React, { useEffect, useState } from "react";
import EditorInput from "./EditorInput";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editBoardThunk } from "../../../store/board";
import "./Editor.css";

function BoardDetailEditor({ setOpen }) {
  const { boardId } = useParams();
  const board = useSelector((state) => state.board[boardId]);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // const [description, setDescription] = useState("");
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  useEffect(() => {
    setTitle(board.title);
    // setDescription(board.description);
    setImageUrl(board.imageUrl);
  }, [board]);

  const handleSubmit = async (e) => {};

  return (
    <div className="BoardDetail--Editor--Container">
      <div className="BoardDetail--Editor--Backdrop">
        <div className="BoardDetail--Editor--Card">
          <button
            className="regular-button"
            onClick={() => setOpen(false)}
            disabled={pending}
          >
            x
          </button>
          <form
            onSubmit={async (event) => {
              event.preventDefault();

              const payload = { title, imageUrl };
              setPending(true);

              let data = await dispatch(
                editBoardThunk(boardId, payload)
              ).finally((data) => {
                setPending(false);
                return data;
              });

              if (data.errors) {
                setErrors([...Object.values(data.errors)]);
              } else {
                setOpen(false);
              }
            }}
          >
            {!!errors.length && (
              <ul>
                {errors.map((message, i) => (
                  <li className="errors" key={i}>
                    {message}
                  </li>
                ))}
              </ul>
            )}

            <EditorInput
              name="Title"
              value={title}
              setValue={setTitle}
              disabled={pending}
            />
            {/* <EditorInput
              name="Description"
              type="textarea"
              rows={6}
              value={description}
              setValue={setDescription}
              disabled={pending}
            /> */}
            <EditorInput
              name="ImageUrl"
              value={imageUrl}
              setValue={setImageUrl}
              disabled={pending}
            />
            <button className="create-button" type="submit" disabled={pending}>
              save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BoardDetailEditor;
