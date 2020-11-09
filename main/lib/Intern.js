// linking required js file

const Employee = require('./Employee');
 
// creating new class constructor
class Intern extends Employee {
    constructor(name, id, email, school){
        // inheriting methods
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern