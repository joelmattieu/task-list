import React from 'react'

const TaskContext = React.createContext({
  task: [],
  addTask: (item) => { },
  removeTask: (id) => { },
  checkTask: (id) => { }
})

export default TaskContext;