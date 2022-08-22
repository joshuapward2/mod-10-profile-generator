const HtmlFile = require('.src/HtmlFile');


const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');

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
            runPrompts(); 

        });
        
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

// }