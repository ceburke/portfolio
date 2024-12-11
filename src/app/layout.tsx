import type {Metadata} from 'next';
import {Emblema_One, Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const emblemaOne = Emblema_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-emblema-one',
});

export const metadata: Metadata = {
  title: 'Claire Burke',
  description: 'A designer and developer creating for positive impact.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${emblemaOne.variable} antialiased`}>{children}</body>
    </html>
  );
}
