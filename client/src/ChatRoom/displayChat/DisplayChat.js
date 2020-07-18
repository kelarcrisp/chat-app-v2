import React, { useEffect, useState } from "react";
import classes from "./DisplayChat.module.css";
import io from "socket.io-client";
const DisplayChat = ({ userName }) => {
  const [incomingChatMessages, setIncomingChatMessages] = useState([]);
  const [botMessage, setBotMessage] = useState([]);

  useEffect(() => {
      const socket = io("http://localhost:5000");
    socket.on("connection", () => {
      socket.emit(userName);
    });
    socket.on("message", user => {
      console.log(user, "USER WITHADMIN");
      setBotMessage(user);
    });
    socket.on("chatMessage", message => {
      setIncomingChatMessages(latest => [...latest, message]);
    });
  }, []);
  return (
    <div className={classes.FormInfoDisplayContainer}>
      <div className={classes.TextConvo}>
        <ul className={classes.OutputContainer}>
          {" "}
          <div className={classes.MyLabel}>
            {botMessage.username} {botMessage.time}
          </div>
          <div className={classes.MyText}>{botMessage.text}</div>
          {incomingChatMessages.map(message => {
            console.log(message, "in map statement");
            return (
              <div style={{ padding: "6px" }}>
                <div 
                  className={
                    message.text.user === userName
                      ? classes.MyLabel
                      : classes.TheirLabel
                  }
                >
                  {message.text.user}
                  {message.time}
                </div>
                <li
                  key={Math.random()}
                  className={
                    message.text.user === userName
                      ? classes.MyText
                      : classes.TheirText
                  }
                >
                  {message.text.message}{" "}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DisplayChat;
