// import Express.js library (web app framework for node.js)
const express = require("express");

// import Pool class from postgre client library for nodejs
const { Pool } = require("pg");

// creating express app which will befine routes and middleware for the server
const app = express();
const port = 5000;

// PostgreSQL config
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "planner_db",
  password: "123456",
  port: 5432,
});

// Test PostgreSQL connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to PostgreSQL:", err);
  } else {
    console.log("Connected to PostgreSQL:", res.rows[0].now);
  }
  pool.end();
});

// Define a route handler for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Welcome to Planner App Backend");
});

// Start server
app.listen(port, () => {
  console.log("Server is running on port 5000");
});
