import {projects, initialize} from "./app_logic";
import { renderHTML, displayProjects, displayTodos } from "./DOM";

if (!localStorage) {
    initialize();
}

renderHTML(projects);
displayProjects();
displayTodos();