

function generateMarkdown(answers,url) {




return `
## Title
${answers.projectTitle}

## Project Description
${answers.description}

## Table of Contents

## License
${answers.license}(link)

## Dependencies
Install dependencies with : ${answers.dependencies}

## Tests
These tests should be run: ${answers.tests}

## Repository Instructions:
${answers.userDirections}

## User Contributions
${answers.userContributions}

## Questions
${url}

`;
}
// }

module.exports = generateMarkdown;

// generate read