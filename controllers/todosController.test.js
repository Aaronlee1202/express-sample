const request = require("supertest");
const app = require("../app");
const TodoModel = require("../models/todosModel");

// 初始化 每次測試都是乾淨的資料
beforeEach(() => {
  TodoModel.todos = [
    { id: 1, title: "first todo", completed: false },
    { id: 2, title: "second todo", completed: true },
  ];
});

// 測試 '自定義名稱' , callback function
test("取得所有代辦事項", async () => {
  // 使用 supertest 發送一個 HTTP GET 請求到 /todos 路徑，並等待回應
  // 回應的結果將被存儲在 res 變數中
  const res = await request(app).get("/todos"); //測試會經過app.js
  // 請求結果 === 與資料庫一致
  // 斷言確保回應的內容與預期的代辦事項資料一致
  expect(res.body).toEqual(TodoModel.todos);
  expect(res.statusCode).toBe(200);
});

test("建立新的代辦事項", async () => {
  const newTodo = { title: "three todo", completed: false };
  const res = await request(app).post("/todos").send(newTodo);
  expect(res.body.title).toBe(newTodo.title);
  expect(res.body.completed).toBe(newTodo.completed);
  expect(res.statusCode).toBe(200);
});

// 錯誤測試
test("建立新的代辦事項 - 沒有 title 欄位", async () => {
  const newTodo = { completed: false };
  const res = await request(app).post("/todos").send(newTodo);
  expect(res.statusCode).toBe(400);
  expect(res.text).toBe("缺少 title 欄位");
});
