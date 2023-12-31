import Image from 'next/image';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';

import Header from './components/Header';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        height: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        py: { xs: '1rem', sm: '2rem', md: '3rem' },
      }}
    >
      <Header />

      <Box component="main" sx={{ my: { xs: 0, sm: 'auto' } }}>
        <Container>
          <Grid container alignItems={'center'}>
            <Grid
              item
              xs={12}
              md={7}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <Image
                priority
                src={'/images/computer-login.svg'}
                alt={'computer login'}
                width={600}
                height={350}
                style={{
                  paddingRight: '4rem',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Grid>

            <Grid item xs={12} md={5}>
              <LoginForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LoginPage;
