'use client';

import { useState } from 'react';
import { TaskStatus } from '@/models/task';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

import DialogApp from '@/components/DialogApp/DialogApp';
import useDialog from '@/components/DialogApp/useDialog';
import InputLabelApp from '@/components/InputLabelApp';

import { useTasks } from '../hooks/useTasks';

interface Props {
  variant?: 'contained' | 'dashed';
}

const AddTask = ({ variant = 'contained' }: Props) => {
  const { addTask } = useTasks();
  const { onClose, onOpen, open } = useDialog();

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState(TaskStatus.TODO);

  const Contained = (
    <Button
      startIcon={<AddCircleOutlineIcon />}
      variant="contained"
      sx={{ width: '100%', px: 6 }}
      onClick={onOpen}
    >
      Add Task
    </Button>
  );

  const Dashed = (
    <Button
      sx={{
        width: '100%',
        borderWidth: '1px',
        borderStyle: 'dashed',
        borderColor: 'primary.main',
        borderRadius: '.5rem',
        py: '1rem',
      }}
      startIcon={<AddCircleOutlineIcon />}
      onClick={onOpen}
    />
  );

  const handleAddTask = () => {
    addTask(name, description, status);
    setName('');
    setDescription('');
    setStatus(TaskStatus.TODO);
  };

  return (
    <>
      {variant === 'contained' ? Contained : Dashed}

      <DialogApp
        title="Add task"
        titleAgreeButton="Add task"
        open={open}
        onClose={onClose}
        onAgree={handleAddTask}
      >
        <Box
          sx={{
            py: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1.5rem',
          }}
        >
          <Box>
            <InputLabelApp htmlFor="name">Name</InputLabelApp>
            <TextField
              fullWidth
              hiddenLabel
              value={name}
              onChange={(event) => setName(event.target.value)}
              id="name"
              variant="filled"
              size="small"
            />
          </Box>

          <Box>
            <InputLabelApp htmlFor="description">Description</InputLabelApp>

            <TextField
              fullWidth
              hiddenLabel
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              id="description"
              variant="filled"
              size="small"
              multiline
              rows={2}
            />
          </Box>

          <Box>
            <InputLabelApp htmlFor="status"> Choose status</InputLabelApp>

            <FormControl>
              <RadioGroup
                row
                name="status"
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as TaskStatus)
                }
                sx={{ textTransform: 'capitalize' }}
              >
                <FormControlLabel
                  value={TaskStatus.TODO}
                  control={<Radio />}
                  label={TaskStatus.TODO.toLowerCase()}
                />
                <FormControlLabel
                  value={TaskStatus.IN_PROGRESS}
                  control={<Radio />}
                  label={TaskStatus.IN_PROGRESS.toLowerCase().replace('_', ' ')}
                />
                <FormControlLabel
                  value={TaskStatus.DONE}
                  control={<Radio />}
                  label={TaskStatus.DONE.toLowerCase()}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </DialogApp>
    </>
  );
};

export default AddTask;
