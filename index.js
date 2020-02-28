// Required packages
const fs = require('fs')
var markDown = require("./utils/generateMarkdown")
var api = require("./utils/api.js")

//Declared variables 
var link
var emailTwo

//Questions for user 
const questions = [
    {
        type: "input",
        message: "Who is creating this README.md?",
        name: "owner",
        default: "First Last"

    },
    {
        type: "input",
        message: "What is your github user name?",
        name: "userName",
        default: "cfech"

    },
    {
        type: "input",
        message: "What is your project name?",
        name: "projectTitle",
        default: "Project 1"
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
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3"]
    },
    {
        type: "input",
        message: "How do you want to install dependencies?",
        name: "dependencies",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What does the user need to know about using this repo?",
        name: "userDirections",
        default: "N/A"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to this repo?",
        name: "userContributions",
        default: "N/A"
    },
    {
        type: "input",
        message: "Are there any other special instructions you wish to give to the user?",
        name: "specialInstructions",
        default: "N/A"
    },
];

//Runs inquirer package
var inquirer = require("inquirer");
inquirer
    .prompt(questions)

    //prompts questions then send api call 
    .then(function (answers) {
        var username = answers.userName
        api.getUser(username)

            // api call then write document 
            .then(function (githubData) {
                var url = githubData.data.html_url
                var picture = githubData.data.avatar_url
                var email = githubData.data.email
 console.log(githubData)
                // if statement for email 
                if (email === null) {
                    emailTwo = "Email not available from api"
                } else {
                    emailTwo = email
                }

                //if statement to set license link
                if (answers.license === "MIT") {
                    link = "https://choosealicense.com/licenses/mit/"
                } else if (answers.license === "Apache 2.0") {
                    link = 'https://choosealicense.com/licenses/apache-2.0/'
                } else if (answers.license === "GPL 3.0") {
                    link = "https://choosealicense.com/licenses/gpl-3.0/"
                } else if (answers.license === "BSD 3") {
                    link = "https://opensource.org/licenses/BSD-3-Clause"
                }

                //calling markdown function to format document
                var title = markDown(answers, url, picture, emailTwo, link)

                // Writing the document 
                fs.writeFile("exampleReadMe.md", (title), function (err) {
                    if (err) {
                        console.log("There was an error")
                    } else {
                        console.log('Readme generated')
                    }
                })
            })
    })
