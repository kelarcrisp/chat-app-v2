import React from "react";
import classes from "./ChatRoom.module.css";
import TopBar from "./topBar/TopBar";
import SideBar from "./sideBar/SideBar";
import SendMessage from "./sendMessage/SendMessage";
import DisplayChat from "./displayChat/DisplayChat";
const ChatRoom = (props) => {

  return (
    <div className={classes.Container}>
      <TopBar />
      <div style={{ display: "flex", margin: 0 }}>
        <SideBar />
        <DisplayChat userName={props.location.state} />
      </div>
      <SendMessage />
    </div>
  );
};

export default ChatRoom;
