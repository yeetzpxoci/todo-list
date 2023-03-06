import { createProject } from "./app_logic";

function displayProjects() {
    for (let i = 0; i < projects.length; i++) {
        const newProject = document.createElement("p");
        newProject.className = "project-name";
        newProject.innerHTML = projects[i].name;
        sidebarDiv.append(newProject);
    }
}

function removeProjects() {
    sidebarDiv.innerHTML = "";
}

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

    const addProject = document.createElement("button");
    addProject.id = "add-project";
    addProject.innerHTML = "New project";
    addProject.addEventListener("click", function () {
        document.getElementById("new-project-form").style.display = "flex";
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

    const closeButton = document.createElement("button");
    closeButton.id = "close-button";
    closeButton.innerHTML = "X";
    closeButton.addEventListener("click", function () {
        this.parentElement.style.display = "none";
    })

    for (let i = 0; i < projects[0].todos.length; i++) {
        const todo = document.createElement("div");
        todo.className = "todo";

        const checkbox = document.createElement("input");
        checkbox.className = "checkbox";
        checkbox.type = "checkbox"

        const todoName = document.createElement("p");
        todoName.innerHTML = projects[0].todos[i].title
        todoName.className = "todo-name";

        const due = document.createElement("p");
        due.innerHTML = projects[0].todos[i].dueDate
        due.className = "due";

        const descriptionText = document.createElement("p");
        descriptionText.id = "description-text";
        descriptionText.innerHTML = projects[0].todos[i].description;

        const closeButton2 = closeButton.cloneNode(true);
        closeButton2.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        })
        
        const descriptionDiv = document.createElement("div");
        descriptionDiv.id = "description-div";
        descriptionDiv.append(closeButton2, descriptionText);

        const descriptionButton = document.createElement("button");
        descriptionButton.innerHTML = "Description"
        descriptionButton.className = "description";
        descriptionButton.addEventListener("click", function () {
            this.previousElementSibling.style.display = "flex";
        });

        todo.append(checkbox, todoName, due, descriptionDiv, descriptionButton);
        todosDiv.append(todo);
    }

    const newProjectForm = document.createElement("form");
    newProjectForm.id = "new-project-form";
    newProjectForm.onsubmit = function (e) {e.preventDefault();}

    const projectNameInput = document.createElement("input");
    projectNameInput.id = "project-name-input";
    projectNameInput.type = "text";
    projectNameInput.placeholder = "Project name";

    const projectNameSubmit = document.createElement("input");
    projectNameSubmit.type = "submit";
    projectNameSubmit.value = "Add project"
    projectNameSubmit.addEventListener("click", function () {
        removeProjects();
        displayProjects();
        this.parentElement.style.display = "none";
    })


    newProjectForm.append(closeButton, projectNameInput, projectNameSubmit);

    contentDiv.append(headerDiv, sidebarDiv, todosWrapper, newProjectForm);

    document.body.appendChild(contentDiv);
}

export { renderHTML };