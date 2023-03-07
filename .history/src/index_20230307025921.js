import {projects, initialize} from "./app_logic";
import { renderHTML, displayProjects, displayTodos } from "./DOM";

initialize();
renderHTML(projects);
displayProjects();
displayTodos();