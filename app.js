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
        console.log("Inserting an employee!")
      
        var query =
          `SELECT r.id, r.title, r.salary 
            FROM role r`
      
        connection.query(query, function (err, res) {
          if (err) throw err;
      
          const roleChoices = res.map(({ id, title, salary }) => ({
            value: id, title: `${title}`, salary: `${salary}`
          }));
      
          console.table(res);
          console.log("RoleToInsert!");
      
          promptInsert(roleChoices);
        });
      }
      
      function promptInsert(roleChoices) {
      
        inquirer
          .prompt([
            {
              type: "input",
              name: "first_name",
              message: "Enter the employee's first name?"
            },
            {
              type: "input",
              name: "last_name",
              message: "Enter the employee's last name?"
            },
            {
              type: "list",
              name: "roleId",
              message: "What is the Employee's role?",
              choices: roleChoices
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter Employee ID of Manager?",
              },
          ])
          .then(function (answer) {
            console.log(answer);
      
            var query = `INSERT INTO employee SET ?`
            connection.query(query,
              {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.roleId,
                manager_id: answer.managerId,
              },
              function (err, res) {
                if (err) throw err;
      
                console.table(res);
                // console.log(res.insertedRows + "Inserted successfully!\n");
                console.log("Inserted successfully!\n");
      
                main();
              });
          });
      }
    
    function viewEmployee() {
        console.log("Showing employee list\n");
      
        let query = 
    `SELECT 
        e.id, 
        e.first_name, 
        e.last_name, 
        r.title, 
        d.name AS department, 
        r.salary, 
        CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN role r
        ON e.role_id = r.id
    LEFT JOIN department d
        ON d.id = r.department_id
    LEFT JOIN employee m
        ON m.id = e.manager_id`
  
    connection.query(query, (err, res)=>{
      if (err) throw err;
      console.table(res);
      main();
    });
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
                "View Employees": viewEmployee,
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