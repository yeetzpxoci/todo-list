import {projects, createProject} from "./app_logic";
import { renderHTML } from "./DOM";

function displayProjects() {
    for (let i = 0; i < projects.length; i++) {
        const newProject = document.createElement("p");
        newProject.className = "project-name";
        newProject.innerHTML = projects[i].name;
        sidebarDiv.append(newProject);
    }
}

function removeProjects() {
    sidebarDiv.innerHTML = "";


renderHTML(projects);

projectNameSubmit.addEventListener("click", function () {
    createProject(document.getElementById("project-name-input").value);
    removeProjects();
    displayProjects();
    this.parentElement.style.display = "none";
})