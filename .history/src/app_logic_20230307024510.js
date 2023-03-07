localStorage.setItem("projects", JSON.stringify([]));

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
    let currentProject = JSON.parse(localStorage.getItem("currentProject"));
    currentProject.todos.push(newTodo);
}

function removeTodo (name) {   
    for (let i = 0; i < currentProject.todos.length; i++) {
        if (currentProject.todos[i].title === name) {
            currentProject.todos.splice(i, 1);          
        }
    }
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
localStorage.setItem("defaultProject", JSON.stringify(defaultProject));
let projects = JSON.parse(localStorage.getItem("projects"));

projects.push(defaultProject);

localStorage.setItem("projects", JSON.stringify(projects));
localStorage.setItem("currentProject", JSON.stringify(defaultProject));

export {todo, createTodo, removeTodo, project, projects, createProject, currentProject, changeCurrentProject};