const inquirer = require('inquirer');
const fs = require('fs');
const render = require('./src/template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = {
    manager: null,
    engineers: [],
    interns: [],
};

const idArray = [];

function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter manager name";
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter employee ID #',
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return "Please enter number greater than 0";
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter the manager's email",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return 'Please enter valid email';
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Enter the manager's office number",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return 'Please enter a number greater than 0';
            }
        },
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber
        );
        teamMembers.manager = manager;
        idArray.push(answers.managerId);
        createTeam();
    })
}

function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want ot add any other"],
        },
    ])
    .then((answers) => {
        switch (answers.choice) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return 'Please enter a name';
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input employee id',
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    if (idArray.includes(answer)) {
                        return 'This id is already taken';
                    } else {
                        return true;
                    }
                }
                return 'Please enter a number greater than 0'
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address',
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return 'Please enter valid email';
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter github username',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter username';
            }
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        teamMembers.engineers.push(engineer);
        idArray.push(answers.id);
        createTeam();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return 'Please enter a name';
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input employee id',
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    if (idArray.includes(answer)) {
                        return 'This id is already taken';
                    } else {
                        return true;
                    }
                }
                return 'Please enter a number greater than 0'
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address',
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return 'Please enter valid email';
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter school name',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter school name';
            }
        }
    ])
    .then((answers) => {
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
        );
        teamMembers.interns.push(intern);
        idArray.push(answers.id);
        createTeam();
    })
}


function buildTeam() {
    fs.writeFile('dist/myteam.html', render(teamMembers), (err) => {
        if(err) {
            console.log(err);
        }
    })
}

createManager();

// function to initialize app
// function init() {
//     inquirer.prompt(questions)
//     .then((answers) => {
//         const filename = './dist/index.html';

//         // function to write README file
//         fs.writeFile(filename, generateHtml(answers), (err) => 
//         err ? console.log(err) : console.log("Success!")
//         );
//     })
// }

// Function call to initialize app
// init();
