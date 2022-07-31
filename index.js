// // TODO: Include packages needed for this application
    const fs = require('fs');
    const generateMarkdown = require('./generateMarkdown');
    const inquirer = require('inquirer');
// // TODO: Create an array of questions for user input

// WHEN I enter a description, installation instructions,
// usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description,
// Installation, Usage, Contributing, and Tests
const questions = [
    {
        type: 'input',
        message: 'What is your title?',
        name: 'title',
    },
    {
      type: 'input',
      message: 'What is your description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is your installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What ius your usage information',
      name: 'usage',
    },
  ];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();


inquirer
  .prompt(questions)
  .then((response) =>
    writeToFile("README.md", generateMarkdown(response))
);
