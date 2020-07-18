import React from "react";
import "./App.css";
import HomePage from "./homePage/HomePage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import ChatRoom from "./ChatRoom/ChatRoom";
import ChatRoomContext from "./context/ChatRoomContext";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ChatRoomContext>
          <Route path="/login" exact component={HomePage} />
          <Route path="/chatroom" exact component={ChatRoom} />
          <Route
            exact
            path="/"
            render={() =>
              window.location.pathname === "/" ? <Redirect to="/login" /> : null
            }
          />
        </ChatRoomContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
