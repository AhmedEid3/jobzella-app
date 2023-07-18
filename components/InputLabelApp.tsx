import { poppinsFont } from '@/Theme/fonts';
import { Box, InputLabel } from '@mui/material';

type InputLabelProps = React.ComponentProps<typeof InputLabel>;

const InputLabelApp = (props: InputLabelProps) => {
  return (
    <InputLabel
      {...props}
      sx={{
        fontWeight: 600,
        fontFamily: poppinsFont.style.fontFamily,
        ...props.sx,
      }}
    >
      {props.children}{' '}
      <Box component={'sup'} color={'error.main'}>
        *
      </Box>
    </InputLabel>
  );
};

export default InputLabelApp;
