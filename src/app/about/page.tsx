import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type {Metadata} from 'next';
import Image from 'next/image';
import headshot from './headshot.jpg';
import Link from 'next/link';
import ToolsList from '@/components/tools/ToolsList';
import {toolsData} from '@/components/tools/toolsData';
import PostCarousel from '@/components/PostCarousel';
import {postsData} from '../posts/postsData';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type {Metadata} from 'next';
import ExportedImage from 'next-image-export-optimizer';
import headshot from './headshot.png';
import Link from 'next/link';
import ToolsList from '@/components/tools/ToolsList';
import {toolsData} from '@/components/tools/toolsData';
import PostCarousel from '@/components/PostCarousel';
import {postsData} from '../posts/postsData';

export const metadata: Metadata = {
  title: 'Claire Burke | About',
  description: `I'm Claire, a product designer with a passion for UI and UX.`,
};

const ABOUT_PAGE_MAX_CONTENT_WIDTH = 1175;

export default function About() {
  return (
    <div>
      <Navbar />
      <main
        className="mx-auto mt-10 px-5 lg:px-0"
        style={{maxWidth: `${ABOUT_PAGE_MAX_CONTENT_WIDTH}px`}}
      >
        <div className="flex flex-col md:flex-row items-center justify-start gap-10 md:gap-20">
          <ExportedImage
            src={headshot}
            alt="Claire headshot"
            className="md:w-1/3 md:flex-none"
            sizes="100vw"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">Background and vision</h1>
            <p>
              I enjoy helping others discover new experiences, solve problems, and enrich their
              daily lives. My background as an environmental consultant and graphic designer
              equipped me with strong skills in understanding people, addressing their needs, and
              creating accessible solutions. Transitioning into UX/UI design has allowed me to
              channel those skills into a career where I can continue making meaningful,
              user-centered impacts.
            </p>
            <p>
              Outside of work, I love mountain biking, playing ultimate frisbee, rekindling my love
              of piano, collecting memes, and reading fantasy books (current read: The Wandering
              Inn).
            </p>
            <Link
              className="flex gap-2 items-center underline hover:font-bold"
              href="https://www.linkedin.com/in/claire-burke/"
              title="Claire's LinkedIn profile"
              target="_blank"
            >
              Learn more about my career path on LinkedIn
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="mt-5">
              <p className="font-bold">University of Virginia</p>
              <p> B.A. Environmental Science, B.A. Studio Art</p>
            </div>
            <div>
              <p className="font-bold">Coursera</p>
              <p>Google UX Design Professional Certificate</p>
            </div>
          </div>
        </div>

        <div className="mt-9">
          <h2 className="text-3xl font-bold mb-8">Top tools</h2>
          <ToolsList toolsData={toolsData} />
        </div>

        <h2 className="text-3xl font-bold mt-14 mb-10">Personal projects</h2>
      </main>
      <PostCarousel posts={postsData.filter((post) => post.group === 'personal')} />
      <Footer />
    </div>
  );
}
