import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {MAX_CONTENT_WIDTH} from '@/constants';
import {postsData} from './posts/postsData';
import PostCarousel from '@/components/PostCarousel';

export default function Home() {
  return (
    <div className="dark dark:bg-black dark:text-white items-center justify-items-center min-h-screen">
      <Navbar />
      <p
        className="text-4xl mt-24 mb-16 px-8 md:px-20 lg:px-36"
        style={{maxWidth: `${MAX_CONTENT_WIDTH}px`}}
      >
        I‘m a <span className="font-bold">designer who codes</span>, driven by a passion for{' '}
        <span className="font-bold">accessibility</span> and creating products that make a{' '}
        <span className="font-bold">positive social impact.</span>
      </p>
      <PostCarousel posts={postsData.filter((post) => post.group === 'work')} />
      <Footer />
    </div>
  );
}
