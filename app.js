const mysql = require("mysql2");

const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "Y3in@mysql",
});