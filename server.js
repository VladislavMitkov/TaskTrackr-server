// import Express.js library
const express = require("express");

const cors = require("cors");
// creating express app which will define routes and middleware for the server
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Define a route handler for the root URL ("/")
app.get("/", (req, res) => {
  const payload = req.body;
  console.log(payload);
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
  res.send("get");
});

//make a POST request to add task
app.post("/tasks", (req, res) => {
  const payload = req.body;
  console.log("recieved data:", payload);

  res.send({ method: "POST", payload: payload });
});

// UPDATE
app.put("/tasks/:id", (req, res) => {
  const payload = req.body;
  console.log("Updated", payload);
  res.send({ method: "PUT", payload: payload });
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  console.log("DELETED");

  res.send("Delete");
});
// Start server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
