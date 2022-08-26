

const htmlGenerator = team => {

    function generateCards () {
        for(let i = 0; i < team.length; i++ ){ console.log(team[i])
            if (team[i].getRole() === 'Manager') {
                managerGenerator(team[i]); console.log(team[i])
            }
            else if(team[i].getRole() === 'Engineer') {
                engineerGenerator(team[i]);console.log(team[i])
            
            }
            else if(team[i].getRole() === 'Intern') {
                internGenerator(team[i]);
            
            }
        }

    }


const teamArray = [];



    // engineer html
    
    const engineerGenerator = engineer => {

        const eng1 = `
    
        <div class="col-4 mt-4 card">
            <div class="card-header bg-primary text-green">
                <h2 class="card-name">Name:${engineer.getName()}</h2>
                <h3>Engineer</h3>
            </div>
    
            <div class="card-body">
                <ul class="empItems">
                <li class="empId">ID: ${engineer.getId()}</li>
                <li class="empEmail">Email: <a href="mailto:">${engineer.getEmail()}</a> </li>
                <li class="empNum">Github: ${engineer.getGithub()}</li>
                </ul>
    
            </div>
        </div>
        `;
     teamArray.push(eng1);
    };
    


    
    
    // engineer html
    
    const internGenerator = intern => {
    
         const intern1 = `
    
        <div class="col-4 mt-4 card">
            <div class="card-header bg-primary text-green">
                <h2 class="card-name">Name:${intern.getName()}</h2>
                <h3>Intern</h3>
            </div>
    
            <div class="card-body">
                <ul class="empItems">
                <li class="empId">ID:${intern.getId()}</li>
                <li class="empEmail">Email: <a href="mailto:">${intern.getEmail()}</a> </li>
                <li class="empNum">School: ${intern.getSchool()}</li>
                </ul>
    
            </div>
        </div>

        `;
    teamArray.push(intern1);
    };
  
    
    
    
    
    
    
    //manager html
    
    const managerGenerator = manager => {
    
    const manager1 = `
    <div class="col-4 mt-4 card">
        <div class="card-header bg-primary text-green">
            <h2 class="card-name">Name:${manager.getName()}</h2>
            <h3>Manager</h3>
        </div>
    
        <div class="card-body">
            <ul class="empItems">
            <li class="empId">ID:${manager.getId()}</li>
            <li class="empEmail">Email: <a href="mailto:">${manager.getEmail()}</a> </li>
            <li class="empNum">Office: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
      
    </div>
        `;
teamArray.push(manager1);
    };

generateCards();

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="headerBox">
            <h1 class="headerText">My team</h1>
        </header>
        <div class="container">
            <div class="row justify-content-center">
                
                ${teamArray.join(" ")}
            </div>
        </div>
    </body>
    </html>

        `;
    



    
};




module.exports = htmlGenerator;
    
    
    
    
 
    