import Image from 'next/image';
import { Container, Typography } from '@mui/material';

const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;
