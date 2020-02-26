// Function to format document 

function generateMarkdown(answers,url, picture, email, link) {
return `
## Title
${answers.projectTitle}

## Project Description
${answers.description}

## Table of Contents

## License
${answers.license} (License Link ${link})

## Dependencies
Install dependencies with : ${answers.dependencies}

## Tests
These tests should be run: ${answers.tests}

## Repository Instructions:
${answers.userDirections}

## User Contributions
${answers.userContributions}

## Questions


User Picture ${url}

${picture}

user email: ${email} 
`;
}

module.exports = generateMarkdown;

// generate read