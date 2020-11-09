//linking required js
const Employee = require('./Employee')

//creating new constructor function 
class Manager extends Employee {    
    constructor(name, id, email, officeNumber){
        // inheriting methods 
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;