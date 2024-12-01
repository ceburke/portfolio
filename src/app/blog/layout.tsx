import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Claire Burke | Blog',
  description: 'Collection of my work, thoughts, and passion projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
