import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createTask, editStatusTask, fetchTasks} from './actions'
import TaskPage from './components/TasksPage'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }
  

  onCreateTask = ({title, description, assignedTo}) => {
    this.props.dispatch(createTask({title, description, assignedTo}))
  }

  onStatusChange = (id, status) => {
    this.props.dispatch(editStatusTask(id, {status}))
  }

  render() {
    return (
      <div className="main-content">
        <TaskPage
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onStatusChange={this.onStatusChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps) (App);
