import React, { useState } from "react";
import classes from "./SideBar.module.css";
const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const visibleSideBar = (
    <div className={classes.Container}>
      <h2 style={{ margin: 0 }}>'ROOM NAME': </h2>
      <div>/*current room*/</div>
      <div>/*Users * /</div>
      <ul>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
      </ul>
    </div>
  );
  const hiddenSideBar = (
    <div className={classes.HiddenContainer}>
      <h2 style={{ margin: 0 }}>'ROOM NAME': </h2>
      <div>/*current room*/</div>
      <div>/*Users * /</div>
      <ul>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
      </ul>
    </div>
  );
  return (
    <>
      <button onClick={() => setShowSideBar(lastState => !lastState)}>
        {" "}
        #
      </button>
      {showSideBar && visibleSideBar}
      {!showSideBar && hiddenSideBar}
    </>
  );
};

export default SideBar;
