const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

// generate html
function generateHtml(teamMember) {

  return `

  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team profiles</title>
</head>
<body>
    <div>
        <header><h1>Team profiles</h1></header>
     </div>
<div>
    <div><h2>Team Members</h2></div>
    <div>
        <h3>Manager</h3>
        <ul>
            <li>${teamMember.Manager.getName()}</li>
            <li>${teamMember.Manager.getId()}</li>
            <li>${teamMember.Manager.getEmail()}</li>            
            <li>${teamMember.Manager.getOfficeNumber()}</li>
        </ul>
    </div>
    <div>
        <h3>Engineer</h3>
        <ul>
            <li>${teamMember.Engineer.getName()}</li>
            <li>${teamMember.Engineer.getId()}</li>
            <li>${teamMember.Engineer.getEmail()}</li>
            <li>${teamMember.Engineer.getGitHub()}</li>
        </ul>
        <h3>Intern</h3>
        <ul>
            <li>${teamMember.Intern.getName()}</li>
            <li>${teamMember.Intern.getId()}/li>
            <li>${teamMember.Intern.getEmail()}</li>
            <li>${teamMember.Intern.getSchool()}</li>
        </ul>
    </div>
</div>
</body>
</html>

`;
}

module.exports = generateHtml;
