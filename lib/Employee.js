//Employee parent class/constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // name 

    getName () {
        return this.name;
    }

    // id 

    getId () {
        return this.id;

    }

    //  email

    getEmail () {

        return this.email;
    }




};

module.exports = Employee;