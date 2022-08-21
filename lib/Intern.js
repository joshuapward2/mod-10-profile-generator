const Employee = require('./Employee');

// intern child constructor

class Intern extends Employee {

    constructor (name, id, email, school) {

        // calling employee with super keyword
        super (name, id, email);

            this.school = school;

        }

    

        getSchool() {
            return this.school;
        }

        // override superclass with subclass

        getRole() {
            return "Intern"
        }

    }


    module.exports = Intern;



