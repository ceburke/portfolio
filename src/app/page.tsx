import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {postsData} from './posts/postsData';
import PostCarousel from '@/components/PostCarousel';
import HeroText from '@/components/HeroText';

export default function Home() {
  return (
    <div className="dark dark:bg-black dark:text-white items-center justify-items-center min-h-screen">
      <Navbar />
      <HeroText />
      <PostCarousel posts={postsData.filter((post) => post.group === 'work')} />
      <Footer />
    </div>
  );
}
