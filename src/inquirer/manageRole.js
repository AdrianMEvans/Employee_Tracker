const inquirer = require('inquirer');

// MANAGE ROLE TABLE
function manageRole() {
    console.log("Manage Roles!!");
    function addRole() {
        console.log("Add Role!!");

        main();
    }
    
    function viewRole() {
        console.log("View Role!!");

        main();
    }

    function updateRole() {
        console.log("Update Role!!");

        main();
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

module.exports = manageRole;