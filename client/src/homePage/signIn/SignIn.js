import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./SignIn.module.css";
import io from "socket.io-client";
const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const history = useHistory();
  // useEffect(() => {
  //   const socket = io("http://localhost:5000");
  //   socket.on("message", message => {
  //     console.log(message);
  //   });
  // }, []);

  const handleSubmit = () => {
    //send userName to server
    //redirect to chat room page
    if (userName.length < 1) {
      setUserNameError("Username must be > 0 characters ");
    } else {
      setUserNameError("");
      history.push("/chatroom", userName);
    }
  };
  return (
    <>
      <div className={classes.Container}>
        <label className={classes.UserNameLabel}>Username</label>
        <input
          placeholder="Username.."
          className={classes.InputField}
          type="text"
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />

        <label className={classes.RoomLabel}>Chat rooms currently online</label>
        <select className={classes.SelectField} defaultValue="Javscript">
          <option value="javascript">Javascript</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
        <button className={classes.SignInButton} onClick={handleSubmit}>
          Join!
        </button>
      </div>
      {userNameError.length > 1 ? userNameError : null}
    </>
  );
};

export default SignIn;
