(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"body {\n  display: flex;\n  justify-content: center;\n  background-color: grey;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  width: 1024px;\n}\n\n/********** Add Section *********/\n.project-row {\n  display: flex;\n  gap: 15px;\n  padding: 25px;\n}\n\n#project-form {\n  display: none;\n}\n\n.tasks-row {\n  display: none;\n  justify-content: space-between;\n  gap: 15px;\n  padding: 25px;\n}\n/********** View Section *********/\n.view-project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 25px;\n  background-color: rgb(193, 195, 196);\n}\n\n.view-tasks-section {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 25px;\n  background-color: rgb(193, 195, 196);\n}\n\n.project-card {\n  padding: 10px;\n  background-color: rgb(90, 90, 90);\n  cursor: pointer;\n}\n\n#view-tasks-list {\n  display: none;\n}\n\n.task-form {\n}\n\n.task-name,\n.task-description {\n  width: 100%;\n}\n\n.priority-row {\n  display: inline-block;\n}\n\n@media only screen and (max-width: 500px) {\n  .priority-row {\n    display: block;\n  }\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const y=(e,t)=>{let n=[];return{id:e,name:t,addTask(e){n.push(e)},getTaskList:()=>n,getName:()=>t,getId:()=>e}};!function(){let e={updateProjectView:function(e,t){t.innerHTML="";const n=e.getProjectList();for(let e=0;e<n.length;e++){let r=document.createElement("div");r.classList.add("project-card"),r.innerHTML=`<h1>${n[e].name}</h1>`,t.appendChild(r)}},createTaskView:function(e,t){t.innerHTML="";let n=document.createElement("div");n.classList="project-title",n.setAttribute("id",`project-title-${e.getId()}`),n.innerHTML=`<h1>${e.getName()}</h1>`;let r=document.createElement("div");r.setAttribute("id","project-task-list"),t.appendChild(n),t.appendChild(r)},addTaskForm:function(e){let t=new Date;t.setHours(t.getHours()-3);const n=t.toISOString().slice(0,16).replace("T"," ");console.log(t.toISOString());let r=document.createElement("form");return r.innerHTML=`<form action="" id="task-form" class="task-form">\n    <input type="text" id="task-name" name="task-name" value="test-task" class="task-name">\n    <input type="text" id="task-description" name="task-description" value="test-description" class="task-description">\n    <label for=due-date">date: </label>\n    <input type="datetime-local" id="task-due-date"\n       name="due-date" value="${n}"\n       min="="${t}">\n\n    <div class="priority-row">\n    <label for="priority">priority: </label>\n    <input type="number" id="task-priority" name="priority" min="1" max="3" value="1">\n    </div>\n    <input type="submit" value="Submit">\n    </form>`,e.appendChild(r),r},updateTaskView:function(e,t){t.innerHTML="";const n=e.getTaskList();for(let e=0;e<n.length;e++){console.log(n[e]);let r=document.createElement("div");r.setAttribute("id",`${n[e].title}-task-list`),r.classList="tasks-list",r.innerHTML=`<p>${n[e].name}</p>\n          <p>${n[e].description}</p>`,t.appendChild(r)}}},t=(()=>{let e=[];return{projectList:e,getProjectList:()=>e,addProject(t){e.push(t)},getProjectWithId:t=>e[t]}})(),n=0;const r=document.getElementById("add-project"),a=document.getElementById("view-project-list"),o=document.getElementById("project-row"),i=document.getElementById("project-form"),s=document.getElementById("project-name"),c=document.getElementById("add-tasks"),d=document.getElementById("tasks-row"),l=document.getElementById("back-project-list"),p=document.getElementById("view-tasks-list");function u(r){t.addProject(r),e.updateProjectView(t,a),n++,function(){let n=document.getElementsByClassName("project-card"),r=t.getProjectList();for(var a=0;a<n.length;a++)!function(t){n[t].addEventListener("click",(n=>{e.createTaskView(r[t],p),m(r[t])}))}(a)}()}function m(t){let n=document.getElementById("project-task-list");v(),a.style.display="none",o.style.display="none",p.style.display="flex",d.style.display="flex",e.updateTaskView(t,n)}function f(){i.style.display="flex"}function v(){i.style.display="none"}u(y(n,"Daily Tasks")),i.addEventListener("submit",(e=>{e.preventDefault(),u(y(n,s.value)),v()})),l.addEventListener("click",(()=>{a.style.display="flex",o.style.display="flex",p.innerHTML="",p.style.display="none",d.style.display="none"})),r.addEventListener("click",f),c.addEventListener("click",(n=>{!function(){c.style.display="none";let n=document.getElementById("project-task-list");e.addTaskForm(n).addEventListener("submit",(r=>{r.preventDefault();let a=document.getElementsByClassName("project-title")[0].id.slice(-1),o=t.getProjectWithId(a),i=document.getElementById("task-name"),s=document.getElementById("task-description"),d=document.getElementById("task-due-date"),l=document.getElementById("task-priority");console.log(l.value);const p=((e,t="",n=new Date,r=1,a=!1)=>({name:e,description:t,dueDate:n,priority:r,isFinished:a}))(i.value,s.value,d.value.replace("T"," "),l.value);o.addTask(p),e.updateTaskView(o,n),c.style.display="flex"}))}()}))}()})()})();