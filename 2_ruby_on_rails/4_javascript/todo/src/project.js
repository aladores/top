export const Project = (id, name) => {
  let taskList = [];

  return {
    id,
    name,
    addTask(task) {
      taskList.push(task);
    },
    getTaskList() {
      return taskList;
    },
    getName() {
      return name;
    },
    getId() {
      return id;
    }
  }
}

