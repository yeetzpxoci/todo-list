import {projects} from "./app_logic";
import { renderHTML, displayProjects, displayTodos } from "./DOM";

console.log(JSON.parse(localStorage.getItem("currentProject")).todos[0].title)

renderHTML(projects);
displayProjects();
displayTodos();