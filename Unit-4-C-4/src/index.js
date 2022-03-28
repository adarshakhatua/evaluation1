const express = require("express");

const app =express()

const userController = require("./controllers/user.controller");
const todoController = require("./controllers/todo.controller");
const {register,login} = require("./controllers/auth.controller")


app.use(express.json());
app.use("/users",userController);
app.use("/todos",todoController);


app.post("/register", register);
app.post("/login", login);



module.exports = app;