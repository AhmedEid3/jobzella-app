import Link from 'next/link';
import { Box, Link as MuiLink, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        height: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pb: '2rem',
      }}
    >
      <Box m={'auto'}>
        <Typography align="center" color={'white'} variant="h1">
          Home Page
        </Typography>

        <MuiLink component={Link} href={'/login'}>
          <Typography
            align="center"
            color={'text.primary'}
            sx={{ textDecoration: 'underline' }}
          >
            Login Page
          </Typography>
        </MuiLink>

        <MuiLink component={Link} href={'/tasks'}>
          <Typography
            align="center"
            color={'text.primary'}
            sx={{ textDecoration: 'underline' }}
          >
            Tasks Page
          </Typography>
        </MuiLink>
      </Box>
    </Box>
  );
};

export default HomePage;
