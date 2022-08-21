const HtmlFile = require('.src/HtmlFile');


const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');



inquirer.prompt([
    {
        type: 'list',
        name: "whoNext",
        message: "what is this?",
        choices: ['Manager', 'Intern', 'Engineer']
    }
]).then(ans => {
    if(ans.whoNext === 'Manager'){
        // ManagerQuestions()
    }else if (ans.whoNext === 'Intern'){
        // InternQuestions()
    } else {
        // EngineerQuestions
    }
})

// Managerquestions()
{

}