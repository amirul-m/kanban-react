import React, { Component } from 'react';
import TaskList from './TaskList'

const TASK_STATUSES = ['Backlog', 'To Do', 'In Progress', 'Done']

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCardForm: false,
      title: '',
      description: '',
      assignedTo: ''
    }
  }

  onTitleChange = (e) => {
    this.setState({title: e.target.value});
  }

  onDescriptionChange = (e) => {
    this.setState({description: e.target.value});
  }

  onAssignedToChange = (e) => {
    this.setState({assignedTo: e.target.value});
  }

  resetForm(){
    this.setState({
      showNewCardForm: false,
      title: '',
      description: '',
      assignedTo: ''
    });
  }

  onCreateTask = (e) => {
    e.preventDefault()
    this.props.onCreateTask({
      title: this.state.title,
      description: this.state.description,
      assignedTo: this.state.assignedTo
    })
    this.resetForm()
  }

  toggleForm = () => {
    this.setState({showNewCardForm: !this.state.showNewCardForm});
  }
  
  renderTaskLists(){
    const {tasks} = this.props
    return TASK_STATUSES.map(status => {
      const statusTasks = tasks.filter(task => task.status === status)
      return (
        <TaskList
          key={status}
          status={status}
          tasks={statusTasks}
          onStatusChange={this.props.onStatusChange}
        />
      )
    })
  }
  render() {
    return (
      <div className="tasks">
        <div className="task-list-header">
          <button className="button button-default" onClick={this.toggleForm}>
            + New Task
          </button>
        </div>
        {this.state.showNewCardForm && (
          <form className="task-list-form" onSubmit={this.onCreateTask}>
            <input
              className="full-width-input"
              onChange={this.onTitleChange}
              value={this.state.title}
              type="text"
              placeholder="title"
            />
            <input
              className="full-width-input"
              onChange={this.onDescriptionChange}
              value={this.state.description}
              type="text"
              placeholder="description"
            />
            <input
              className="full-width-input"
              onChange={this.onAssignedToChange}
              value={this.state.assignedTo}
              type="text"
              placeholder="assigned to"
            />
            <button className="button" type="submit">
              Save
            </button>
          </form>
        )}

        <div className="task-lists">
          {this.renderTaskLists()}
        </div>
      </div>
    );
  }
}

export default TasksPage;