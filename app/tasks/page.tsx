'use client';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Button, Grid } from '@mui/material';

import TaskMeter from './components/TaskMeter';
import { useTasks } from './hooks/useTasks';

const TasksPage = () => {
  const { completedTasks, totalTasks } = useTasks();

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
          <Button
            startIcon={<AddCircleOutlineIcon />}
            variant="contained"
            sx={{ width: '100%', px: 6 }}
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TasksPage;
