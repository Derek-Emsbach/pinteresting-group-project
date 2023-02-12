import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addAPin, editAPin } from "../../../store/pin";
import './CreatePinForm.css'

function CreatePinForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = { title, imageUrl, url };
    let data = await dispatch(addAPin(payload));

    if (data.errors) {
      setErrors([...Object.values(data.errors)]);
    } else {
      history.push(`/pins/${data.id}`);
    }
  };

  return (
    <section className="create-pin-form">
      <form className="create-form" onSubmit={handleSubmit}>
        <h1 className="create">Create your pin!</h1>
        <ul>
          {errors.map((error, idx) => (
            <li className="edit-errors" key={idx}>
              {error}
            </li>
          ))}
        </ul>

        <label>
          Title
          <input
            type="text"
            className="pin-input"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Image Url
          <input
            type="text"
            className="pin-input"
            value={imageUrl}
            required
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>

        <label>
          Link
          <input
            type="text"
            className="pin-input"
            value={url}
            required
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button className="create-button" type="submit">
          Create new Pin!
        </button>
      </form>
    </section>
  );
}

export default CreatePinForm;
