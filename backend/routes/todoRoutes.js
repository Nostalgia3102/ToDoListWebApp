const express = require("express");
const router = express.Router();
const {createDb, createTable, createList, showTodos, singleToDo, updateToDo, deleteSingleToDo} = require("../controllers/todoController");


//ROUTES :
router.get("/create/database", createDb);
router.get("/create/table", createTable);
router.post("/create/list", createList);
router.get("/show/todos", showTodos);
router.get("/todo/:id", singleToDo);
router.put("/update/todo/:id", updateToDo);
router.delete("/delete/todo/:id", deleteSingleToDo);





module.exports = router;