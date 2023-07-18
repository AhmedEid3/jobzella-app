import { Nunito, Poppins } from 'next/font/google';

export const poppinsFont = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const nunitoFont = Nunito({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});
