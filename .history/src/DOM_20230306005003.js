const contentDiv = document.createElement("div");
contentDiv.id = "content"

const headerDiv = document.createElement("div");
headerDiv.id = "header"

const headerText = document.createElement("p");
headerText.innerHTML = "Todo";

headerDiv.append(headerText);

const sidebarDiv = document.createElement("div");
sidebarDiv.id = "sidebar"

const sideBarDefault = document.createElement("p");
sideBarDefault.className = "project-name";
sideBarDefault.innerHTML = "Default";

const addProject = document.createElement("button");
addProject.id = "add-project";

sidebarDiv.append(sideBarDefault, addProject);

