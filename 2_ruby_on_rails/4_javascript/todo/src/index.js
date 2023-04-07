
import './style.css'
import { ToDo } from './toDo'
import { Project } from './project'
import { Task } from './task'
import { DomController } from './domController'

function screenController() {
  let dom = DomController();
  let toDo = ToDo();
  let currentProjectId = 0;
  //Project view
  const addProjectButton = document.getElementById("add-project");
  const viewProjectList = document.getElementById("view-project-list");
  const projectRow = document.getElementById("project-row");
  const projectForm = document.getElementById("project-form");
  const projectName = document.getElementById("project-name");

  //Tasks view
  const addTasksButton = document.getElementById("add-tasks");
  const tasksRow = document.getElementById("tasks-row");
  const backProjectButton = document.getElementById("back-project-list");
  const viewTasksList = document.getElementById("view-tasks-list");

  //Add default project
  let tasksProject = Project(currentProjectId, 'Daily Tasks');
  addProject(tasksProject);
  setStaticListeners();

  function addProject(project) {
    toDo.addProject(project);
    dom.updateProjectView(toDo, viewProjectList);
    currentProjectId++;
    addClickToProjectCard();

  }

  function addClickToProjectCard() {
    let projectCards = document.getElementsByClassName("project-card");

    let toDoProjects = toDo.getProjectList();
    for (var i = 0; i < projectCards.length; i++) {
      (function (index) {
        projectCards[index].addEventListener('click', (e) => {
          dom.createTaskView(toDoProjects[index], viewTasksList);
          goToTaskView(toDoProjects[index]);
        });
      })(i);
    }
  }

  function goBackToProjectView() {
    let projectObject = document.getElementsByClassName("project-title");
    let projectId = (projectObject[0].id).slice(-1);
    let project = toDo.getProjectWithId(projectId);

    let taskRows = document.getElementsByClassName("task-row");

    for (let i = taskRows.length - 1; i >= 0; i--) {
      if (taskRows[i].classList.contains("line-through")) {
        project.removeTaskWithIndex(i);
      }
    }
    showProjectState();
    hideTasksState();
  }
  function goToTaskView(project) {
    let taskList = document.getElementById("project-task-list");
    hideProjectState();
    showTasksState();
    dom.updateTaskView(project, taskList)
    removeTask(project, taskList.children);
    showAddTasksButton();
  }

  function addTask() {
    hideAddTasksButton();
    let taskList = document.getElementById("project-task-list");
    let taskForm = dom.addTaskForm(taskList);

    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let projectObject = document.getElementsByClassName("project-title");
      let projectId = (projectObject[0].id).slice(-1);
      let project = toDo.getProjectWithId(projectId);

      let taskName = document.getElementById("task-name");
      let taskDescription = document.getElementById("task-description");
      let taskDueDate = document.getElementById("task-due-date");
      let taskPriority = document.getElementById("task-priority");
      //console.log(taskPriority.value);
      const newTask = Task(taskName.value, taskDescription.value, taskDueDate.value.replace('T', ' '), taskPriority.value);

      project.addTask(newTask);
      let taskCards = dom.updateTaskView(project, taskList);
      removeTask(project, taskCards);
      showAddTasksButton();
    });
  }

  function removeTask(project, taskCards) {
    for (let i = 0; i < taskCards.length; i++) {
      let checkbox = document.getElementById(`isFinished-${i}`);
      checkbox.addEventListener('change', () => {
        let x = i;
        let task = project.getTasksWithId(i);

        task.toggleIsFinished();
        toggleUnderline(taskCards[i]);

      })
    }
  }

  function toggleUnderline(taskCard) {
    taskCard.classList.contains("line-through")
      ? taskCard.classList.remove("line-through")
      : taskCard.classList.add("line-through");
  }

  function setStaticListeners() {
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newProject = Project(currentProjectId, projectName.value);
      addProject(newProject);
      hideProjectForm();
    });

    backProjectButton.addEventListener('click', () => {
      goBackToProjectView()
    });

    addProjectButton.addEventListener('click', showProjectForm);

    /*     const addTaskHandler = () => {
          addTask();
        }
     */
    addTasksButton.addEventListener('click', addTask);
  }

  //Project view
  function showProjectState() {
    showProjectList();
    showProjectRow();
  }
  function hideProjectState() {
    hideProjectForm();
    hideProjectList();
    hideProjectRow();
  }
  function showProjectForm() {
    projectForm.style.display = "flex";
  }
  function hideProjectForm() {
    projectForm.style.display = "none";
  }
  function showProjectRow() {
    projectRow.style.display = "flex";
  }
  function hideProjectRow() {
    projectRow.style.display = "none";
  }

  function showProjectList() {
    viewProjectList.style.display = "flex";
  }

  function hideProjectList() {
    viewProjectList.style.display = "none";
  }

  //Tasks view
  function showTasksState() {
    //showTasksForm();
    showTasksList();
    showTasksRow();
  }
  function hideTasksState() {
    //hideTasksForm();
    hideTasksList();
    hideTasksRow();
  }
  function showTasksRow() {
    tasksRow.style.display = "flex";
  }
  function hideTasksRow() {
    tasksRow.style.display = "none";
  }
  function showTasksList() {
    viewTasksList.style.display = "flex";
  }
  function hideTasksList() {
    viewTasksList.innerHTML = '';
    viewTasksList.style.display = "none";
  }
  function showAddTasksButton() {
    addTasksButton.style.display = "flex";
  }
  function hideAddTasksButton() {

    addTasksButton.style.display = "none";
  }
}
screenController();