import { addProject } from "./app_logic";

function renderHTML(projects) {
    const contentDiv = document.createElement("div");
    contentDiv.id = "content"

    const headerDiv = document.createElement("div");
    headerDiv.id = "header"

    const headerText = document.createElement("p");
    headerText.innerHTML = "Todo";

    headerDiv.append(headerText);

    const sidebarDiv = document.createElement("div");
    sidebarDiv.id = "sidebar"

    for (let i = 0; i < projects.length; i++) {
        const newProject = document.createElement("p");
        newProject.className = "project-name";
        newProject.innerHTML = projects[i].name;
    }

    const addProject = document.createElement("button");
    addProject.id = "add-project";
    addProject.innerHTML = "New project";
    addProject.addEventListener("click", function () {
        
    })

    sidebarDiv.append(addProject);

    const todosWrapper = document.createElement("div");
    todosWrapper.id = "todos-wrapper";

    const todosDiv = document.createElement("div");
    todosDiv.id = "todos";

    const addTodo = document.createElement("button");
    addTodo.id = "add-todo";
    addTodo.innerHTML = "Add todo";

    todosWrapper.append(todosDiv, addTodo);

    for (let i = 0; i < defaultProject.todos.length; i++) {
        const todo = document.createElement("div");
        todo.className = "todo";

        const checkbox = document.createElement("input");
        checkbox.className = "checkbox";
        checkbox.type = "checkbox"

        const todoName = document.createElement("p");
        todoName.innerHTML = defaultProject.todos[i].title
        todoName.className = "todo-name";

        const due = document.createElement("p");
        due.innerHTML = defaultProject.todos[i].dueDate
        due.className = "due";

        const closeButton = document.createElement("button");
        closeButton.id = "close-button";
        closeButton.innerHTML = "X";
        closeButton.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        })

        const descriptionText = document.createElement("p");
        descriptionText.id = "description-text";
        descriptionText.innerHTML = defaultProject.todos[i].description;

        const descriptionDiv = document.createElement("div");
        descriptionDiv.id = "description-div";
        descriptionDiv.append(closeButton, descriptionText);

        const descriptionButton = document.createElement("button");
        descriptionButton.innerHTML = "Description"
        descriptionButton.className = "description";
        descriptionButton.addEventListener("click", function () {
            this.previousElementSibling.style.display = "flex";
        });

        todo.append(checkbox, todoName, due, descriptionDiv, descriptionButton);
        todosDiv.append(todo);
    }

    const newProjectForm = document.createElement("div");
    newProjectForm.id = "new-project-form";


    contentDiv.append(headerDiv, sidebarDiv, todosWrapper);

    document.body.appendChild(contentDiv);
}

export { renderHTML };