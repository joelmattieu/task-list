/* eslint-disable no-unused-vars */
import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskProvider from './store/TaskProvider';

function App() {

  return (
    <TaskProvider>
      <TaskForm/>
      <TaskList />
    </TaskProvider>
  )
}

export default App
