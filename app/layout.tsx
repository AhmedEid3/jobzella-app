import { nunitoFont } from '@/Theme/fonts';
import ThemeRegistry from '@/Theme/ThemeRegistry';

export const metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
