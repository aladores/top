export const Project = (id, name) => {
  let taskList = [];

  return {
    id,
    name,
    addTask(task) {
      taskList.push(task);
    },
    getTasksWithId(id) {
      return taskList[id];
    },
    getTaskList() {
      return taskList;
    },
    removeTaskWithIndex(index) {
      console.log("index: " + index);
      taskList.splice(index, 1);
    },
    getName() {
      return name;
    },
    getId() {
      return id;
    }
  }
}

