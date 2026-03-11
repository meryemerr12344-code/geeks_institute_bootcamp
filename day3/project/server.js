const express = require("express");

const connectDB = require("./config/db");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});