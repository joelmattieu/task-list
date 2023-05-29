/* eslint-disable no-unused-vars */
import { TextField, Button } from '@mui/material';
import React, {useState, useContext} from 'react'
import TaskContext from '../store/TaskContext';

const TaskForm = () => {
  const [task, setTask] = useState("");
  const ctxTask = useContext(TaskContext)

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const enableTask = task.trim().length > 2;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enableTask) {
      ctxTask.addTask(task);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="task"
          value={task}
          label="task"
          variant="outlined"
          onChange={handleChange}
        />
        <Button type="submit" disabled={!enableTask}>
          Add
        </Button>
      </form>
    </>
  );
}

export default TaskForm