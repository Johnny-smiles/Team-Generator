
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
            <li>${teamMember.manager.getName()}</li>
            <li>${teamMember.manager.getId()}</li>
            <li>${teamMember.manager.getEmail()}</li>            
            <li>${teamMember.manager.getOfficeNumber()}</li>
        </ul>
    </div>
    <div>
        <h3>Engineer</h3>
        <ul>
            <li>${teamMember.engineer.getName()}</li>
            <li>${teamMember.engineer.getId()}</li>
            <li>${teamMember.engineer.getEmail()}</li>
            <li>${teamMember.engineer.getGitHub()}</li>
        </ul>
        <h3>Intern</h3>
        <ul>
            <li>${teamMember.intern.getName()}</li>
            <li>${teamMember.intern.getId()}/li>
            <li>${teamMember.intern.getEmail()}</li>
            <li>${teamMember.intern.getSchool()}</li>
        </ul>
    </div>
</div>
</body>
</html>

`;
}

module.exports = generateHtml;
