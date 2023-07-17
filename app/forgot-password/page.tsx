import Link from 'next/link';
import { Box, Link as MuiLink, Typography } from '@mui/material';

const ForgotPasswordPage = () => {
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
          Forgot Password Page
        </Typography>

        <MuiLink component={Link} href={'/login'}>
          <Typography
            align="center"
            color={'text.primary'}
            sx={{ textDecoration: 'underline' }}
          >
            Back to Login Page
          </Typography>
        </MuiLink>
      </Box>
    </Box>
  );
};

export default ForgotPasswordPage;
