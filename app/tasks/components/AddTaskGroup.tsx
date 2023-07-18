'use client';

import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Button, TextField } from '@mui/material';

import DialogApp from '@/components/DialogApp/DialogApp';
import useDialog from '@/components/DialogApp/useDialog';
import InputLabelApp from '@/components/InputLabelApp';

import useTaskGroups from '../hooks/useTaskGroups';

interface Props {
  variant?: 'contained' | 'dashed';
}

const AddTaskGroup = ({ variant = 'contained' }: Props) => {
  const { taskGroups, addTaskGroup } = useTaskGroups();
  const { onClose, onOpen, open } = useDialog();

  const [name, setName] = useState<string>('');

  const Contained = (
    <Button
      startIcon={<AddCircleOutlineIcon />}
      variant="contained"
      sx={{ width: '100%', px: 6 }}
      onClick={onOpen}
    >
      Add Group
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

  const handleAddTaskGroup = () => {
    addTaskGroup(name);
    setName('');
  };

  return (
    <>
      {variant === 'contained' ? Contained : Dashed}

      <DialogApp
        title="Add Group"
        titleAgreeButton="Add Group"
        open={open}
        onClose={onClose}
        onAgree={handleAddTaskGroup}
      >
        <Box sx={{ py: '1.5rem' }}>
          <InputLabelApp htmlFor="name">Name</InputLabelApp>

          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            hiddenLabel
            id="name"
            variant="filled"
            size="small"
          />
        </Box>
      </DialogApp>
    </>
  );
};

export default AddTaskGroup;
