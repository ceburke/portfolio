import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {MAX_POST_WIDTH} from '@/constants';
import {postsData} from '../postsData';
import Link from 'next/link';

export async function generateStaticParams() {
  return postsData.map((postData) => ({
    id: postData.id,
  }));
}

export async function generateMetadata({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const post = postsData.find((post) => post.id === id);
  return {
    title: post?.title || 'Claire Burke | Posts',
    description: post?.description || 'Collecting my work, thoughts, and passion projects.',
  };
}

export default async function Post({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const postIndex = postsData.findIndex((post) => post.id === id);
  const post = postsData[postIndex];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="dark:bg-black dark:text-white">
      <Navbar />
      <article
        className="mx-auto p-5 lg:px-0 *:my-5 w-full"
        style={{maxWidth: `${MAX_POST_WIDTH}px`}}
      >
        {post.content}
        <div className="w-full flex justify-end mt-10">
          <Link
            className="group flex items-center hover:underline"
            href={`./${postsData[postIndex < postsData.length - 1 ? postIndex + 1 : 0].id}`}
          >
            Next{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-8 transition-all ease-in-outgroup-hover:translate-x-10 group-hover:ml-5 group-hover:scale-105 group-active:scale-125"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  );
}
