import React from "react";
import classes from "./HomePage.module.css";
import SignIn from "./signIn/SignIn";
const HomePage = () => {
  return (
    <div className={classes.Container}>
      <img className={classes.Logo} src={require("../assets/images/kc.svg")} />
      <h1>Glad to see you!</h1>
      <SignIn />
    </div>
  );
};

export default HomePage;
