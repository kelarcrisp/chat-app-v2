import React, { useEffect, useState } from "react";
import classes from "./DisplayChat.module.css";
import io from "socket.io-client";
const DisplayChat = ({ userName }) => {
  const [incomingChatMessages, setIncomingChatMessages] = useState([])
  const socket = io("http://localhost:5000");
  useEffect(() => {
    socket.on("chatMessage", message => {
      setIncomingChatMessages(latest => [...latest, message])
    });
  }, []);
  console.log(userName)
  return <div className={classes.FormInfoDisplayContainer}>
    <div className={classes.TextConvo}>
      <ul className={classes.OutputContainer}> {incomingChatMessages.map((message) => {
        return (
          <div style={{ padding: '6px' }}>
            <div className={message.user === userName ? classes.MyLabel : classes.TheirLabel}>{message.user}</div>
            <li key={Math.random()} className={message.user === userName ? classes.MyText : classes.TheirText}>{message.message} </li>
          </div>
        )
      })}</ul>
    </div>

  </div>;
};

export default DisplayChat;
