// Include packages needed for this application
    const fs = require('fs');
    const generateMarkdown = require('./generateMarkdown');
    const inquirer = require('inquirer');
    
// Create an array of questions for user input

// WHEN I enter a description, installation instructions,
// usage information, contribution guidelines, and test instructions
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of the project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What installation instructions would you like to add to your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is your usage information',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What license did you use?',
      choices: ["Apache 2.0", "Boost Software 1.0", "BSD 3-Clause", "BSD 2-Clause", "CC0",],
      name: 'license',
  },
    {
      type: 'input',
      message: 'What is your contribution guidelines',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What is your test instructions',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What is your github?',
      name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
  ];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) =>
    writeToFile("README.md", generateMarkdown(response))
);}

// Function call to initialize app
init();