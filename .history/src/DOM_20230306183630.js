import { projects, createProject, currentProject, changeCurrentProject } from "./app_logic";

function displayProjects() {
    for (let i = 0; i < projects.length; i++) {
        const newProject = document.createElement("p");
        newProject.className = "project-name";
        newProject.innerHTML = projects[i].name;
        newProject.addEventListener("click", function () {
            changeCurrentProject(newProject.innerHTML);
            removeTodos();
            displayTodos();
        });
        document.getElementById("projects-div").append(newProject);
    }
}

function removeProjects() {
    document.getElementById("projects-div").innerHTML = "";
}

function displayTodos() {
    for (let i = 0; i < currentProject.todos.length; i++) {
        const todo = document.createElement("div");
        todo.className = "todo";

        const checkbox = document.createElement("input");
        checkbox.className = "checkbox";
        checkbox.type = "checkbox"
        checkbox.addEventListener("click", function () {
            this.parentElement.remove();            
        })

        const todoName = document.createElement("p");
        todoName.innerHTML = projects[0].todos[i].title
        todoName.className = "todo-name";

        const due = document.createElement("p");
        due.innerHTML = projects[0].todos[i].dueDate
        due.className = "due";

        const descriptionText = document.createElement("p");
        descriptionText.id = "description-text";
        descriptionText.innerHTML = projects[0].todos[i].description;

        const closeButton = document.createElement("button");
        closeButton.id = "close-button";
        closeButton.innerHTML = "X";
        closeButton.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        })

        closeButton.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        })

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
        document.getElementById("todos").append(todo);
    }
}

function removeTodos() {
    document.getElementById("todos").innerHTML = "";
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

    const projectsDiv = document.createElement("div");
    projectsDiv.id = "projects-div";

    const addProject = document.createElement("button");
    addProject.id = "add-project";
    addProject.innerHTML = "New project";
    addProject.addEventListener("click", function () {
        document.getElementById("new-project-form").style.display = "flex";
    })

    sidebarDiv.append(projectsDiv, addProject);

    const todosWrapper = document.createElement("div");
    todosWrapper.id = "todos-wrapper";

    const todosDiv = document.createElement("div");
    todosDiv.id = "todos";

    const addTodo = document.createElement("button");
    addTodo.id = "add-todo";
    addTodo.innerHTML = "Add todo";
    addTodo.addEventListener("click", function () {
        document.getElementById("new-todo-form").style.display = "flex";
    })

    todosWrapper.append(todosDiv, addTodo);

    const closeButton = document.createElement("button");
    closeButton.id = "close-button";
    closeButton.innerHTML = "X";
    closeButton.addEventListener("click", function () {
        this.parentElement.style.display = "none";
    })

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
        createProject(document.getElementById("project-name-input").value);
        removeProjects();
        displayProjects();
        this.parentElement.style.display = "none";
    })


    newProjectForm.append(closeButton, projectNameInput, projectNameSubmit);

    contentDiv.append(headerDiv, sidebarDiv, todosWrapper, newProjectForm);

    document.body.appendChild(contentDiv);
}

export { renderHTML, displayProjects, displayTodos };