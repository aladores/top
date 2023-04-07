(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(81),a=n.n(i),r=n(645),o=n.n(r)()(a());o.push([e.id,"p,\nh1 {\n  padding: 0px;\n  margin: 0px;\n}\nbody {\n  display: flex;\n  justify-content: center;\n  background-color: grey;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  width: 1024px;\n}\n\n/********** Add Section *********/\n.project-row {\n  display: flex;\n  gap: 15px;\n  padding: 25px;\n}\n\n#project-form {\n  display: none;\n}\n\n.tasks-row {\n  display: none;\n  justify-content: space-between;\n  gap: 15px;\n  padding: 25px;\n}\n/********** View Section *********/\n.view-project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 25px;\n  background-color: rgb(193, 195, 196);\n}\n\n.view-tasks-section {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 25px;\n  background-color: rgb(193, 195, 196);\n}\n\n.project-card {\n  padding: 10px;\n  background-color: rgb(90, 90, 90);\n  cursor: pointer;\n}\n\n#view-tasks-list {\n  display: none;\n}\n\n#project-task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.task-name,\n.task-description {\n  width: 100%;\n}\n\n.priority-row {\n  display: inline-block;\n}\n\n.task-row {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n}\n\n.task-info {\n  display: flex;\n  flex-direction: column;\n}\n.task-name {\n  font-size: 1.1rem;\n}\n.task-checkbox {\n  width: 20px;\n  height: 20px;\n}\n.task-date-priority-row {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n}\n.line-through {\n  text-decoration: line-through;\n}\n@media only screen and (max-width: 500px) {\n  .priority-row {\n    display: block;\n  }\n}\n",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);i&&o[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},o=[],s=0;s<e.length;s++){var d=e[s],c=i.base?d[0]+i.base:d[0],l=r[c]||0,p="".concat(c," ").concat(l);r[c]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,i);i.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=i(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var s=n(r[o]);t[s].references--}for(var d=i(e,a),c=0;c<r.length;c++){var l=n(r[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),a=n.n(i),r=n(569),o=n.n(r),s=n(565),d=n.n(s),c=n(216),l=n.n(c),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const y=(e,t)=>{let n=[];return{id:e,name:t,addTask(e){n.push(e)},getTasksWithId:e=>n[e],getTaskList:()=>n,removeTaskWithIndex(e){console.log("index: "+e),n.splice(e,1)},getName:()=>t,getId:()=>e}};!function(){let e={updateProjectView:function(e,t){t.innerHTML="";const n=e.getProjectList();for(let e=0;e<n.length;e++){let i=document.createElement("div");i.classList.add("project-card"),i.innerHTML=`<h1>${n[e].name}</h1>`,t.appendChild(i)}},createTaskView:function(e,t){t.innerHTML="";let n=document.createElement("div");n.classList="project-title",n.setAttribute("id",`project-title-${e.getId()}`),n.innerHTML=`<h1>${e.getName()}</h1>`;let i=document.createElement("div");i.setAttribute("id","project-task-list"),t.appendChild(n),t.appendChild(i)},addTaskForm:function(e){let t=new Date;t.setHours(t.getHours()-3);const n=t.toISOString().slice(0,16).replace("T"," ");let i=document.createElement("form");return i.innerHTML=`<form action="" id="task-form" class="task-form">\n    <input type="text" id="task-name" name="task-name" value="test-task" class="task-name">\n    <input type="text" id="task-description" name="task-description" value="test-description" class="task-description">\n    <label for=due-date">date: </label>\n    <input type="datetime-local" id="task-due-date"\n       name="due-date" value="${n}"\n       min="="${t}">\n\n    <div class="priority-row">\n    <label for="priority">priority: </label>\n    <input type="number" id="task-priority" name="priority" min="1" max="3" value="1">\n    </div>\n    <input type="submit" value="Submit">\n    </form>`,e.appendChild(i),i},updateTaskView:function(e,t){let n=[];t.innerHTML="";const i=e.getTaskList();for(let a=0;a<i.length;a++){let r=e.getTasksWithId(a),o=document.createElement("div");o.setAttribute("id",`task-id-${a}`),o.classList.add("task-row"),o.innerHTML=`<input id="isFinished-${a}" class="task-checkbox" type="checkbox" />\n        <div class="task-info">\n          <p class="task-name">${i[a].name}</p>\n          <p class="task-description">${i[a].description}</p>\n          <div class="task-date-priority-row">\n            <p>Date: ${i[a].dueDate}</p>\n            <p>Priority: ${i[a].priority}</p>\n          </div>\n        </div >`,n.push(o),t.appendChild(o),r.getIsFinished()&&(document.getElementById(`isFinished-${a}`).checked=!0,o.classList.add("line-through"))}return n}},t=(()=>{let e=[];return{projectList:e,getProjectList:()=>e,addProject(t){e.push(t)},getProjectWithId:t=>e[t]}})(),n=0;const i=document.getElementById("add-project"),a=document.getElementById("view-project-list"),r=document.getElementById("project-row"),o=document.getElementById("project-form"),s=document.getElementById("project-name"),d=document.getElementById("add-tasks"),c=document.getElementById("tasks-row"),l=document.getElementById("back-project-list"),p=document.getElementById("view-tasks-list");function u(i){t.addProject(i),e.updateProjectView(t,a),n++,function(){let n=document.getElementsByClassName("project-card"),i=t.getProjectList();for(var a=0;a<n.length;a++)!function(t){n[t].addEventListener("click",(n=>{e.createTaskView(i[t],p),m(i[t])}))}(a)}()}function m(t){let n=document.getElementById("project-task-list");g(),a.style.display="none",r.style.display="none",p.style.display="flex",c.style.display="flex",e.updateTaskView(t,n),f(t,n.children),h()}function f(e,t){for(let n=0;n<t.length;n++)document.getElementById(`isFinished-${n}`).addEventListener("change",(()=>{var i;e.getTasksWithId(n).toggleIsFinished(),(i=t[n]).classList.contains("line-through")?i.classList.remove("line-through"):i.classList.add("line-through")}))}function g(){o.style.display="none"}function h(){d.style.display="flex"}u(y(n,"Daily Tasks")),o.addEventListener("submit",(e=>{e.preventDefault(),u(y(n,s.value)),g()})),l.addEventListener("click",(()=>{!function(){let e=document.getElementsByClassName("project-title")[0].id.slice(-1),n=t.getProjectWithId(e),i=document.getElementsByClassName("task-row");for(let e=i.length-1;e>=0;e--)i[e].classList.contains("line-through")&&n.removeTaskWithIndex(e);a.style.display="flex",r.style.display="flex",p.innerHTML="",p.style.display="none",c.style.display="none"}()})),i.addEventListener("click",(function(){o.style.display="flex"})),d.addEventListener("click",(function(){d.style.display="none";let n=document.getElementById("project-task-list");e.addTaskForm(n).addEventListener("submit",(i=>{i.preventDefault();let a=document.getElementsByClassName("project-title")[0].id.slice(-1),r=t.getProjectWithId(a),o=document.getElementById("task-name"),s=document.getElementById("task-description"),d=document.getElementById("task-due-date"),c=document.getElementById("task-priority");const l=((e,t="",n=new Date,i=1,a=!1)=>({name:e,description:t,dueDate:n,priority:i,isFinished:a,getId:()=>id,getIsFinished:()=>a,toggleIsFinished:()=>a=!a}))(o.value,s.value,d.value.replace("T"," "),c.value);r.addTask(l),f(r,e.updateTaskView(r,n)),h()}))}))}()})()})();