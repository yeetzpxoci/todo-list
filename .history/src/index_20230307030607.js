import { initialize } from "./app_logic";
import { renderHTML, displayProjects, displayTodos } from "./DOM";

if (JSON.parse(localStorage.getItem("projects")) == null) {
    initialize();
}

renderHTML(JSON.parse(localStorage.getItem("projects")));
displayProjects();
displayTodos();