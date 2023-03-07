//let projects = [];

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
    localStorage.getItem(localStorage.getItem("currentProject")).todos.push(newTodo);
}

function removeTodo (name) {   
    for (let i = 0; i < localStorage.getItem(localStorage.getItem("currentProject")).todos.length; i++) {
        if (localStorage.getItem(localStorage.getItem("currentProject")).todos[i].title === name) {
            localStorage.getItem(localStorage.getItem("currentProject")).todos.splice(i, 1);          
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
    JSON.parse(localStorage.getItem("projects")).push(newProject);
}

function changeCurrentProject(name) {
    for (let i = 0; i < JSON.parse(localStorage.getItem("projects")).length; i++) {
        if (JSON.parse(localStorage.getItem("projects")).name === name) {
            JSON.parse(localStorage.getItem("currentProject")) = JSON.parse(localStorage.getItem("projects"))[i];
        }
    }
}


let defaultProject = project("Default");
let defaultTodo = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
defaultProject.todos.push(defaultTodo);


// projects.push(defaultProject);

localStorage.setItem("defaultProject", JSON.stringify(defaultProject));
JSON.parse(localStorage.getItem("defaultProject")).todos.push(defaultTodo);
JSON.parse(localStorage.getItem("projects")).push(localStorage.getItem("defaultProject"))
localStorage.setItem("currentProject", JSON.stringify(JSON.parse(localStorage.getItem("defaultProject"))));

export {todo, createTodo, removeTodo, project, createProject, changeCurrentProject};