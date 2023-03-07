import {projects} from "./app_logic";
import { renderHTML, displayProjects, displayTodos } from "./DOM";

localStorage.setItem("hi", "hello");
console.log(localStorage.getItem("hi"))

renderHTML(projects);
displayProjects();
displayTodos();