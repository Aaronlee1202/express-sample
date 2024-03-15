const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todosController");

// get all todos
router.get(
  "/",
  // 用來 API 的分類
  /* 	#swagger.tags = ['Todo']
        #swagger.description = '取得所有 Todo' */

  // Responses的預設資料
  /* #swagger.responses[200] = {
      schema: 
  {
    "title": "這是預設資料",
    "complete": false,
    "id": "cd3ef0b1-33ae-4fdd-b45d-24a133a955ad"
  }
,} */
  todoController.getAllTodos
);

// create a new todo
router.post(
  "/",
  // 用來 API 的分類
  /* 	#swagger.tags = ['Todo']
        #swagger.description = '新增 Todo' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Todo內容',
            required: true,
            schema: {
                "title": "這是標題",
                "completed": false
                }
    } */

  // Responses的預設資料
  /* #swagger.responses[200] = { 
      schema: 
  {
    "title": "這是預設資料",
    "complete": false,
    "id": "cd3ef0b1-33ae-4fdd-b45d-24a133a955ad"
  }
,} */
  todoController.createTodo
);

module.exports = router;
