// Function to format document 

function generateMarkdown(answers, url, picture, emailTwo, link) {
  return `
# Title: ${answers.projectTitle}

## Project Description
${answers.description}
## Table of Contents

* [Installation](#Installation)  

* [License](#License) 

* [Tests](#Tests) 

* [Repository-Instructions](#Repository-Instructions) 

* [User-Contributions](#User-Contributions) 

* [Special-Instructions](#Special-Instructions) 

* [Questions](#Questions)  

## Installation
To install necessary dependencies run the following command:

${answers.dependencies}

## License
![Badge](https://img.shields.io/static/v1?label=${answers.license.replace(" ", "%20")}&message=Secure&color=blue)

${answers.license} 

(License Link:  ${link})

## Tests
Run tests with the following command:

${answers.tests}

## Repository-Instructions: 
${answers.userDirections}

## User-Contributions
${answers.userContributions}

## Special-Instructions 
${answers.specialInstructions}

## Questions

If you have any questions please contact : ${answers.owner}, directly at (${emailTwo}), or on github at ${url}

![Profile Picture](${picture})

`;
}

module.exports = generateMarkdown;

// generate read