function createManager(manager) {
    return `
    <div class="card d-flex justify-content-evenly m-5 border border-4 border-info shadow employee-card" style="width: 18rem;">
    <div class="card-header fs-2 bg-success">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-briefcase mr-2"></i>  ${manager.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush p-4">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
  `;
}

function createEngineers(engineers) {
    const markup = engineers.map((engineer) => {
    return `
    <div class="card d-flex justify-content-evenly m-5 border border-4 border-info shadow employee-card" style="width: 18rem;">
    <div class="card-header fs-2 bg-success">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-hammer"></i>  ${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush p-4">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href='https://github.com/${engineer.getGitHub()}' target='_blank' rel='noopener noreferrer'>${engineer.getGitHub()}</a></li>
      </ul>
    </div>
  </div>
  `;
    });
    return markup.join(",");
}

function createInterns(interns) {
    const markup = interns.map((intern) => {
    return `
    <div class="card d-flex justify-content-evenly m-5 border border-4 border-info shadow employee-card" style="width: 18rem;">
    <div class="card-header fs-2 bg-success">
      <h2 class="card-title">${intern.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-graduation-cap"></i>  ${intern.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush p-4">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `;
    });
    return markup.join(",")
}

function generateTeam(teamMembers) {
    return `
        ${createManager(teamMembers.manager)}
        ${createEngineers(teamMembers.engineers)}
        ${createInterns(teamMembers.interns)}
    `;
}

function render(teamMembers) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>Team Profile</title>
</head>
<body>
    <header class="p-5 bg-danger text-white text-center fs-1 fw-bolder" id="header" style="background: linear-gradient(50deg, red, blue)">My Team</header>
    <main class="container">
        <section class="row">
            <section class="team-area col-12 d-flex justify-content-center">
              ${generateTeam(teamMembers)}
            </section>
        </section>
    </main>
</body>
</html>`;
}


module.exports = render;