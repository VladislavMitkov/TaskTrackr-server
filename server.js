// import Express.js library
const express = require("express");

// creating express app which will define routes and middleware for the server
const app = express();

// Define a route handler for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Welcome to Planner App Backend");
});
// Start server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
