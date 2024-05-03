// import Express.js library
const express = require("express");

const cors = require("cors");
// creating express app which will define routes and middleware for the server
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// DUMMY DATA
const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description for Task 1",
    priority: "low",
    status: "todo",
    dueDate: "2024-04-30",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description for Task 2",
    priority: "medium",
    status: "in-progress",
    dueDate: "2024-05-05",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description for Task 3",
    priority: "high",
    status: "done",
    dueDate: "2024-04-25",
  },
  {
    id: 4,
    title: "Task 4",
    description: "Description for Task 4",
    priority: "low",
    status: "todo",
    dueDate: "2024-05-10",
  },
  {
    id: 5,
    title: "Task 5",
    description: "Description for Task 5",
    priority: "high",
    status: "in-progress",
    dueDate: "2024-04-28",
  },
];

// Define a route handler for the root URL ("/")
app.get("/", (req, res) => {
  const payload = req.body;
  console.log(payload);
  res.send("Welcome to Planner App Backend");
});

app.get("/tasks", (req, res) => {
  const filterTasks = (task) => {
    //we iterates over each KEY in the query Params
    for (const key in req.query) {
      if (task[key] !== req.query[key]) {
        return false;
      }
    }
    return true;
  };
  const filteredTasks = tasks.filter(filterTasks);
  res.send(filteredTasks);
});

//get the full list of your tasks
app.get("/tasks", (req, res) => {
  console.log("Here are all of your tasks.");
  res.send("Here are all of your tasks.");
});

//get a single task by Id
app.get("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  console.log("Task by id", taskId);
  res.send("Task with id: " + taskId);
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
