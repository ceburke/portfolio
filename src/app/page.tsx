import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {MAX_CONTENT_WIDTH} from '@/constants';
import Link from 'next/link';
import {postsMetadata} from './posts/postsMetadata';
import PostCarousel from '@/components/PostCarousel';

export default function Home() {
  return (
    <div className="dark dark:bg-black dark:text-white items-center justify-items-center min-h-screen">
      <Navbar />
      <div>
        I‘m a designer who codes, driven by a passion for accessibility and creating products that
        make a positive social impact.
      </div>
      <PostCarousel posts={postsMetadata} />
      <main style={{maxWidth: `${MAX_CONTENT_WIDTH}px`}}>
        <Link href="/posts/information-architecture-and-responsive-design">
          Information architecture and responsive design
        </Link>
      </main>
      <Footer />
    </div>
  );
}
