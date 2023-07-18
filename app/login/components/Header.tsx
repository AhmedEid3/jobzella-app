import Link from 'next/link';
import { Routes } from '@/routes/routes';
import { Box, Container, Typography } from '@mui/material';

import LightLogo from '@/components/Logo/LightLogo';

const Header = () => {
  return (
    <Box component={'header'} sx={{ mb: { xs: '1rem', md: 0 } }}>
      <nav>
        <Container>
          <Link href={Routes.homeLink}>
            <Typography component={'h1'} variant={'h1'}>
              <LightLogo />
            </Typography>
          </Link>
        </Container>
      </nav>
    </Box>
  );
};

export default Header;
