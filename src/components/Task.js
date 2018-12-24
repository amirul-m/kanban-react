import React from 'react';

const TASK_STATUSES = ['Backlog', 'To Do', 'In Progress', 'Done']

const Task = (props) => {
  return (
    <div className="task">
      <div className="task-header">
        <div>{props.task.title}</div>
          <select value={props.task.status} onChange={onStatusChange}>
            {TASK_STATUSES.map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
      </div>
      <hr/>
      <div className="task-body">
        <div className="task-content">
          Description:
          <br/>
          {props.task.description}
        </div>
        <div className="task-content">
          Assigned to: {props.task.assignedTo}
        </div>
      </div>

    </div>
  );

  function onStatusChange(e){
    props.onStatusChange(props.task.id, e.target.value)
  }
};

export default Task;