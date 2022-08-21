const Employee = require('./Employee');

// engineer child constructor

class Engineer extends Employee {
    constructor (name, id, email, github) {

        // calling employee with super keyword

        super (name,id, email);

        this.github = github;

    }
    // github

    getGithub () {
        return this.github;
    }

    // override superclass with subclass

    getRole () {
        return "Engineer";
    }


}

module.exports = Engineer;