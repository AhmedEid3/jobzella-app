import { Toolbar } from '@mui/material';

type ToolbarAppProps = React.ComponentProps<typeof Toolbar>;

const ToolbarApp = ({ children, sx }: ToolbarAppProps) => {
  return (
    <Toolbar
      sx={{
        minHeight: {
          xs: '64px',
          md: '85px',
        },
        flexWrap: 'wrap',
        ...sx,
      }}
    >
      {children}
    </Toolbar>
  );
};

export default ToolbarApp;
