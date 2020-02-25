// const fs = require('fs')
var markDown = require("./utils/generateMarkdown")

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() { // what is this supposed to do?

// }

// init();
// markDown.generateMarkdown()


// require two utils 

var inquirer = require("inquirer");
inquirer
    .prompt([
        {
            type: "input",                              // Types message name order doesn't matter 
            message: "What is your github user name?",
            name: "githubUserName"// this is the variable 
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
        
    ]).then (function(answers){
    console.log("TCL: answers", answers)
    markDown.generateMarkdown()
        //call function , how do i link function ?
 
    //     fs.appendFile("Portfolio.md", JSON.stringify(answers, null, 2), function (err) {
    //          if (err) {
    //           console.log("There was an error")
    //         } else {
    //           console.log('Readme generated')
            
            
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
