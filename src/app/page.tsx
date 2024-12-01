import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="dark dark:bg-black dark:text-white items-center justify-items-center min-h-screen">
      <Navbar />
      <Link href="/blog/information-architecture-and-responsive-design">
        Information architecture and responsive design
      </Link>
      <Footer />
    </div>
  );
}
