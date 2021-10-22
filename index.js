const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const employeeInfo = [];
const generateTeam = require('./generatehtml')

//questions to start with a general employee and then chooses their role
const employeeQuestions = 
  [
    {
      type: 'input',
      name: 'name',
      message: "What is the Employee's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the Employee's ID number?",
    },
    {
      type: 'input',
      name: 'email',
      message: "what is the Employee's email?",
    },
    {
      type: 'list',
      name: 'role',
      message: 'What role is the employee?',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
      type: 'input',
      name: 'office',
      message: "What is the manager's office number",
      when: (data) => data.role === "Manager",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's github?",
      when: (data) => data.role === "Engineer",
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school is the intern attending?',
      when: (data) => data.role === "Intern",
    },
    {
      type: 'list',
      name: 'peon',
      message: 'Do you have another employee to add?',
      choices: ['Yes', 'No'],
    }
  ]
// prompts questions in node using inquirer
function init() {
  inquirer.prompt(employeeQuestions)
  .then((data) => {
    pushInfo(data);
    if (data.peon === "Yes") {
      init();
    } else {
      writeToFile("./output/team.html", generateTeam(employeeInfo))
    }
  })
}
init();
// console.log(data)
function pushInfo(data) {
  if (data.role === "Manager") {
    employeeInfo.push(new Manager(data.name, data.id, data.email, data.office))
  } else if (data.role === "Engineer") {
    employeeInfo.push(new Engineer(data.name, data.id, data.email, data.github))
  } else {
    employeeInfo.push(new Intern(data.name, data.id, data.email, data.school))
  }
  // console.log(employeeInfo)
};

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Successfully created your Team page!')
)
};