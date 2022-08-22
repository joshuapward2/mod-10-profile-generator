const HtmlFile = require('.src/HtmlFile');


const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const { finished } = require('stream');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');



const employeeArray = [];


function runPrompts() {

    function createManager() {

        inquirer.prompt([

            {
                type:"input",
                name: "managerName",
                message: "Whats your team managers name?",
                validate: Input => {
                    if(Input) {
                        return true;
                    } else {
                        console.log("Please enter your managers name.")
                        return false;
                    }
                }
            },

            {
                type: "input",
                name: "managerId",
                message: "Please enter the managers employee ID",
                validate: input => {
                    if(input){
                        return true;
                    }
                    else {
                        console.log("Please enter the employees Id number. ")
                        return false;
                    }
                }
            },

            {
                type:"input",
                name: "managerEmail",
                message: "Please enter the employees email address.",
                validate: input => {
                    if(input) {
                        return true;
                    }
                    else{
                        console.log("Please enter the employees email address.")
                        return false;
                    }
                }
            },

            {
                type:"input",
                name:"managerOfficeNumber",
                message: "Please enter the employees office number",
                validate: input => {
                    if(input) {
                        return true;
                    }
                    else{
                        console.log("please enter an employee office number")
                        return false;

                    }
                }
            }

        ]).then(answers => {
            const managerAnswers = ( answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber );
            employeeArray.push(managerAnswers);
            addEmployee(); 

        });

    }

    function addEmployee () {

        inquirer.prompt([
                {
                      type: 'list',
                       name: "whoNext",
                       message: "Would you like to add an employee or intern?",
                       choices: ['Intern', 'Engineer', "No, im finished"]
                   }
               ]).then(ans => {
                   if(ans.whoNext === 'Intern'){
                       internQuestions()
                   }
                   else if(ans.whoNext === 'Engineer'){
                        engineerQuestions()
                   }

                   else {
                        finished()
                   } 
                       
                   
               })

        
    }
    function internQuestions () {

        inquirer.prompt([

            {
                type:"input",
                name: "internName",
                message: "Whats your interns name?",
                validate: Input => {
                    if(Input) {
                        return true;
                    } else {
                        console.log("Please enter your interns name.")
                        return false;
                    }
                }
            },

            {
                type: "input",
                name: "internId",
                message: "Please enter the interns employee ID",
                validate: input => {
                    if(input){
                        return true;
                    }
                    else {
                        console.log("Please enter the interns Id number. ")
                        return false;
                    }
                }
            },

            {
                type:"input",
                name: "internEmail",
                message: "Please enter the interns email address.",
                validate: input => {
                    if(input) {
                        return true;
                    }
                    else{
                        console.log("Please enter the interns email address.")
                        return false;
                    }
                }
            },

            {
                type:"input",
                name:"internSchool",
                message: "What school did your intern attend?",
                validate: input => {
                    if(input) {
                        return true;
                    }
                    else{
                        console.log("please enter a school")
                        return false;

                    }
                }
            }

        ]).then(answers => {
            const internAnswers = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            employeeArray.push(internAnswers);
            addEmployee();
        })       
   
}
function internQuestions () {

    inquirer.prompt([

        {
            type:"input",
            name: "engineersName",
            message: "Whats your engineers name?",
            validate: Input => {
                if(Input) {
                    return true;
                } else {
                    console.log("Please enter your interns name.")
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "engineersId",
            message: "Please enter the engineers employee ID",
            validate: input => {
                if(input){
                    return true;
                }
                else {
                    console.log("Please enter the engineers Id number. ")
                    return false;
                }
            }
        },

        {
            type:"input",
            name: "engineersEmail",
            message: "Please enter the interns email address.",
            validate: input => {
                if(input) {
                    return true;
                }
                else{
                    console.log("Please enter the Engineers email address.")
                    return false;
                }
            }
        },

        {
            type:"input",
            name:"engineersGithub",
            message: "What is your employees github?",
            validate: input => {
                if(input) {
                    return true;
                }
                else{
                    console.log("please enter an account")
                    return false;

                }
            }
        }

    ]).then(answers => {
        const engineersAnswers = new Engineer(answers.engineersName, answers.engineersId, answers.engineersEmail, answers.engineersGithub);
        employeeArray.push(engineersAnswers);
        addEmployee();
    })

}
}








// inquirer.prompt([
//     {
//         type: 'list',
//         name: "whoNext",
//         message: "what is this?",
//         choices: ['Manager', 'Intern', 'Engineer']
//     }
// ]).then(ans => {
//     if(ans.whoNext === 'Manager'){
//         // ManagerQuestions()
//     }else if (ans.whoNext === 'Intern'){
//         // InternQuestions()
//     } else {
//         // EngineerQuestions
//     }
// })

// // Managerquestions()
// {

// 