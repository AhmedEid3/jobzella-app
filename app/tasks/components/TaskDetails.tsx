import Image from 'next/image';
import { Task } from '@/models/task';
import { poppinsFont } from '@/Theme/fonts';
import formatDate from '@/utils/formateDate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Box, Card, CardContent, Chip, Typography } from '@mui/material';

import LinerProgressApp from '@/components/LinerProgressApp';

interface Props {
  task: Task;
  color: any;
}

const TaskDetails = ({ task, color }: Props) => {
  return (
    <Card
      sx={{
        backgroundColor: 'overlay.main',
        borderRadius: '.5rem',
        fontFamily: poppinsFont.style.fontFamily,
      }}
    >
      <CardContent>
        <Typography component={'h2'} variant="body1" fontWeight={'600'}>
          {task.title}
        </Typography>
        <Typography color={'text.secondary'} variant="caption">
          {task.description}
        </Typography>

        <Box my={'.75rem'}>
          <Chip
            sx={{ borderRadius: '.5rem' }}
            color="secondary"
            label={
              <Box display={'flex'} alignItems={'center'}>
                <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
                {formatDate(task.updatedAt)}
              </Box>
            }
          />
        </Box>

        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {task.assignees.map((assignee, index) => (
              <Box
                key={assignee.id}
                sx={{
                  position: 'relative',
                  ml: index !== 0 ? '-3px' : 0,
                  zIndex: task.assignees.length - index,
                }}
              >
                <Image
                  src={assignee.avatarUrl}
                  width={20}
                  height={20}
                  alt={assignee.name}
                />
              </Box>
            ))}

            <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
              <FolderOpenIcon
                sx={{ mr: 1, color: 'text.secondary', fontSize: '1rem' }}
              />
              <Typography
                fontSize={'.625rem'}
                fontWeight={500}
                color={'text.secondary'}
              >
                {task.attachments.length} files
              </Typography>
            </Box>
          </Box>

          <Box mt={'1.25rem'}>
            <LinerProgressApp size="small" color={color} value={50} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskDetails;
