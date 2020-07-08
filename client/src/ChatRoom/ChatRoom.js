import React from "react";
import classes from "./ChatRoom.module.css";
import TopBar from "./topBar/TopBar";
import SideBar from "./sideBar/SideBar";
import SendMessage from "./sendMessage/SendMessage";
import DisplayChat from "./displayChat/DisplayChat";
const ChatRoom = () => {
  return (
    <div className={classes.Container}>
      <TopBar />
      <div style={{ display: "flex", margin: 0 }}>
        <SideBar />
        <DisplayChat />
      </div>

      <SendMessage />
    </div>
  );
};

export default ChatRoom;
