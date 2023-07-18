import { Box, LinearProgress, Typography } from '@mui/material';

interface Props {
  completedTasks: number;
  totalTasks: number;
}
const TaskMeter = ({ completedTasks, totalTasks }: Props) => {
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <>
      <Typography variant="subtitle2">
        Task Meter{' '}
        <Box component={'span'} color={'primary.main'}>
          {completedTasks}
        </Box>
        /<span>{totalTasks}</span>
      </Typography>

      <LinearProgress
        sx={{ height: '.625rem', borderRadius: '.625rem' }}
        variant="determinate"
        value={progress}
      />
    </>
  );
};

export default TaskMeter;
