const mysql = require('mysql2'); //used this insteadc of mysql to solve the auth error, or use sql connect x :

const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password : "Gunu@0875",
    database : "todolist"
})

//open the mysql connection and connect :
db.connect(error => {
    if(error) throw error;
    console.log("Database Connected");
});

module.exports = db;