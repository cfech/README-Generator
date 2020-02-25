const fs = require('fs')

function generateMarkdown(answers) {
  fs.appendFile("Portfolio.md", JSON.stringify(answers, null, 2), function (err) {
    if (err) {
      console.log("There was an error")
    } else {
      console.log('Readme generated')
    }
  
  
  
// //   return `
// // # ${data.title}

// // `;
})
}

module.exports = generateMarkdown();

// generate read