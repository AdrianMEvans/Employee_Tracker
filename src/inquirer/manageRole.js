// const inquirer = require('inquirer');

// // MANAGE ROLE TABLE
// function manageRole() {
//     console.log("Manage Company Roles");

//     function addRole() {
//         console.log("\nAdd a new role\n");
//         inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     name: "title",
//                     message: "What shall the role be called?"
//                 },
//                 {
//                     type: "input",
//                     name: "salary",
//                     message: "Enter Role Salary",
//                 },
//                 {
//                     type: "input",
//                     name: "department_id",
//                     message: "Enter Department ID of Role?",
//                 },
//             ]).then((res) => {
//                 let query = `INSERT INTO role SET ?`;
//                 connection.query(query, {
//                     title: res.title,
//                     salary: res.salary,
//                     department_id: res.department_id,
//                 }, (err, res) => {
//                     if (err) throw err;
//                     main();
//                 });
//             });
//     }

//     function viewRole() {
//         let query =
//             `SELECT 
//                 r.id, 
//                 r.title,
//                 r.salary
//             FROM role r`

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
//             "Add Role": addRole,
//             "View Roles": viewRole,
//         })
//     }
//     departmentMain();
// }

// module.exports = manageRole;