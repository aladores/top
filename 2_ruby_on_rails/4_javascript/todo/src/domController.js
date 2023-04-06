export const DomController = () => {

  function updateProjectView(toDo, parent) {
    parent.innerHTML = "";
    const toDoProjects = toDo.getProjectList();
    for (let i = 0; i < toDoProjects.length; i++) {
      let projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.innerHTML = `<h1>${toDoProjects[i]["name"]}</h1>`;
      parent.appendChild(projectCard);
    }

  }


  function createTaskView(project, parent) {
    parent.innerHTML = "";
    let tasksCard = document.createElement('div');
    tasksCard.classList = `project-title`;
    tasksCard.setAttribute(`id`, `project-title-${project.getId()}`);
    tasksCard.innerHTML = `<h1>${project.getName()}</h1>`;
    let tasksList = document.createElement('div');
    tasksList.setAttribute('id', `project-task-list`);
    parent.appendChild(tasksCard);
    parent.appendChild(tasksList);
  }

  function addTaskForm(taskList) {
    let todayDate = new Date();
    todayDate.setHours(todayDate.getHours() - 3);

    const formattedDate = todayDate.toISOString().slice(0, 16).replace('T', ' ');
    console.log(todayDate.toISOString());
    let taskForm = document.createElement("form");
    taskForm.innerHTML =
      `<form action="" id="task-form" class="task-form">
    <input type="text" id="task-name" name="task-name" value="test-task" class="task-name">
    <input type="text" id="task-description" name="task-description" value="test-description" class="task-description">
    <label for=due-date">date: </label>
    <input type="datetime-local" id="task-due-date"
       name="due-date" value="${formattedDate}"
       min="="${todayDate}">

    <div class="priority-row">
    <label for="priority">priority: </label>
    <input type="number" id="task-priority" name="priority" min="1" max="3" value="1">
    </div>
    <input type="submit" value="Submit">
    </form>`
    taskList.appendChild(taskForm);
    return taskForm;
  }
  function updateTaskView(project, parent) {
    parent.innerHTML = "";
    const projectTasks = project.getTaskList();
    //console.log(projectTasks.length);
    for (let i = 0; i < projectTasks.length; i++) {
      console.log(projectTasks[i]);
      let taskElement = document.createElement('div');
      taskElement.setAttribute('id', `${projectTasks[i]["title"]}-task-list`);
      taskElement.classList = `tasks-list`;
      taskElement.innerHTML =
        `<p>${projectTasks[i]["name"]}</p>
          <p>${projectTasks[i]["description"]}</p>`;
      parent.appendChild(taskElement);
    }
  }


  return {
    updateProjectView,
    createTaskView,
    addTaskForm,
    updateTaskView
  }
}
