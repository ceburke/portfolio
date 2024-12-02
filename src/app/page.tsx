import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {MAX_CONTENT_WIDTH} from '@/constants';

export default function Home() {
  return (
    <div className=" dark:bg-black dark:text-white flex flex-col items-center justify-items-center min-h-screen">
      <Navbar />
      <div className="mx-auto flex-1" style={{maxWidth: `${MAX_CONTENT_WIDTH}px`}}>
        <div className="mt-[15%] pt-20 px-5 mb-16 self-start -ml-5">
          <p className="text-4xl font-bold mb-4">Under construction, please come back soon</p>
          <p>Thanks for bearing with me as I as update my portfolio with my most recent work.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
