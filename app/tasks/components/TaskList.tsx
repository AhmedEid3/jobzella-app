import { Task } from '@/models/task';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Chip, Typography } from '@mui/material';

import AddTask from './AddTask';
import TaskDetails from './TaskDetails';

interface Props {
  tasks: Task[];
  title: string;
  color: any;
}

const TaskList = ({ tasks, title, color }: Props) => {
  return (
    <Box
      boxShadow={1}
      sx={{
        padding: '0 1.5rem 0 1.5rem',
        borderRadius: '.5rem',
        maxHeight: '100vh',
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          mb: '1rem',
          borderBottom: `2px solid ${color}`,
          borderColor: color,
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          padding: '.75rem 1rem',
          margin: '0 -1.5rem',
          zIndex: 99,
        }}
      >
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}
        >
          <CircleIcon fontSize="small" color={color} />{' '}
          <Box component={'span'}>{title}</Box>{' '}
          <Chip label={'9'} size="small" />
        </Typography>
      </Box>

      {tasks.map((task) => (
        <Box key={task.id} sx={{ my: '1rem' }}>
          <TaskDetails task={task} color={color} />
        </Box>
      ))}

      <Box
        sx={{
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          padding: '.75rem 1rem',
          margin: '0 -1.5rem',
          position: 'sticky',
          zIndex: 99,
        }}
      >
        <AddTask />
      </Box>
    </Box>
  );
};

export default TaskList;
