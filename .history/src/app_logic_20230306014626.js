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
let defaultTodo3 = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
let defaultTodo4 = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
let defaultTodo5 = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
let defaultTodo6 = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
let defaultTodo7 = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
let defaultTodo8 = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
let defaultTodo9 = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");

defaultProject.todos.push(defaultTodo, defaultTodo2, defaultTodo3, defaultTodo4, defaultTodo5, defaultTodo6, defaultTodo7, defaultTodo8, defaultTodo9);

export {todo, project, defaultProject, defaultTodo};