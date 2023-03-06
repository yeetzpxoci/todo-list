function renderHTML(defaultProject) {
    const contentDiv = document.createElement("div");
    contentDiv.id = "content"

    const headerDiv = document.createElement("div");
    headerDiv.id = "header"

    const headerText = document.createElement("p");
    headerText.innerHTML = "Todo";

    headerDiv.append(headerText);

    const sidebarDiv = document.createElement("div");
    sidebarDiv.id = "sidebar"

    const sideBarDefault = document.createElement("p");
    sideBarDefault.className = "project-name";
    sideBarDefault.innerHTML = defaultProject.name;

    const addProject = document.createElement("button");
    addProject.id = "add-project";
    addProject.innerHTML = "New project";

    sidebarDiv.append(sideBarDefault, addProject);

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

        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "description-div";
        descriptionDiv.innerHTML = defaultProject.todos[i].description;

        const descriptionButton = document.createElement("button");
        descriptionButton.innerHTML = "Description"
        descriptionButton.className = "description";
        descriptionButton.addEventListener("click", function () {
            this.previousElementSibling.style.display = "flex";
        });

        todo.append(checkbox, todoName, due, descriptionDiv, descriptionButton);
        todosDiv.append(todo);
    }

    contentDiv.append(headerDiv, sidebarDiv, todosWrapper);

    document.body.appendChild(contentDiv);
}

export { renderHTML };