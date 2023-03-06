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
let defaultTodo2 = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
defaultProject.todos.push(defaultTodo, defaultTodo2);

export {todo, project, defaultProject, defaultTodo};