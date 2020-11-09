
// linking all the required javascript files
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const  generateHtml = require('./generateHtml');
const inquirer = require('inquirer')
const fs = require('fs');

const teamMembers = [];

// function to write html file
const createHtml = teamMembers => {
fs.writeFileSync('./develop/dist/Profile.html', generateHtml(teamMembers))

}


// function call to initialize program


const init = () => {
  inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: `What is your Manager's name? (Required)`,
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log(`Please enter your manager's name.`);
                  return false;
                }
              }
           },
           {
            type: 'input',
            name: 'managerId',
            message: `What is your Manager's Id? (Required)`,
            validate: IdInput => {
                if (IdInput) {
                  return true;
                } else {
                  console.log(`Please enter your manager's Id.`);
                  return false;
                }
              }
           },
           {
            type: 'input',
            name: 'managerEmail',
            message: `What is your Manager's Email? (Required)`,
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log(`Please enter your manager's Email.`);
                  return false;
                }
              }
           },  
           {
            type: 'input',
            name: 'managerOfficeNumber',
            message: `What is your Manager's Office Number? (Required)`,
            validate: officeNumberInput => {
                if (officeNumberInput) {
                  return true;
                } else {
                  console.log(`Please enter your manager's Office Number.`);
                  return false;
                }
              }
           },                
    ])
    .then(answers => {
        console.log("==============")
        console.log(answers)
        console.log("==============")
        const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber ) 
        teamMembers.push(manager);
        engineer()
    });
 };
 const engineer = () => {
  inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: `What is your engineer's name? (Required)`,
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log(`Please enter your engineer's name.`);
                  return false;
                }
              }
           },
           {
            type: 'input',
            name: 'engineerId',
            message: `What is your engineer's Id? (Required)`,
            validate: IdInput => {
                if (IdInput) {
                  return true;
                } else {
                  console.log(`Please enter your engineer's Id.`);
                  return false;
                }
              }
           },
           {
            type: 'input',
            name: 'engineerEmail',
            message: `What is your engineer's Email? (Required)`,
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log(`Please enter your engineer's Email.`);
                  return false;
                }
              }
           },  
           {
            type: 'input',
            name: 'engineerGithub',
            message: `What is your engineer's GitHub? (Required)`,
            validate: gitHubInput => {
                if (gitHubrInput) {
                  return true;
                } else {
                  console.log(`Please enter your engineer's Git.`);
                  return false;
                }
              }
           },                
    ])
    .then(answers => {
        console.log("==============")
        console.log(answers)
        console.log("==============")
        const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerOfficeNumber ) 
        teamMembers.push(engineer);
        intern()
    });
 };
 const intern = () => {
  inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: `What is your intern's name? (Required)`,
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log(`Please enter your intern's name.`);
                  return false;
                }
              }
           },
           {
            type: 'input',
            name: 'internId',
            message: `What is your intern's Id? (Required)`,
            validate: IdInput => {
                if (IdInput) {
                  return true;
                } else {
                  console.log(`Please enter your intern's Id.`);
                  return false;
                }
              }
           },
           {
            type: 'input',
            name: 'internEmail',
            message: `What is your intern's Email? (Required)`,
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log(`Please enter your intern's Email.`);
                  return false;
                }
              }
           },  
           {
            type: 'input',
            name: 'internGithub',
            message: `What is your intern's GitHub? (Required)`,
            validate: gitHubInput => {
                if (gitHubrInput) {
                  return true;
                } else {
                  console.log(`Please enter your intern's Git.`);
                  return false;
                }
              }
           },                
    ])
    .then(answers => {
        console.log("==============")
        console.log(answers)
        console.log("==============")
        const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internOfficeNumber ) 
        teamMembers.push(intern);
        createHtml()
    });
 };

 

init()
