(()=>{"use strict";function e(e){let t=JSON.parse(localStorage.getItem("currentProject"));for(let n=0;n<t.todos.length;n++)t.todos[n].title===e&&(t.todos.splice(n,1),localStorage.setItem("currentProject",JSON.stringify(t)));let n=JSON.parse(localStorage.getItem("projects"));for(let o=0;o<n.length;o++)if(n[o].name===t.name)for(let t=0;t<n[o].todos.length;t++)n[o].todos[t].title===e&&(n[o].todos.splice(t,1),localStorage.setItem("projects",JSON.stringify(n)))}function t(e){return{name:e,todos:[]}}function n(e){let t=JSON.parse(localStorage.getItem("projects"));for(let n=0;n<t.length;n++)t[n].name===e&&(t.splice(n,1),localStorage.setItem("projects",JSON.stringify(t)))}function o(e){let t=JSON.parse(localStorage.getItem("projects"));for(let n=0;n<t.length;n++)t[n].name===e&&localStorage.setItem("currentProject",JSON.stringify(t[n]))}function c(){let e=JSON.parse(localStorage.getItem("projects"));for(let t=0;t<e.length;t++){const c=document.createElement("p");c.className="project-name",c.innerHTML=e[t].name,c.addEventListener("click",(function(){o(c.innerHTML),i(),r()}));const l=document.createElement("button");l.className="project-remove-button",l.innerHTML="X",l.addEventListener("click",(function(){n(this.previousSibling.innerHTML),o("Default"),i(),r(),this.parentElement.remove()}));const d=document.createElement("div");d.className="project-div","Default"===e[t].name?d.append(c):d.append(c,l),document.getElementById("projects-div").append(d)}}function r(){let t=JSON.parse(localStorage.getItem("currentProject"));for(let n=0;n<t.todos.length;n++){const o=document.createElement("div");o.className="todo";const c=document.createElement("input");c.className="checkbox",c.type="checkbox",c.addEventListener("click",(function(){e(this.nextSibling.innerHTML),this.parentElement.remove()}));const r=document.createElement("p");r.innerHTML=t.todos[n].title,r.className="todo-name";const i=document.createElement("p");i.innerHTML=t.todos[n].dueDate,i.className="due";const l=document.createElement("p");l.id="description-text",l.innerHTML=t.todos[n].description;const d=document.createElement("button");d.id="close-button",d.innerHTML="X",d.addEventListener("click",(function(){this.parentElement.style.display="none"})),d.addEventListener("click",(function(){this.parentElement.style.display="none"}));const a=document.createElement("div");a.id="description-div",a.append(d,l);const s=document.createElement("button");s.innerHTML="...",s.className="description",s.addEventListener("click",(function(){this.previousElementSibling.style.display="flex"})),"High"===t.todos[n].priority?o.className="todo-high":"Medium"===t.todos[n].priority?o.className="todo-medium":o.className="todo-low",o.append(c,r,i,a,s),document.getElementById("todos").insertBefore(o,document.getElementById("add-todo"))}}function i(){document.getElementById("todos").innerHTML=""}null==JSON.parse(localStorage.getItem("projects"))&&function(){localStorage.setItem("projects",JSON.stringify([]));let e=t("Default");localStorage.setItem("defaultProject",JSON.stringify(e));let n=JSON.parse(localStorage.getItem("projects"));n.push(e),localStorage.setItem("projects",JSON.stringify(n)),localStorage.setItem("currentProject",JSON.stringify(e))}(),function(){const e=document.createElement("div");e.id="content";const n=document.createElement("div");n.id="header";const o=document.createElement("p");o.innerHTML="Todo",n.append(o);const l=document.createElement("div");l.id="sidebar";const d=document.createElement("div");d.id="projects-div";const a=document.createElement("button");a.id="add-project",a.innerHTML="New project",a.addEventListener("click",(function(){document.getElementById("new-project-form").style.display="flex"})),l.append(d,a),document.createElement("div").id="todos-wrapper";const s=document.createElement("div");s.id="todos";const m=document.createElement("div");m.id="add-todo",m.innerHTML="+",m.addEventListener("click",(function(){document.getElementById("new-todo-form").style.display="flex"})),s.append(m);const p=document.createElement("button");p.id="close-button",p.innerHTML="X",p.addEventListener("click",(function(){this.parentElement.style.display="none"}));const u=document.createElement("form");u.id="new-project-form",u.onsubmit=function(e){e.preventDefault()};const g=document.createElement("input");g.id="project-name-input",g.type="text",g.placeholder="Project name";const E=document.createElement("input");E.type="submit",E.value="Add project",E.addEventListener("click",(function(){!function(e){const n=t(document.getElementById("project-name-input").value);let o=JSON.parse(localStorage.getItem("projects"));o.push(n),localStorage.setItem("projects",JSON.stringify(o))}(),document.getElementById("projects-div").innerHTML="",c(),this.parentElement.style.display="none"})),u.append(p,g,E);const f=document.createElement("button");f.id="close-button",f.innerHTML="X",f.addEventListener("click",(function(){this.parentElement.style.display="none"}));const y=document.createElement("form");y.id="new-todo-form",y.onsubmit=function(e){e.preventDefault()};const S=document.createElement("input");S.id="todo-title-input",S.type="text",S.placeholder="Title";const v=document.createElement("input");v.id="todo-description-input",v.type="text",v.placeholder="Description";const h=document.createElement("input");h.id="todo-due-input",h.type="date",h.placeholder="Due date";const j=document.createElement("select");j.id="todo-priority-input",j.placeholder="Due date";const N=document.createElement("option");N.innerHTML="Low";const L=document.createElement("option");L.innerHTML="Medium";const I=document.createElement("option");I.innerHTML="High";const H=document.createElement("input");H.type="submit",H.value="Add todo",H.addEventListener("click",(function(){!function(e,t,n,o){const c=function(e,t,n,o){return{title:e,description:t,dueDate:n,priority:o}}(e,t,n,o);let r=JSON.parse(localStorage.getItem("currentProject"));r.todos.push(c),localStorage.setItem("currentProject",JSON.stringify(r));let i=JSON.parse(localStorage.getItem("projects"));for(let e=0;e<i.length;e++)i[e].name===r.name&&(i[e].todos.push(c),localStorage.setItem("projects",JSON.stringify(i)))}(S.value,v.value,h.value,j.value),this.parentElement.style.display="none",i(),document.getElementById("todos").append(m),r()})),j.append(I,L,N),y.append(f,S,v,h,j,H),e.append(n,l,s,u,y),document.body.appendChild(e)}(),c(),r()})();