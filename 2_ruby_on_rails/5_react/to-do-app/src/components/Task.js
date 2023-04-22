
import './Task.css';

function Task(props) {
  console.log("Update Task: ", props.updateTask);
  return (
    <div className="Task">
      {props.currentTask.id === props.task.id ? (
        <div className="task-row">
          <input type="text" name="new-task" onChange={(event) => props.handleUpdate(event)} value={props.updateTask} className='edit-input'></input>
          <div className="task-actions">
            <button onClick={(event) => props.handleSave(event, props.task.id)} className='edit-button'>Save</button>
            <button onClick={props.handleCancel} className='delete-button'>Cancel</button>

          </div>
        </div>) : (
        <div className="task-row">
          <p>{props.task.title}</p>
          <div className="task-actions">
            <button onClick={(event) => props.handleEdit(event, props.task.id)} className='edit-button'>Edit</button>
            <button onClick={(event) => props.handleDelete(event, props.task.id)} className='delete-button'>Delete</button>


          </div>
        </div>
      )}

    </div >
  );
}

export default Task;
