import { createProject, changeCurrentProject, createTodo, removeTodo, removeProject} from "./app_logic";

function displayProjects() {
    let projects = JSON.parse(localStorage.getItem("projects"));
    for (let i = 0; i < projects.length; i++) {
        
        const newProject = document.createElement("p");
        newProject.className = "project-name";
        newProject.innerHTML = projects[i].name;
        newProject.addEventListener("click", function () {
            changeCurrentProject(newProject.innerHTML);
            removeTodos();
            displayTodos();
        });

        const projectRemoveButton = document.createElement("button");
        projectRemoveButton.className = "project-remove-button";
        projectRemoveButton.innerHTML = "X";
        projectRemoveButton.addEventListener("click", function () {
            removeProject();
            this.parentElement.remove();
        });

        const newProjectDiv = document.createElement("div");
        newProjectDiv.className = "project-div"

        newProjectDiv.append(newProject, projectRemoveButton);

        document.getElementById("projects-div").append(newProjectDiv);
    }
}

function removeProjects() {
    document.getElementById("projects-div").innerHTML = "";
}

function displayTodos() {
    let currentProject = JSON.parse(localStorage.getItem("currentProject"));
    for (let i = 0; i < currentProject.todos.length; i++) {
        const todo = document.createElement("div");
        todo.className = "todo";

        const checkbox = document.createElement("input");
        checkbox.className = "checkbox";
        checkbox.type = "checkbox"
        checkbox.addEventListener("click", function () {
            removeTodo(this.nextSibling.innerHTML);          
            this.parentElement.remove();
        })

        const todoName = document.createElement("p");
        todoName.innerHTML = currentProject.todos[i].title
        todoName.className = "todo-name";

        const due = document.createElement("p");
        due.innerHTML = currentProject.todos[i].dueDate
        due.className = "due";

        const descriptionText = document.createElement("p");
        descriptionText.id = "description-text";
        descriptionText.innerHTML = currentProject.todos[i].description;

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

        if (currentProject.todos[i].priority === "High") {
            todo.className = "todo-high";
        } else if (currentProject.todos[i].priority === "Medium") {
            todo.className = "todo-medium";
        } else {
            todo.className = "todo-low";
        }

        todo.append(checkbox, todoName, due, descriptionDiv, descriptionButton);
        document.getElementById("todos").append(todo);
    }
}

function removeTodos() {
    document.getElementById("todos").innerHTML = "";
}

function renderHTML() {
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

    const closeButtonProject = document.createElement("button");
    closeButtonProject.id = "close-button";
    closeButtonProject.innerHTML = "X";
    closeButtonProject.addEventListener("click", function () {
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

    newProjectForm.append(closeButtonProject, projectNameInput, projectNameSubmit);

    const closeButtonTodo = document.createElement("button");
    closeButtonTodo.id = "close-button";
    closeButtonTodo.innerHTML = "X";
    closeButtonTodo.addEventListener("click", function () {
        this.parentElement.style.display = "none";
    })

    const newTodoForm = document.createElement("form");
    newTodoForm.id = "new-todo-form";
    newTodoForm.onsubmit = function (e) { e.preventDefault(); }

    const todoTitleInput = document.createElement("input");
    todoTitleInput.id = "todo-title-input";
    todoTitleInput.type = "text";
    todoTitleInput.placeholder = "Title";

    const todoDescriptionInput = document.createElement("input");
    todoDescriptionInput.id = "todo-description-input";
    todoDescriptionInput.type = "text";
    todoDescriptionInput.placeholder = "Description";

    const todoDueInput = document.createElement("input");
    todoDueInput.id = "todo-due-input";
    todoDueInput.type = "text";
    todoDueInput.placeholder = "Due date";

    const todoPriorityInput = document.createElement("select");
    todoPriorityInput.id = "todo-priority-input";
    todoPriorityInput.placeholder = "Due date";

    const lowText = document.createElement("option");
    lowText.innerHTML = "Low";
    const mediumText = document.createElement("option");
    mediumText.innerHTML = "Medium";
    const highText = document.createElement("option");
    highText.innerHTML = "High";

    const todoSubmit= document.createElement("input");
    todoSubmit.type = "submit";
    todoSubmit.value = "Add todo";
    todoSubmit.addEventListener("click", function () {
        const title = todoTitleInput.value;
        const description = todoDescriptionInput.value;
        const dueDate = todoDueInput.value;
        const priority = todoPriorityInput.value;
        createTodo(title, description, dueDate, priority);
        this.parentElement.style.display = "none";
        removeTodos();
        displayTodos();
    })

    todoPriorityInput.append(highText, mediumText, lowText);

    newTodoForm.append(closeButtonTodo, todoTitleInput, todoDescriptionInput, todoDueInput, todoPriorityInput, todoSubmit);

    contentDiv.append(headerDiv, sidebarDiv, todosWrapper, newProjectForm, newTodoForm);

    document.body.appendChild(contentDiv);
}

export { renderHTML, displayProjects, displayTodos };