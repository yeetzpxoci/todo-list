import {projects, createProject} from "./app_logic";
import { renderHTML } from "./DOM";

renderHTML(projects);

projectNameSubmit.addEventListener("click", function () {
    createProject(document.getElementById("project-name-input").value);
    removeProjects();
    displayProjects();
    this.parentElement.style.display = "none";
})