function todo(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    };
}

function project(name) {
    let todos = [];

    return {
        name: name,
        todos
    };
}

function createProject(name) {
    const newProject = project(name);
    projects.push(newProject);
}

function changeCurrentProject(name) {
    for (let i = 0; i < projects.length; i++) {
        currentProject = projects[i].name === name;
    }
}


let defaultProject = project("Default");
let defaultTodo = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
defaultProject.todos.push(defaultTodo);

let currentProject = defaultProject;
let projects = [];

projects.push(defaultProject);


export {todo, project, projects, createProject, currentProject, changeCurrentProject};