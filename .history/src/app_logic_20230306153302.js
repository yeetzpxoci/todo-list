let projects = [];

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

let defaultProject = project("Default");
let defaultTodo = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
defaultProject.todos.push(defaultTodo);

projects.push(defaultProject);

function addProject(name) {
    let newProject = project(name);
    projects.push(newProject);
}

export {todo, project, projects, defaultProject, defaultTodo, addProject};