const mysql = require("mysql2");

const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Y3in@mysql",
});

function manageEmployee() {
    console.log("Manage Employeeeee!!");
    function addEmployee() {
        console.log("Add Employee!!");
    }
    
    function viewEmployee() {
        console.log("View Employee!!");
    }

    function updateEmployee() {
        console.log("Update Employee!!");
    }
    function employeeTasks(payload) {

        const taskNames = Object.keys(payload);
        const choices = taskNames.map((task) => {
            return {
                name: task,
                value: payload[task],
            }
        })
    
        inquirer.prompt([
            {
                name: "taskSelected",
                message: "What would you like to do?",
                type: "list",
                choices: choices,
            }
        ]).then(({taskSelected}) => taskSelected())
        }
    
        function employeesMain() {
            employeeTasks({
                "Add Employee": addEmployee,
                "View Employee": viewEmployee,
                "Update Employee": updateEmployee,
            })        
        }
        employeesMain();
}

function manageRole() {
    console.log("Manage Roles!!");
}

function manageDepartment() {
    console.log("Manage Department!!");
}


function askTasks(payload) {

    const taskNames = Object.keys(payload);
    const choices = taskNames.map((task) => {
        return {
            name: task,
            value: payload[task],
        }
    })

    inquirer.prompt([
        {
            name: "taskSelected",
            message: "What would you like to do?",
            type: "list",
            choices: choices,
        }
    ]).then(({taskSelected}) => taskSelected())
    }

    function main() {
        askTasks({
            "Manage Employees": manageEmployee,
            "Manage Roles": manageRole,
            "Manage Department": manageDepartment,
        })        
    }

    main();