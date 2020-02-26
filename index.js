const fs = require('fs')
var markDown = require("./utils/generateMarkdown")

const questions = [
    
        {
            type: "input",                              // Types message name order doesn't matter 
            message: "What is your github user name?",
            name: "userName"// this is the variable 
        },
        {
            type: "input",
            message: "What is your project name?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Write a brief description of your project",
            name: "description"
        },
        {
            type: "list",
            message: "What type of license would you like?",
            name: "license",
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "Bsd 3"]
        },
        {
            type: "input",
            message: "How do you want to install dependencies?",
            name: "dependencies"
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "tests"
        },
        {
            type: "input",
            message: "What does the user need to know about using this repo?",
            name: "userDirections"
        }, {
            type: "input",
            message: "What does the user need to know about contributing to this repo?",
            name: "userContributions"
        },

    
];

// function writeToFile(fileName, data) { // what is this supposed to do ?
// }

// function init() { // what is this supposed to do?

// }

// init();
// markDown.generateMarkdown()


// require two utils 

var inquirer = require("inquirer");
inquirer
    .prompt(questions)
    .then(function (answers) {
        console.log("TCL: answers", answers)
        var title = markDown(answers) // not respecting .then
        console.log(title)
        fs.writeFile("NotREADME.md", (title), function (err) {
            if (err) {
                console.log("There was an error")
            } else {
                console.log('Readme generated')
            }

        })

            //         return `
            //         # ${answers.projectTitle}
            //         #${answers.description}
            //         #${answers.license}
            //         #${answers.dependencies}
            //         #${answers.tests}
            //         #${answers.userDirections}
            //         #${answers.userContributions}

            //         `;
            //         }


            // })
        })
