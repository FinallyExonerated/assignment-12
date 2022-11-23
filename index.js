const inquirer = require('inquirer');
const db = require('./db/connection');
const { findAllEmployees, findAllRoles, findAllDepartments} = require('./db/index');

// MAKE INQUIRER PROMPT FOR TERMINAL SCREENs WHEN FINISHED RUN NODE INDEX.JS

 function init() {
    inquirer
    .prompt(
        [
            {
                type: "list",
                name: "choice",
                message: "What selection would you like to make?",
                choices: ["VIEW ALL EMPLOYEES", "VIEW ALL DEPARTMENTS", "VIEW ALL ROLES"]
            }
        ]
    )
    .then((answers) => {
        console.log(answers.choice)
        if(answers.choice === "VIEW ALL EMPLOYEES") {
            findAllEmployees();
            init();
            // run find all employees
        }
        if(answers.choice === "VIEW ALL DEPARTMENTS") {
            findAllDepartments();
            init();
        }
        if(answers.choice === "VIEW ALL ROLES") {
            findAllRoles();
            init();
        }
    })
};
// BELOW YOUR PROMPTS, YOU WILL HAVE FUNCTIONS TO RUN YOUR DB/INDEX.J
init();