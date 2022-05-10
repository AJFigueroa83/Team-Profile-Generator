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





function buildTeam() {
    fs.writeFile('dist/myteam.html', render(teamMembers), (err) => {
        if(err) {
            console.log(err);
        }
    })
}

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
