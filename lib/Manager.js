const Employee = require('./Employee');


 //  manager child constructor

 class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

         // calling employee with super keyword

         super(name, id, email);

         this.officeNumber = officeNumber;

    }
    // override superclass with subclass

    getRole() {
        return "Manager";
    }

 }

 module.exports = Manager;