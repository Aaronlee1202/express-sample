const todoModel = require("../models/todoModel");

exports.getAllTodos = (req, res) => {
  const todos = todoModel.getAll();
  res.send({
    status: "success",
    todos,
  });
};

exports.createTodo = (req, res) => {
  // 取得使用者傳入的資料
  const { title } = req.body;
  // 將資料新增至 Todos
  const newTodo = todoModel.create({ title });
  res.send({
    status: "success",
    todo: newTodo,
  });
};
