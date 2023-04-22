
import React from 'react';
import Task from './Task';
import { nanoid } from 'nanoid'
import './Main.css';

function Main() {

  const defaultTask = {
    id: nanoid(),
    title: "new Task"
  };
  const [editState, setEditState] = React.useState(false);
  const [currentTask, setCurrentTask] = React.useState({});
  const [taskInput, setTaskInput] = React.useState("");
  const [updateTask, setTaskUpdate] = React.useState("");
  const [task, setTask] = React.useState(
    () => JSON.parse(localStorage.getItem("task")) || [defaultTask]);

  React.useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task])

  function handleInput(event) {
    setTaskInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleDelete(event, taskId) {
    setTask((prevTask) => {
      return prevTask.filter(task => task.id !== taskId)
    })
  }

  function createNewTask() {
    if (taskInput.length > 0) {
      const newTask = {
        id: nanoid(),
        title: taskInput
      }
      setTask(prevTasks => [newTask, ...prevTasks])
      return;
    }
    console.log("Error");
  }

  //Update 
  function handleEdit(event, taskId) {
    const taskToEdit = task.find(task => task.id === taskId);
    setCurrentTask(taskToEdit);
    setEditState(true);
    setTaskUpdate(taskToEdit.title);
  }

  function handleUpdate(event) {
    event.preventDefault();
    setTaskUpdate(event.target.value);
  }

  function handleSave(event, taskId) {
    if (updateTask === "") {
      console.log("Error empty update.");
      return;
    }
    const newTasks = task.map((item) => {
      if (item.id === taskId) {

        return { ...item, title: updateTask };
      }
      return item;
    });
    setTask(newTasks);
    handleCancel();
  }
  function handleCancel() {
    setCurrentTask({});
    setEditState(false);
  }

  const taskElements = task.map((task) => (
    <Task key={task.id}
      task={task}
      handleInput={handleInput}
      handleDelete={handleDelete}

      currentTask={currentTask}
      updateTask={updateTask}
      editState={editState}
      handleEdit={handleEdit}
      handleUpdate={handleUpdate}
      handleSave={handleSave}
      handleCancel={handleCancel}
    />
  ))

  return (
    <main className="Main">
      <div className='task-container'>
        {taskElements}
      </div>
      <form className='task-form' onSubmit={handleSubmit}>
        <input type="text" name="new-task" onChange={handleInput} value={taskInput} className='task-input'></input>
        <button onClick={createNewTask} className='submit-button'>+</button>
      </form>
    </main>
  );
}

export default Main;
