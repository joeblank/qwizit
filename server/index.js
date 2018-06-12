require("dotenv").config();

const express = require("express"),
  massive = require("massive"),
  mainCtrl = require('./mainCtrl');

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const { SERVER_PORT } = process.env;

io.on("connection", socket => {
  console.log("Connected: ", socket.id);
});

http.listen(SERVER_PORT, () => console.log(`Listenin on port: ${SERVER_PORT}`));
