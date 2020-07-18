import React from "react";
import classes from "./TopBar.module.css";
import { useHistory } from 'react-router-dom'
const TopBar = () => {
  const history = useHistory();

  return (
    <div className={classes.Container}>
      <div className={classes.Logo}> chat room</div>
      <button className={classes.LeaveChatButton} onClick={() => history.replace('/')}> Leave room</button>
    </div>
  );
};

export default TopBar;
