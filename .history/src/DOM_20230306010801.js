import { todo, project, defaultProject, defaultTodo  } from "./app_logic";

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

sidebarDiv.append(sideBarDefault, addProject);

const todosDiv = document.createElement("div");
todosDiv.id = "todos";

for (let i = 0; i < defaultProject.todos.length; i++) {
    const todo = document.createElement("div");
    todo.className = "todo";

    const checkbox = document.createElement("input");
    checkbox.className = "checkbox";
    checkbox.type = "checkbox"

    const todoName = document.createElement("p");
    todoName.innerHTML = defaultProject.todos[i].title
    todo.className = "todo-name";

    const due = document.createElement("p");
    due.innerHTML = defaultProject.todos[i].dueDate
    due.className = "due";

    const descriptionButton = document.createElement("button");
    descriptionButton.innerHTML = "Description"
    descriptionButton.className = "description";

    todo.append(checkbox, todoName, due, descriptionButton);
}