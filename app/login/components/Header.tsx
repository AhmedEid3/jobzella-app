import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box component={'header'} sx={{ mb: { xs: '1rem', md: 0 } }}>
      <nav>
        <Container>
          <Typography component={'h1'} variant={'h1'}>
            <Image
              priority
              src={'/images/logo.svg'}
              alt={'logo'}
              width={175}
              height={48}
            />
          </Typography>
        </Container>
      </nav>
    </Box>
  );
};

export default Header;
