// import {uniqueId} from '../actions'

// const mockTasks = [
//   {
//     id: uniqueId(),
//     title: 'Title 1',
//     description: 'Desc 1',
//     status: 'Backlog',
//   },
//   {
//     id: uniqueId(),
//     title: 'Title 2',
//     description: 'Desc 2',
//     status: 'To Do',
//   },
//   {
//     id: uniqueId(),
//     title: 'Title 3',
//     description: 'Desc 3',
//     status: 'In Progress',
//   },
//   {
//     id: uniqueId(),
//     title: 'Title 4',
//     description: 'Desc 4',
//     status: 'Done',
//   },
// ]

export default function tasks(state = {tasks: []}, action) {
  if (action.type === 'CREATE_TASK'){
    return {tasks: state.tasks.concat(action.payload)}
  }

  if (action.type === 'EDIT_STATUS_TASK'){
    const {payload} = action
    return {
      tasks: state.tasks.map(task => {
        if (task.id === payload.id){
          return Object.assign({}, task, payload.params)
        }
        return task
      })
    }
  }

  if (action.type === 'FETCH_TASKS_SUCCEEDED'){
    return {
      tasks: action.payload.tasks
    }
  }

  return state
}