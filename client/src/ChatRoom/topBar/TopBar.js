import React from "react";
import classes from "./TopBar.module.css";
const TopBar = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Logo}> chat room</div>
      <button className={classes.LeaveChatButton}> Leave room</button>
    </div>
  );
};

export default TopBar;
