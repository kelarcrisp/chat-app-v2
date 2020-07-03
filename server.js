const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
//static folder
app.use(express.static(path.join(__dirname, "public")));

//run when a client connects
io.on("connection", socket => {
  console.log("new web socket connection");
});
const PORT = 5000 | process.env.PORT;
server.listen(PORT, () => console.log(`running on port ${PORT}`));
