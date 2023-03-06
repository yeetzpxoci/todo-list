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
        name:name, 
        todos
    };
}

let defaultProject = project("Default");