// Function to format document 

function generateMarkdown(answers, url, picture, emailTwo, link) {
  return `
# Title: ${answers.projectTitle}

## Project Description
${answers.description}
## Table of Contents

* [Installation](#Installation)  

* [Tests](#Tests) 

* [License](#License) 

* [Usage](#Usage) 

* [User-Contributions](#User-Contributions) 

* [Special-Instructions](#Special-Instructions) 

* [Questions](#Questions)  

## Installation
To install necessary dependencies run the following command:
<pre><code>
${answers.dependencies}
</code></pre>


## Tests
Run tests with the following command:
<pre><code>
${answers.tests}
</code></pre>

## License
![Badge](https://img.shields.io/static/v1?label=${answers.license.replace(" ", "%20")}&message=Secure&color=blue)

${answers.license} 

(License Link:  ${link})

## Usage: 
${answers.userDirections}

## User-Contributions
${answers.userContributions}

## Special-Instructions 
${answers.specialInstructions}

## Questions

If you have any questions please contact : ${answers.owner}, directly at (${emailTwo}), or on github at ${url}

<img src = "${picture}" alt = "profile picture" width = "250"/>
`;
}

module.exports = generateMarkdown;
