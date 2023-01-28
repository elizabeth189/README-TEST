// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type:'input',
    name: 'Title',
    message: 'What is your project title?'
},
{
  type: 'input',
  name: 'Description',
  message: 'Please provide a description of your project.'
},
{
  type:'input',
  name: 'Installation',
  message: 'What are the steps required to install your project?',
},
{
  type: 'input',
  name: 'Usage',
  message: 'Provide instructions and examples for use.',
},
{
  type: 'list',
  name: 'License',
  message: 'Which license did you use?',
  choices: ['MIT', 'APACHE', 'GPL', 'None']
//Used https://gist.gitahub.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633 to refer to license options
},
{
  type: 'input',
  name: 'Contributions',
  message: 'List your collaborators, if any, with links to their GitHub profiles. Input your own github link.',
},
{
  type: 'input',
  name: 'Tests',
  message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const filename = `README.md`;
  //const filename = data.Title + ".md";
  console.log(data)
  fs.writeFile(
    filename, 
    data, 
    (err) =>
    err ? console.log(err) : console.log('Generating README...')
);
}

// TODO: Create a function to initialize app
function init() {
 inquirer.prompt(questions)
 .then((data) => {
  //writeToFile(data.Title, generateMarkdown(data));
  writeToFile('README.md', generateMarkdown(data));
  console.log(data);
 });
 
}

// Function call to initialize app
init();

