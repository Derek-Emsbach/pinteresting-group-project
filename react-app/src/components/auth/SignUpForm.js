import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignUpForm.css";
import icon from "../../icons/pinterest_icon.png";

const SignUpForm = ({ onSuccess }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(
        signUp(firstName, lastName, username, email, password)
      );
      if (data) {
        setErrors(data);
      } else if (typeof onSuccess === "function") {
        onSuccess();
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup_container">
      <div className="signup_header">
        <img src={icon} />

        <h1>Welcome to Pinterest</h1>
        <h4>Find new ideas to try</h4>
      </div>

      <form onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div className="errors" key={ind}>
              {error}
            </div>
          ))}
        </div>
        <div id="form_detail">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
            placeholder="User Name"
          ></input>
        </div>
        <div id="form_detail">
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            onChange={updateFirstName}
            value={firstName}
            placeholder="First Name"
          ></input>
        </div>
        <div id="form_detail">
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            onChange={updateLastName}
            value={lastName}
            placeholder="Last Name"
          ></input>
        </div>
        <div id="form_detail">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            placeholder="Emai"
          ></input>
        </div>
        <div id="form_detail">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            placeholder="Create a password"
          ></input>
        </div>
        <div id="form_detail">
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            placeholder="Enter Your Password Again"
          ></input>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default SignUpForm;
