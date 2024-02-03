const db = require("../db/database");

//CREATE DB:
const createDb = (req, res) => {
    let q = 'CREATE DATABASE IF NOT EXISTS todolist';
    db.query(q, (err, result) => {
        if(err) throw err;
        return res.status(200).json("DB Created");
    })
}

//CREATE TABLE:
const createTable =  (req, res) => {
    let q = 'CREATE TABLE IF NOT EXISTS todos(id int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), PRIMARY KEY(id))';
    db.query(q, (err, result) => {
        if(err) throw err;
        return res.status(201).json("Table Created");
    })
}

//CREATE LIST :
const createList =  (req, res) => {
    const q = 'INSERT INTO todos SET ?';

    const {firstName, lastName} = req.body;

    db.query(q, {firstName, lastName}, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json(result);
    })
}

//SHOW TODOS :
const showTodos = (req, res) => {
    let q = "SELECT * FROM todos";
    db.query(q, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json(result);
    })
}

//SHOW SINGLE TODO :
const singleToDo = (req, res) => {
    let q = `SELECT * FROM todos WHERE id = ${req.params.id}`;
    
    db.query(q, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json(result[0]); //will show only the first outcome
    })
}

//UPDATE TO DO :
const updateToDo =  (req, res) => {
    const {firstName, lastName} = req.body;

    const q = `UPDATE todos SET ? WHERE id = ${req.params.id}`;

    db.query(q, {firstName, lastName}, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json(result);
    })
}

//DELETE A SINGLE TODO :
const deleteSingleToDo =  (req, res) => {

    const q = `DELETE FROM todos WHERE id = ${req.params.id}`;

    db.query(q, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json("ToDo Deleted");
    })
}

module.exports = {createDb, createTable, createList, showTodos, singleToDo, updateToDo, deleteSingleToDo};