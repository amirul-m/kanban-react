import axios from 'axios'
import * as api from '../api'

let _id = 1
export function uniqueId(){
  return _id++
}

export function createTaskSucceeded(task){
  return {
    type: 'CREATE_TASK_SUCCEEDED',
    payload: {
      task
    }
  }
}

export function createTask({title, description, status='Backlog'}){
  return dispatch => {
    api.createTask({title, description, status}).then(resp => {
      dispatch(createTaskSucceeded(resp.data))
    })
  }
}

export function editStatusTaskSucceeded(task){
  return {
    type: 'EDIT_STATUS_TASK_SUCCEEDED',
    payload: {
      task
    }
  }
}

export function editStatusTask(id, params={}){
  return (dispatch, getState) => {
    const task = getTaskById(getState().tasks, id)
    const updatedTask = Object.assign({}, task, params)

    api.editStatusTask(id, updatedTask).then(resp => {
      dispatch(editStatusTaskSucceeded(resp.data))
    })
  }
}

export function getTaskById(tasks, id){
  return tasks.find(task => task.id === id)
}

export function fetchTasksSucceeded(tasks){
  return{
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: {
      tasks
    }
  }
}

export function fetchTasks(){
  return dispatch => {
    api.fetchTasks().then(resp => {
      dispatch(fetchTasksSucceeded(resp.data))
    })
  }
}