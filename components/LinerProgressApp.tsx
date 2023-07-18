import { LinearProgress } from '@mui/material';

type LinearProgressProps = React.ComponentProps<typeof LinearProgress>;

interface Props extends LinearProgressProps {
  size?: 'small' | 'medium' | 'large';
}

const LinerProgressApp = (props: Props) => {
  const { size } = props;
  let value = '.625rem';

  if (size === 'small') {
    value = '0.375rem';
  } else if (size === 'medium') {
    value = '.625rem';
  } else if (size === 'large') {
    value = '1.25rem';
  }

  return (
    <LinearProgress
      variant="determinate"
      {...props}
      sx={{ height: value, borderRadius: value, ...props.sx }}
    />
  );
};

export default LinerProgressApp;
