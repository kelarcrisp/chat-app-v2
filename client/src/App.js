import React from "react";
import "./App.css";
import HomePage from "./homePage/HomePage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

function App() {
  console.log(window.location.pathname);

  return (
    <BrowserRouter>
      <div>
        <Route path="/login" exact component={HomePage} />
        <Route
          exact
          path="/"
          render={() =>
            window.location.pathname === "/" ? <Redirect to="/login" /> : null
          }
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
