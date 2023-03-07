import { projects, initialize } from "./app_logic";
import { renderHTML, displayProjects, displayTodos } from "./DOM";

if (JSON.parse(localStorage.getItem("projects")) == null) {
    initialize();
}

renderHTML(projects);
displayProjects();
displayTodos();