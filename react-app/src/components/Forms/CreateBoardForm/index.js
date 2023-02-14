import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { createBoardThunk } from "../../../store/board";
import EditorInput from "../../Pages/BoardDetailPage/EditorInput";
import "./CreateBoardForm.css";

function CreateBoardForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = { title, imageUrl };

    let data = await dispatch(createBoardThunk(payload));

    if (data.errors) {
      setErrors([...Object.values(data.errors)]);
    } else {
      history.push(`/boards`);
    }
  };

  return (
    <div className="form-body">
      <form className="create-board-form" onSubmit={handleSubmit}>
        <h1 className="update">Create a Board!</h1>
        {!!errors.length && (
          <ul>
            {errors.map((error, idx) => (
              <li className="edit-errors" key={idx}>
                {error}
              </li>
            ))}
          </ul>
        )}

        {/* <EditorInput label='Title' value={title} setValue={setTitle}/> */}
        {/* EXAMPLE helper function component */}
        <label className="board-form-labels">
          Title
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label className="board-form-labels">
          Image Url
          <input
            type="text"
            value={imageUrl}
            required
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <button className="create-button" type="submit">
          Create new Board!
        </button>
      </form>
    </div>
  );
}

export default CreateBoardForm;
