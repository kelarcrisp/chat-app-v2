const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
//static folder
// app.use(express.static(path.join(__dirname, "public")));

//just socket emit is the single user
//socket broadcast emit is everyone but the user
// io emit is EVERYONE
io.on("connection", socket => {
  socket.emit("message", "welcome to socketio");

  //broadcast so everyone but the user connecting sees the message
  socket.broadcast.emit("message", "a user has joined the chat");

  socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat");
  });
});
const PORT = 5000 | process.env.PORT;
server.listen(PORT, () => console.log(`running on port ${PORT}`));
