
export const Task = (name, description = "", dueDate = new Date(), priority = 1, isFinished = false) => {
  return {
    name,
    description,
    dueDate,
    priority,
    isFinished,

    getId() {
      return id;
    },
    getIsFinished() {
      return isFinished;
    },
    toggleIsFinished() {
      isFinished ? isFinished = false : isFinished = true;
      return isFinished;
    }
  }
}
