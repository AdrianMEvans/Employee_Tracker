const mysql = require("mysql2");

const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Y3in@mysql",
});

//MANAGE EMPLOYEE TABLE
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

// MANAGE ROLE TABLE
function manageRole() {
    console.log("Manage Roles!!");
    function addRole() {
        console.log("Add Role!!");
    }
    
    function viewRole() {
        console.log("View Role!!");
    }

    function updateRole() {
        console.log("Update Role!!");
    }
    function roleTasks(payload) {

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
    
        function roleMain() {
            roleTasks({
                "Add Role": addRole,
                "View Role": viewRole,
                "Update Role": updateRole,
            })        
        }
        roleMain();
}

// MANAGE DEPARTMENT TABLE
function manageDepartment() {
    console.log("Manage Department!!");
    
        function addDepartment() {
            console.log("Add Department!!");
        }
        
        function viewDepartment() {
            console.log("View Department!!");
        }
    
        function updateDepartment() {
            console.log("Update Department!!");
        }
        function departmentTasks(payload) {
    
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
        
            function departmentMain() {
                departmentTasks({
                    "Add Department": addDepartment,
                    "View Department": viewDepartment,
                    "Update Department": updateDepartment,
                })        
            }
            departmentMain();
}

// INTRO TO MANAGING THE TABLES
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