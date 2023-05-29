import React, { useReducer } from 'react';
import TaskContext from './TaskContext';

const defaultTasks = {
  task: [],

}

const taskReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTask = state.task.concat({
      id: Math.random().toString(),
      name: action.name
    });
    return {task: updateTask}
  }
  return state
}
const TaskProvider = ({children }) => {
  const [taskState, dispatch] = useReducer(taskReducer, defaultTasks);

  const handleAddTask = (task) => {
    dispatch({type: "ADD", name: task})
  }

  const taskContext = {
    task: taskState.task,
    addTask: handleAddTask,
  }
  return (
    <TaskContext.Provider value={taskContext}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider