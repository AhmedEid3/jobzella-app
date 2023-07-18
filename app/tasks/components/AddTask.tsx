import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';

const AddTask = () => {
  return (
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
    />
  );
};

export default AddTask;
