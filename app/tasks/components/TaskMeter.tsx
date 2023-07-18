import { Box, Typography } from '@mui/material';

import LinerProgressApp from '@/components/LinerProgressApp';

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

      <LinerProgressApp value={progress} />
    </>
  );
};

export default TaskMeter;
