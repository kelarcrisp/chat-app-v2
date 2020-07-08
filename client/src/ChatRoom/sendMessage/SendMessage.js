import React from "react";
import classes from "./SendMessage.module.css";
const SendMessage = () => {
  return (
    <div className={classes.Container}>
      <input className={classes.InputField} placeholder="Enter Message" />
      <button className={classes.SubmitButton}>Send</button>
    </div>
  );
};

export default SendMessage;
