import React from "react";
import classes from "./ChatRoom.module.css";
import TopBar from "./topBar/TopBar";
import SideBar from "./sideBar/SideBar";
const ChatRoom = () => {
  return (
    <div className={classes.Container}>
      <TopBar />
      <SideBar />
    </div>
  );
};

export default ChatRoom;
