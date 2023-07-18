import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import useTaskGroups from '../hooks/useTaskGroups';
import AddTaskGroup from './AddTaskGroup';

const TaskGroups = () => {
  const { taskGroups } = useTaskGroups();

  return (
    <Box sx={{ maxWidth: '200px', mx: 'auto' }}>
      <Typography variant="subtitle2" sx={{ mx: '1rem' }}>
        Groups
      </Typography>

      <List>
        {taskGroups.map((taskGroup) => (
          <ListItem key={taskGroup.id} disablePadding>
            <ListItemButton selected={taskGroup.id === '1'}>
              <ListItemIcon>
                <Image
                  width={24}
                  height={24}
                  src={taskGroup.iconUrl}
                  alt={taskGroup.name}
                />
              </ListItemIcon>

              <ListItemText primary={taskGroup.name} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem sx={{ mt: '2.5rem' }} disablePadding>
          <AddTaskGroup />
        </ListItem>
      </List>
    </Box>
  );
};

export default TaskGroups;
