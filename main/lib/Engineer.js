// linking required js files
const Employee = require('./Employee');

// creating new class constructor
class Engineer extends Employee {
    constructor(name, id, email, github){
        // inheriting methods. 
        super(name, id, email);
        this.github = github
    }

    getRole() {
        return "Engineer";
    }

    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer;