const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

function generateHtml() 

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const filename = './dist/index.html';

        // function to write README file
        fs.writeFile(filename, generateHtml(answers), (err) => 
        err ? console.log(err) : console.log("Success!")
        );
    })
}

// Function call to initialize app
init();
