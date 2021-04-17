// const inquirer = require('inquirer');

// MANAGE DEPARTMENT TABLE
// function manageDepartment() {
//     console.log("Manage Department!!");
    
//         function addDepartment() {
//             console.log("Add Department!!");

//         main();
//         }
        
//         function viewDepartment() {
//             console.log("View Department!!");

//         main();
//         }
    
//         function updateDepartment() {
//             console.log("Update Department!!");

//         main();
//         }
//         function departmentTasks(payload) {
    
//             const taskNames = Object.keys(payload);
//             const choices = taskNames.map((task) => {
//                 return {
//                     name: task,
//                     value: payload[task],
//                 }
//             })
        
//             inquirer.prompt([
//                 {
//                     name: "taskSelected",
//                     message: "What would you like to do?",
//                     type: "list",
//                     choices: choices,
//                 }
//             ]).then(({taskSelected}) => taskSelected())
//             }
        
//             function departmentMain() {
//                 departmentTasks({
//                     "Add Department": addDepartment,
//                     "View Department": viewDepartment,
//                     "Update Department": updateDepartment,
//                 })        
//             }
//             departmentMain();
// }

// module.exports = manageDepartment;