import { todo, project, projects, createProject } from "./app_logic";
import { renderHTML } from "./DOM";

let projects = [];

let defaultProject = project("Default");
let defaultTodo = todo("Homework", "Networks and Security bTCP Homework", "Mon, 6 Mar", "High");
defaultProject.todos.push(defaultTodo);

projects.push(defaultProject);

renderHTML(projects);