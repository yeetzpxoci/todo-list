(()=>{"use strict";function e(e){let t=JSON.parse(localStorage.getItem("currentProject"));for(let n=0;n<t.todos.length;n++)t.todos[n].title===e&&(t.todos.splice(n,1),localStorage.setItem("currentProject",JSON.stringify(t)));let n=JSON.parse(localStorage.getItem("projects"));for(let o=0;o<n.length;o++)if(n[o].name===t.name)for(let t=0;t<n[o].todos.length;t++)n[o].todos[t].title===e&&(n[o].todos.splice(t,1),localStorage.setItem("projects",JSON.stringify(n)))}function t(e){return{name:e,todos:[]}}function n(e){let t=JSON.parse(localStorage.getItem("projects"));for(let n=0;n<t.length;n++)t[n].name===e&&(t.splice(n,1),localStorage.setItem("projects",JSON.stringify(t)))}function o(e){let t=JSON.parse(localStorage.getItem("projects"));for(let n=0;n<t.length;n++)t[n].name===e&&localStorage.setItem("currentProject",JSON.stringify(t[n]))}function c(){let e=JSON.parse(localStorage.getItem("projects"));for(let t=0;t<e.length;t++){const c=document.createElement("p");c.className="project-name",c.innerHTML=e[t].name,c.addEventListener("click",(function(){o(c.innerHTML),i(),r()}));const d=document.createElement("button");d.className="project-remove-button",d.innerHTML="X",d.addEventListener("click",(function(){n(this.previousSibling.innerHTML),o("Home"),i(),r(),this.parentElement.remove()}));const l=document.createElement("div");l.className="project-div","Home"===e[t].name?l.append(c):l.append(c,d),document.getElementById("projects-div").append(l)}}function r(){const t=document.createElement("div");t.id="add-todo",t.innerHTML="+ Add todo",t.addEventListener("click",(function(){document.getElementById("new-todo-form").style.display="flex"})),document.getElementById("todos").append(t);let n=JSON.parse(localStorage.getItem("currentProject"));for(let t=0;t<n.todos.length;t++){const o=document.createElement("div");o.className="todo";const c=document.createElement("input");c.className="checkbox",c.type="checkbox",c.addEventListener("click",(function(){e(this.nextSibling.innerHTML),this.parentElement.remove()}));const r=document.createElement("p");r.innerHTML=n.todos[t].title,r.className="todo-name";const i=document.createElement("p");i.innerHTML=n.todos[t].dueDate,i.className="due";const d=document.createElement("p");d.id="description-text",d.innerHTML=n.todos[t].description;const l=document.createElement("button");l.id="close-button",l.innerHTML="X",l.addEventListener("click",(function(){this.parentElement.style.display="none"})),l.addEventListener("click",(function(){this.parentElement.style.display="none"}));const a=document.createElement("div");a.id="description-div",a.append(l,d);const s=document.createElement("button");s.innerHTML="...",s.className="description",s.addEventListener("click",(function(){this.previousElementSibling.style.display="flex"})),"High"===n.todos[t].priority?o.className="todo-high":"Medium"===n.todos[t].priority?o.className="todo-medium":o.className="todo-low",o.append(c,r,i,a,s),document.getElementById("todos").insertBefore(o,document.getElementById("add-todo"))}}function i(){document.getElementById("todos").innerHTML=""}null==JSON.parse(localStorage.getItem("projects"))&&function(){localStorage.setItem("projects",JSON.stringify([]));let e=t("Home");localStorage.setItem("homeProject",JSON.stringify(e));let n=JSON.parse(localStorage.getItem("projects"));n.push(e),localStorage.setItem("projects",JSON.stringify(n)),localStorage.setItem("currentProject",JSON.stringify(e))}(),function(){const e=document.createElement("div");e.id="content";const n=document.createElement("div");n.id="header";const o=document.createElement("p");o.innerHTML="Todo",n.append(o);const d=document.createElement("div");d.id="sidebar";const l=document.createElement("div");l.id="projects-div";const a=document.createElement("button");a.id="add-project",a.innerHTML="New project",a.addEventListener("click",(function(){document.getElementById("new-project-form").style.display="flex"})),d.append(l,a),document.createElement("div").id="todos-wrapper";const s=document.createElement("div");s.id="todos";const m=document.createElement("button");m.id="close-button",m.innerHTML="X",m.addEventListener("click",(function(){this.parentElement.style.display="none"}));const p=document.createElement("form");p.id="new-project-form",p.onsubmit=function(e){e.preventDefault()};const u=document.createElement("input");u.id="project-name-input",u.type="text",u.placeholder="Project name",u.required=!0;const g=document.createElement("input");g.type="submit",g.value="Add project",g.addEventListener("click",(function(){""!==document.getElementById("project-name-input").value&&(function(e){const n=t(document.getElementById("project-name-input").value);let o=JSON.parse(localStorage.getItem("projects"));o.push(n),localStorage.setItem("projects",JSON.stringify(o))}(),document.getElementById("projects-div").innerHTML="",c(),this.parentElement.style.display="none")})),p.append(m,u,g);const E=document.createElement("button");E.id="close-button",E.innerHTML="X",E.addEventListener("click",(function(){this.parentElement.style.display="none"}));const f=document.createElement("form");f.id="new-todo-form",f.onsubmit=function(e){e.preventDefault()};const y=document.createElement("input");y.id="todo-input",y.type="text",y.placeholder="Title",y.required=!0;const S=document.createElement("input");S.id="todo-input",S.type="text",S.placeholder="Description";const v=document.createElement("input");v.id="todo-input",v.type="date",v.placeholder="Due date";const h=document.createElement("select");h.id="todo-input",h.placeholder="Due date";const j=document.createElement("option");j.innerHTML="Low";const N=document.createElement("option");N.innerHTML="Medium";const I=document.createElement("option");I.innerHTML="High";const L=document.createElement("input");L.type="submit",L.value="Add todo",L.id="todo-input",L.addEventListener("click",(function(){""!==document.getElementById("todo-input").value&&(!function(e,t,n,o){const c=function(e,t,n,o){return{title:e,description:t,dueDate:n,priority:o}}(e,t,n,o);let r=JSON.parse(localStorage.getItem("currentProject"));r.todos.push(c),localStorage.setItem("currentProject",JSON.stringify(r));let i=JSON.parse(localStorage.getItem("projects"));for(let e=0;e<i.length;e++)i[e].name===r.name&&(i[e].todos.push(c),localStorage.setItem("projects",JSON.stringify(i)))}(y.value,S.value,v.value,h.value),this.parentElement.style.display="none",i(),r())})),h.append(I,N,j),f.append(E,y,S,v,h,L),e.append(n,d,s,p,f),document.body.appendChild(e)}(),c(),r()})();