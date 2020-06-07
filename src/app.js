const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const managerQuestions = [
        {
            type: "list",
            name: "jobRole",
            message: "Confirm add team manager",
            choices: [
                'Manager'
              ],
        },
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter manager name',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        },  
        {
            type: 'input',
            name: 'managerId',
            message: 'enter manager ID number',
        }, 
        {
            type: 'input',
            name: 'managerEmail',
            message: 'enter manager email',
        }, 
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'enter manager office number',
        }, 

        // {
        //     type: 'input',
        //     name: 'age',
        //     message: 'How old is he?',
        //     validate: function (value) {
        //         var digitsOnly = /\d+/;
        //         if (digitsOnly.test(value)) { return true; }
        //         return 'Invalid age! Must be a number genius!';
        //     }
        // }

]
const addTeamQuestions = [
    {
        type: "confirm",
        name: "addTeam",
        message: "Would you like to add a another team member?",
        default: true,
      },
    {
        type: 'list',
        name: 'jobTitle',
        message: 'what team member information would you like to add?',
        choices: [
          'Engineer', 'Intern',
        ],
        when: (answers) => {
            return answers.addTeam === true;
          },
        },
    // {
    //     name: "school",
    //     message: "enter intern's school name",
    //     type: "input",
    // },
    // {
    //     name: "github",
    //     message: "enter engineer's github username",
    //     type: "input",
    // },
    // {
    //     name: "office",
    //     message: "enter managers office number",
    //     type: "input",
    // },
]

const engineerQuestions = [
    {
        type: "list",
        name: "jobRole",
        message: "Confirm add team engineer",
        choices: [
            'Engineer'
          ],
    },
    {
        type: 'input',
        name: 'engineerName',
        message: 'Enter engineer\'s name',
        validate: function (value) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
        }
    },  
    {
        type: 'input',
        name: 'engineerId',
        message: 'enter Engineer ID number',
    }, 
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'enter engineer email address',
    }, 
    {
        type: 'input',
        name: 'username',
        message: 'enter engineer\'s github username',
    }, 
]
const internQuestions = [
    {
        type: "list",
        name: "jobRole",
        message: "Confirm add team engineer",
        choices: [
            'Intern'
          ],
    },
    {
        type: 'input',
        name: 'internName',
        message: 'Enter intern\'s name',
        validate: function (value) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
        }
    },  
    {
        type: 'input',
        name: 'internId',
        message: 'enter intern ID number',
    }, 
    {
        type: 'input',
        name: 'internEmail',
        message: 'enter intern\'s email address',
    }, 
    {
        type: 'input',
        name: 'school',
        message: 'enter intern\'s school name',
    }, 
]

const answersTeamInfo = []

function createEngineer() {
    inquirer.prompt(engineerQuestions).then(
        answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.username);
            answersTeamInfo.push(engineer);
            createTeam();
            
          }
    )
}
function createIntern() {
    inquirer.prompt(internQuestions).then(
        answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
            answersTeamInfo.push(intern);
            createTeam();
            
          }
    )
}

function createTeam() {
    inquirer.prompt(addTeamQuestions).then(answers => {
        if (answers.jobTitle == "Engineer") {
            createEngineer()
        }
        else if(answers.jobTitle == "Intern") {
            createIntern()
        } 
        else if(answers.addTeam == false) {
            fs.writeFileSync(outputPath, render(answersTeamInfo), "utf-8")
            // console.log(answersTeamInfo)
        }
        
    })
}


inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer.prompt(managerQuestions).then(
    answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        answersTeamInfo.push(manager);
        createTeam();
        
      }
);

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
