const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

const users = {
  "abc@gmail.com": {
    username: "helloworld",
    password: "123",
  },
};

// 1. 註冊
router.post("/register", (req, res) => {
  const { email, password, username } = req.body;
  if (users[email]) {
    return res.status(400).send({ error: "用戶已存在" });
  }
  // 1-1. 將密碼加密
  const hashedPassword = bcrypt.hashSync(password, 10);

  // 1-2. 將使用者資料存入資料庫
  users[email] = {
    username,
    password: hashedPassword,
  };
  console.log(users);

  // 1-3. 回傳註冊成功
  return res.status(200).send({ message: "註冊成功" });
});

// 2. 登入
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // 2-1. 檢查使用者是否存在
  if (!users[email]) {
    return res.status(401).send({ error: "用戶不存在" });
  }

  // 2-2. 檢查密碼是否正確
  if (!bcrypt.compareSync(password, users[email].password)) {
    return res.status(401).send({ error: "密碼錯誤" });
  }

  // 2-3. JWT簽章

  // 2-4. 回傳token
});

// 3. 驗證

module.exports = router;
