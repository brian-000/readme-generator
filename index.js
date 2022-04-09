// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
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
        choices: ['Apache', 'MIT', 'ISC', 'GNU GPLV2', 'GNU GPLV3'],
        default: false
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
  
        console.log('Page created! Check out README.md in this directory to see it!');
      });
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer
  .prompt(questions);
}

// Function call to initialize app
init()
.then(answers =>{
    const pageReadMe = generateMarkdown(answers)
    writeToFile('./README.md',pageReadMe)
   
});

