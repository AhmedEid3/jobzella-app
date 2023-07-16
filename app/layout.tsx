import { Nunito, Roboto } from 'next/font/google';
import Box from '@mui/material/Box';

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: '',
  description: '',
};

export const robotoFont = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const nunitoFont = Nunito({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>
        <ThemeRegistry>
          <Box component="main">{children}</Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
