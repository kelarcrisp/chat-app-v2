const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const formatMessage = require("./utils/messages");
//static folder
// app.use(express.static(path.join(__dirname, "public")));

//just socket emit is the single user
//socket broadcast emit is everyone but the user
// io emit is EVERYONE
const botName = "bot";
io.on("connection", socket => {
  socket.emit("message", formatMessage(botName, "welcome to my chat app!"));

  //broadcast so everyone but the user connecting sees the message
  socket.broadcast.emit(
    "message",
    formatMessage(botName, "a user has joined the chat")
  );

  socket.on("disconnect", () => {
    io.emit("message", formatMessage(botName, "A user has left the chat"));
  });

  //listen for chat message
  socket.on("chatMessage", message => {
    console.log(message, "message on sever");
    io.emit("chatMessage", formatMessage(botName, message));
  });
});
const PORT = 5000 | process.env.PORT;
server.listen(PORT, () => console.log(`running on port ${PORT}`));
