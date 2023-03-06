function todo(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    };
}

function createTodo(name, description, dueDate, priority) {
    const newTodo = todo(name, description, dueDate, priority);
    currentProject.push(newTodo);
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
        if (projects[i].name === name) {
            currentProject = projects[i];
        }
    }
}




let defaultProject = project("Default");
let defaultTodo = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
defaultProject.todos.push(defaultTodo);

let currentProject = defaultProject;
let projects = [];

projects.push(defaultProject);


export {todo, createTodo, project, projects, createProject, currentProject, changeCurrentProject};