// const inquirer = require('inquirer');

// MANAGE DEPARTMENT TABLE
// function manageDepartment() {
//     console.log("Manage Department!!");

//     function addDepartment() {
//         console.log("\nAdd a department\n");
//         inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     name: "name",
//                     message: "What is the department name?"
//                 }
//             ]).then((res) => {
//                 let query = `INSERT INTO department SET ?`;
//                 connection.query(query, { name: res.name }, (err, res) => {
//                     if (err) throw err;
//                     main();
//                 });
//             });
//     }

//     function viewDepartment() {
//         let query =
//             `SELECT 
//                 d.id, 
//                 d.name
//             FROM department d`

//         connection.query(query, (err, res) => {
//             if (err) throw err;
//             console.table(res);
//             main();
//         });
//     }

//     function departmentTasks(payload) {

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
//         ]).then(({ taskSelected }) => taskSelected())
//     }

//     function departmentMain() {
//         departmentTasks({
//             "Add Department": addDepartment,
//             "View Department": viewDepartment,
//         })
//     }
//     departmentMain();
// }
// module.exports = manageDepartment;