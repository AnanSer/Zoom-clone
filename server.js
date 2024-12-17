const express = require("express");

const app = express();

const server = require("http").Server(app);

app.get("/", (req, res) => {
  res.send("hi");
});

server.listen(process.env.PORT || 3000);