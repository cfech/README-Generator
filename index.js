// Required packages
const fs = require('fs')
var markDown = require("./utils/generateMarkdown")
var api = require("./utils/api.js")

//Declared variables 
var link

//Questions for user 
const questions = [
    {
        type: "input",                            
        message: "What is your github user name?",
        name: "userName"
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

//Runs inquirer call
var inquirer = require("inquirer");
inquirer
    .prompt(questions)

    //prompts questions then send api call 
    .then(function (answers) {
        console.log("TCL: answers", answers)
        var username = answers.userName
        api.getUser(username)

        // api call then write document 
            .then(function (githubData) {
                console.log(githubData)
                var url = githubData.data.url
                var picture = githubData.data.avatar_url
                var email = githubData.data.email
                console.log(url)
                console.log(picture)
                console.log(email)

                //if statement to set license link
                if (questions.license === "MIT") {
                    link = "https://choosealicense.com/licenses/mit/"
                } else if (questions.license === "Apache 2.0") {
                    link = 'https://choosealicense.com/licenses/apache-2.0/'
                } else if (questions.license === "GPL 3.0") {
                    link = "https://choosealicense.com/licenses/gpl-3.0/"
                } else if (questions.license === "Bsd 3") {
                    link = "https://opensource.org/licenses/BSD-3-Clause"
                }

                //calling markdown function to format document
                var title = markDown(answers, url, picture, email, link)
                
                // Writing the document 
                fs.writeFile("NotREADME.md", (title), function (err) {
                    if (err) {
                        console.log("There was an error")
                    } else {
                        console.log('Readme generated')
                    }
                })
            })
    })
