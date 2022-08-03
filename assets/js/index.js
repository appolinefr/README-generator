
//  array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of your project",
    name: "descritpion",
  },
  {
    type: "input",
    message: "Input your installation instructions",
    name: "instructions",
  },
  {
    type: "input",
    message: "What will the project be used for?",
    name: "usage",
  },
  {
    type: "input",
    message: "Input your contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "Input your test instructions",
    name: "test",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "checkbox",
    message: "Which licence would you like to add?",
    name: "licence",
    choices: [
      "Apache License v2.0",
      "GNU General Public License v3.0",
      "MIT License",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
