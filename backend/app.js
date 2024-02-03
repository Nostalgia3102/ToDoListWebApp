//=======================PACKAGES ==========================//
const express = require("express");
const app = express(); //calling the methods from the express framework

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

//========================IMPORT ROUTES====================//
const todo = require("./routes/todoRoutes");

//========================MIDDLEWARES======================//
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb", 
    extended : true
}))
app.use(cors());

//====================ROUTE MIDDLEWARE=====================//
app.use("/api", todo);

//=====================PORT ID=============================//
const port = 8800;

app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
})