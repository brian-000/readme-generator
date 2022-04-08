// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
//Description, Table of Contents, Installation, Usage, License, Contributing, 
//Tests, and Questions
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a Description:'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Enter a table of contents:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation process:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter a usage:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose your license:',
        choices: ['Apache', 'MIT', 'ISC', 'GNU GPLV2', 'GNU GPLV3', 'None']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any tests:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email:'
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer
  .prompt(questions);
}

// Function call to initialize app
init()
.then(answers =>{
    const pageHTML = generateMarkdown(answers)

      fs.writeFile('./README.md', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    });
});

