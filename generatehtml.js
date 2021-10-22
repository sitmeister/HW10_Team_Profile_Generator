const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="card bg-dark m-3" style="width: 18rem;">
        <div class="card-header bg-primary">
            <h2 class="card-title text-white">${manager.getName()}</h2>
            <h3 class="card-title text-white"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item bg-dark text-white">ID: ${manager.getId()}</li>
                <li class="list-group-item bg-dark text-white">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item bg-dark text-white">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card bg-dark m-3" style="width: 18rem;">
    <div class="card-header bg-primary">
        <h2 class="card-title text-white">${engineer.getName()}</h2>
        <h3 class="card-title text-white"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item bg-dark text-white">ID: ${engineer.getId()}</li>
            <li class="list-group-item bg-dark text-white">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item bg-dark text-white">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card bg-dark m-3" style="width: 18rem;">
    <div class="card-header bg-primary">
        <h2 class="card-title text-white">${intern.getName()}</h2>
        <h3 class="card-title text-white"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item bg-dark text-white">ID: ${intern.getId()}</li>
            <li class="list-group-item bg-dark text-white">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item bg-dark text-white">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <title>Your Team!</title>
</head>
  <body>
    <header>
        <div class = "jumbotron bg-primary text-center text-white">
            <h1><i class="bi bi-people-fill"></i> Your Team <i class="bi bi-people-fill"></i></h1>
        </div>
    </header>    
        <content class="container d-flex flex-wrap align-items-center justify-content-center">
            ${generateTeam(team)}
  </body>
</html>
    `
};




