require("dotenv").config();
const express = require("express");
const app = express();
const Router = require("./router");
var bodyParser = require('body-parser');

app.use(express.json());

app.use(bodyParser.urlencoded({enteded:true}));
app.use("/api", Router);
app.listen(process.env.APP_PORT, () => {   
    console.log("server running with port:", process.env.APP_PORT);
});