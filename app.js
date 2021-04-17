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
        console.log("\nInserting an employee!\n")

        console.log("\nList of Roles to choose from ...\n");
      
        var query =
          `SELECT r.id, r.title, r.salary 
            FROM role r`

        connection.query(query,(err, res)=>{
        if (err) throw err;
        const roleChoices = res.map((choices) => ({
            value: choices.id, name: choices.name
        }));
        console.table(res);
      
          promptInsert(roleChoices);
        });
      }
      
      function promptInsert(roleChoices) {
      
        inquirer
          .prompt([
            {
              type: "input",
              name: "first_name",
              message: "Employee's first name?"
            },
            {
              type: "input",
              name: "last_name",
              message: "Employee's last name?"
            },
            {
              type: "list",
              name: "roleId",
              message: "Choose Employee's role?",
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
      
                console.log("\nInserted successfully!\n");
      
                main();
              });
          });
      }
    
    function viewEmployee() {
        console.log("Showing the employee list.\n");
      
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

function findEmployeesByDepartment(){
    let query =
    `SELECT 
        d.id, 
        d.name, 
        r.salary
    FROM employee e
    LEFT JOIN role r
        ON e.role_id = r.id
    LEFT JOIN department d
        ON d.id = r.department_id
    GROUP BY d.id, d.name, r.salary`;
  
  connection.query(query,(err, res)=>{
      if (err) throw err;
      const deptChoices = res.map((choices) => ({
          value: choices.id, name: choices.name
      }));
    console.table(res);
    getDept(deptChoices);
  });
}

function getDept(deptChoices){
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'department',
                message: 'Departments: ',
                choices: deptChoices
            }
        ]).then((res)=>{ 
        let query = `SELECT 
                        e.id, 
                        e.first_name, 
                        e.last_name, 
                        r.title, 
                        d.name
                    FROM employee e
                    JOIN role r
                        ON e.role_id = r.id
                    JOIN department d
                        ON d.id = r.department_id
                    WHERE r.id = ?`
  
        connection.query(query, res.department,(err, res)=>{
        if(err)throw err;
          main();
          console.log("Showing list of employees\n");

          console.table(res);
        });
    })
}
      
    function updateEmployeeRole() {
        console.log("Update an Employee's Role!");

            let query = `SELECT 
                            e.id,
                            e.first_name, 
                            e.last_name, 
                            r.title, 
                            d.name, 
                            r.salary
                        FROM employee e
                        JOIN role r
                            ON e.role_id = r.id
                        JOIN department d
                            ON d.id = r.department_id`
          
            connection.query(query,(err, res)=>{
              if(err)throw err;
              const employee = res.map(({ id, first_name, last_name }) => ({
                value: id,
                 name: `${first_name} ${last_name}`      
              }));
              console.table(res);
              updateRole(employee);
            });
        }
        
        function updateRole(employee){
          let query = 
          `SELECT 
            r.id, 
            r.title, 
            r.salary 
          FROM role r`
        
          connection.query(query,(err, res)=>{
            if(err)throw err;
            let roleChoices = res.map(({ id, title, salary }) => ({
              value: id, 
              title: `${title}`, 
              salary: `${salary}`      
            }));
            console.table(res);
            getUpdatedRole(employee, roleChoices);
          });
        }
          
        function getUpdatedRole(employee, roleChoices) {
          inquirer
            .prompt([
              {
                type: "list",
                name: "employee",
                message: `Employee who's role will be Updated: `,
                choices: employee
              },
              {
                type: "list",
                name: "role",
                message: "Select New Role: ",
                choices: roleChoices
              },
        
            ]).then((res)=>{
              let query = `UPDATE employee SET role_id = ? WHERE id = ?`
              connection.query(query,[ res.role, res.employee],(err, res)=>{
                  if(err)throw err;
                  console.log("Employee Role Updated\n");
                  main();
                });
            });
        }

        function deleteEmployee() {
            let query =
            `SELECT
                e.id, 
                e.first_name, 
                e.last_name
            FROM employee  e`
          
            connection.query(query,(err, res)=>{
              if(err)throw err;
              const employee = res.map(({ id, first_name, last_name }) => ({
                value: id,
                name: `${id} ${first_name} ${last_name}`
              }));
              console.table(res);
              employeeToRemove(employee);
            });
          }
          
          function employeeToRemove(employee){  
            inquirer
              .prompt([
                {
                  type: "list",
                  name: "employee",
                  message: "Which Employee do you want to delete? ",
                  choices: employee
                }
              ]).then((res)=>{
                let query = `DELETE FROM employee WHERE ?`;
                connection.query(query, { id: res.employee },(err, res)=>{
                  if(err) throw err;
                  main();
                });
              });
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
                "Update Employee Role": updateEmployeeRole,
                "Find Employee by Department": findEmployeesByDepartment,
                "Delete Employees": deleteEmployee,
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
            message: "What would you like manage?",
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
            // "EXIT": exit,
        })        
    }

    main();