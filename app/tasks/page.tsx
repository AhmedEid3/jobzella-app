'use client';

import { Box, Grid } from '@mui/material';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskMeter from './components/TaskMeter';
import { useTasks } from './hooks/useTasks';

const TasksPage = () => {
  const { todoTasks, inProgressTasks, completedTasks, totalTasks } = useTasks();

  return (
    <Box>
      <Grid container spacing={2} justifyContent={'space-between'}>
        <Grid item xs={12} md={6}>
          <TaskMeter
            completedTasks={completedTasks.length}
            totalTasks={totalTasks}
          />
        </Grid>
        <Grid item>
          <AddTask />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <TaskList tasks={todoTasks} title="To Do" color={'todo'} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TaskList
              tasks={inProgressTasks}
              title="In Progress"
              color={'progress'}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TaskList tasks={completedTasks} title="Done" color={'success'} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TasksPage;
