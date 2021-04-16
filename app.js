const mysql = require("mysql2");

const inquirer = require('inquirer');

// const manageEmployee = require('./src/inquirer/manageEmployee');
const manageRole = require('./src/inquirer/manageRole');
const manageDepartment = require('./src/inquirer/manageDepartment');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Y3in@mysql",
    database: "Employee_Tracker_DB",
});

function manageEmployee() {
    console.log("Manage Employeeeee!!");
    function addEmployee() {
        console.log("Add Employee!!");

        main();
    }
    
    function viewEmployee() {
        console.log("Viewing employees\n");
      
        var query =
          `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, CONCAT(m.first_name, ' ', m.last_name) AS manager, r.salary
        FROM employee e
        LEFT JOIN employee m
          ON m.id = e.manager_id
        LEFT JOIN role r
          ON e.role_id = r.id
        LEFT JOIN department d
        ON d.id = r.department_id`
      
        connection.query(query, function (err, res) {
          if (err) throw err;
      
          console.table(res);
          console.log("\nEmployees viewed!\n");
      
          main();
        });
        // console.log(query.sql);
      }
      
    function updateEmployee() {
        console.log("Update Employee!!");

        main();
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