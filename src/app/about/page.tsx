import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Claire Burke | About',
  description: `I'm Claire, a product designer with a passion for UI and UX.`,
};

export default function About() {
  return (
    <div>
      <Navbar />
      <h1>About me</h1>
      <Footer />
    </div>
  );
}
