const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidV4 } = require("uuid");

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files from the "public" folder
app.use(express.static("public"));

// Redirect to a room with a unique UUID
app.get("/", (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

// Render the room page
app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
  socket.on("join-room", () => {
    console.log("alan joined");
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
