'use client';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Button, TextField } from '@mui/material';

import DialogApp from '@/components/DialogApp/DialogApp';
import useDialog from '@/components/DialogApp/useDialog';
import InputLabelApp from '@/components/InputLabelApp';

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
        <Box sx={{ py: '1.5rem' }}>
          <Box>
            <InputLabelApp htmlFor="name">Name</InputLabelApp>
            <TextField
              fullWidth
              hiddenLabel
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
              id="description"
              variant="filled"
              size="small"
            />
          </Box>

          <Box>
            <InputLabelApp htmlFor="status"> Choose status</InputLabelApp>
          </Box>
        </Box>
      </DialogApp>
    </>
  );
};

export default AddTask;
