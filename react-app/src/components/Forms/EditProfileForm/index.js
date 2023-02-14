import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { update_profile } from "../../../store/session";
import "./EditProfile.css";

function EditProfileForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [id, setId] = useState(sessionUser.id);
  const [firstName, setFirstName] = useState(sessionUser.firstName);
  const [lastName, setLastName] = useState(sessionUser.lastName);
  const [about, setAbout] = useState(sessionUser.about);
  const [username, setUserName] = useState(sessionUser.username);
  const [image, setImage] = useState(sessionUser.image);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id,
      firstName,
      lastName,
      image,
      about,
      username,
    };

    //!!START SILENT

    let data = await dispatch(update_profile(sessionUser.id, payload));

    // If error is not a ValidationError, add slice at the end to remove extra
    // "Error: "
    //!!END

    if (data.errors) {
      setErrors([...Object.values(data.errors)]);
    } else {
      history.push(`/my-profile`);
    }
  };

  return (
    <div className="edit_profile_container">
      <div className="profile_header">
        <h1> Public profile</h1>
        <h4> People visiting your profile will see the following info</h4>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <ul>
            {errors.map((error, idx) => (
              <li className="edit-errors" key={idx}>
                {error}
              </li>
            ))}
          </ul>
          <div className="pro_photo">
            <label className="edit-profile-labels">Photo</label>
            <input
              type="text"
              className="edit-profile-inputs"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="first_last_name">
            <label className="edit-profile-labels">First name</label>
            <input
              type="text"
              className="edit-profile-inputs"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>

            <label className="edit-profile-labels">Last name</label>
            <input
              type="text"
              className="edit-profile-inputs"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>

          <label className="edit-profile-labels">About</label>
          <textarea
            type="text"
            className="edit-profile-input-about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>

          <label className="edit-profile-labels">Username</label>
          <input
            type="text"
            className="edit-profile-inputs"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></input>

          <button className="create-button" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfileForm;
