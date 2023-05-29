/* eslint-disable no-unused-vars */
import { Grid, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import TaskContext from "../store/TaskContext";

const TaskList = () => {
  const ctxTask = useContext(TaskContext)
  console.log(ctxTask);
  
  return (
    <Grid container>
      {ctxTask.task.map((item) => (
        <Grid item key={item.id}>
          <Typography>{item.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;
