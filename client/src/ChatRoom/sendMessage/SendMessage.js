import React, { useRef, useEffect, useState, } from "react";
import classes from "./SendMessage.module.css";
import io from "socket.io-client";
import { useHistory } from 'react-router-dom'
const SendMessage = (props) => {
  const history = useHistory();
  const socket = io("http://localhost:5000");
  const [userInput, setUserInput] = useState('');
  console.log(history, 'in send message')
  const handleSubmit = () => {
    socket.emit('chatMessage', { user: history.location.state, message: userInput });
    console.log('submitted')
  }
  return (
    <div className={classes.Container}>
      <input value={userInput} onChange={(event) => setUserInput(event.target.value)} className={classes.InputField} placeholder="Enter Message " />
      <button onClick={handleSubmit} className={classes.SubmitButton}>Send</button>
    </div>
  );
};

export default SendMessage;
