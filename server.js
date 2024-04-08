// import Express.js library
const express = require("express");
const res = require("express/lib/response");

// creating express app which will define routes and middleware for the server
const app = express();

// Define a route handler for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Welcome to Planner App Backend");
});

//get the full list of your tasks
app.get("/tasks", (req, res) => {
  console.log("Here are all of your tasks.");
  res.send("Here are all of your tasks.");
});

//get a single task by Id
app.get("/tasks/:id", (req, res) => {
  console.log("Task by id");
  res.send("Task id");
});

//make a POST request to add task
app.post("/tasks", (req, res) => {
  console.log("Post request");
});

// UPDATE
app.put("/tasks/:id", (req, res) => {
  console.log("Updated");
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  console.log("DELETED");
});
// Start server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
