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
    localStorage.setItem("currentProject", JSON.stringify(currentProject));
    let projects = JSON.parse(localStorage.getItem("projects"));
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name === currentProject.name) {
            projects[i].todos.push(newTodo);
            localStorage.setItem("projects", JSON.stringify("projects"));
        }    
    }
}

function removeTodo (name) {   
    let currentProject = JSON.parse(localStorage.getItem("currentProject"));
    for (let i = 0; i < currentProject.todos.length; i++) {
        if (currentProject.todos[i].title === name) {
            currentProject.todos.splice(i, 1);
            localStorage.setItem("currentProject", JSON.stringify(currentProject));          
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
    let projects = JSON.parse(localStorage.getItem("projects"));
    projects.push(newProject);
    localStorage.setItem("projects", JSON.stringify(projects));
}

function changeCurrentProject(name) {
    let projects = JSON.parse(localStorage.getItem("projects"));
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name === name) {
            localStorage.setItem("currentProject", JSON.stringify(projects[i]));
        }
    }
}

function initialize() {
    localStorage.setItem("projects", JSON.stringify([]));
    let defaultProject = project("Default");
    localStorage.setItem("defaultProject", JSON.stringify(defaultProject));
    let projects = JSON.parse(localStorage.getItem("projects"));

    projects.push(defaultProject);

    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("currentProject", JSON.stringify(defaultProject));
}

export {todo, createTodo, removeTodo, project, createProject, changeCurrentProject, initialize};