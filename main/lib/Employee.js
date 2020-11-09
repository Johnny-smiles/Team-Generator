// creating class constructor to be the main basis for the three 
// employee types

class Employee {
    constructor(name, id, email){
        // properties of employee object
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // method added for accessing name
    getName() {
        return this.name;
    }
    // method added for accessing id
    getId() {
        return this.id;
    }
    // method added for accessing email
    getEmail() {
        return this.email
    }
}

module.exports = Employee;