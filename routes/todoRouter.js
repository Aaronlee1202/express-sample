const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// get all todos
router.get("/", todoController.getAllTodos);

// create a new todo
router.post("/", todoController.createTodo);

module.exports = router;
