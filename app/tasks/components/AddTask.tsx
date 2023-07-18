'use client';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Typography } from '@mui/material';

import DialogApp from '@/components/DialogApp/DialogApp';
import useDialog from '@/components/DialogApp/useDialog';

interface Props {
  variant?: 'contained' | 'dashed';
}

const AddTask = ({ variant = 'contained' }: Props) => {
  const { onClose, onOpen, open } = useDialog();

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

  return (
    <>
      {variant === 'contained' ? Contained : Dashed}

      <DialogApp
        title="Add task"
        titleAgreeButton="Add task"
        open={open}
        onClose={onClose}
        onAgree={() => {}}
      >
        <Typography>Add Task Form</Typography>
      </DialogApp>
    </>
  );
};

export default AddTask;
