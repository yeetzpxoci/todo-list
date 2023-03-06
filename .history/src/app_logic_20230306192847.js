let projects = [];

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
    currentProject.todos.push(newTodo);
}

function removeTodo (name) {   
    for (let i = 0; i < currentProject.length; i++) {
        if (currentProject.todos[i].title === name) {
            console.log(currentProject.todos[i].title);
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
let defaultTodo = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
defaultProject.todos.push(defaultTodo);

let currentProject = defaultProject;

projects.push(defaultProject);


export {todo, createTodo, removeTodo, project, projects, createProject, currentProject, changeCurrentProject};