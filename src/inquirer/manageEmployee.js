// const inquirer = require('inquirer');

// function manageEmployee() {
//     console.log("Manage Employeeeee!!");
//     function addEmployee() {
//         console.log("Add Employee!!");

//         main();
//     }
    
//     function viewEmployee() {
//         console.log("Viewing employees\n");
      
//         var query =
//           `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
//         FROM employee e
//         LEFT JOIN role r
//           ON e.role_id = r.id
//         LEFT JOIN department d
//         ON d.id = r.department_id
//         LEFT JOIN employee m
//           ON m.id = e.manager_id`
      
//         connection.query(query, function (err, res) {
//           if (err) throw err;
      
//           console.table(res);
//           console.log("Employees viewed!\n");
      
//           firstPrompt();
//         });
//         // console.log(query.sql);
//       }

//     function updateEmployee() {
//         console.log("Update Employee!!");

//         main();
//     }
//     function employeeTasks(payload) {

//         const taskNames = Object.keys(payload);
//         const choices = taskNames.map((task) => {
//             return {
//                 name: task,
//                 value: payload[task],
//             }
//         })
    
//         inquirer.prompt([
//             {
//                 name: "taskSelected",
//                 message: "What would you like to do?",
//                 type: "list",
//                 choices: choices,
//             }
//         ]).then(({taskSelected}) => taskSelected())
//         }
    
//         function employeesMain() {
//             employeeTasks({
//                 "Add Employee": addEmployee,
//                 "View Employee": viewEmployee,
//                 "Update Employee": updateEmployee,
//             })        
//         }
//         employeesMain();
// }

// module.exports = manageEmployee;