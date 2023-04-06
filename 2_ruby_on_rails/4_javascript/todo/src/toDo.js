export const ToDo = () => {
  let projectList = [];

  return {
    projectList,
    getProjectList() {
      return projectList;
    },
    addProject(project) {
      projectList.push(project);
    },
    getProjectWithId(id) {
      return projectList[id];
    }
  }
}