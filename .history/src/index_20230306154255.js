import {projects} from "./app_logic";
import { renderHTML, displayProjects, displayTodos } from "./DOM";

renderHTML(projects);
displayProjects();
displayTodos();