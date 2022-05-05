const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = require()

// array of question for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: ''

    }
]

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const filename = './dist/index.html';

        // TODO: Create a function to write README file
        fs.writeFile(filename, generateHtml(answers), (err) => 
        err ? console.log(err) : console.log("Success!")
        );
    })
}

// Function call to initialize app
init();
