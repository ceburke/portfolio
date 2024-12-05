'use client';
import {useState, useEffect} from 'react';

import {PostData} from '@/app/posts/postsData';
import PostPreview from './PostPreview';

function useWindowWidth(): number {
  const [width, setWidth] = useState(-1);
  useEffect(() => {
    if (width === -1) {
      setWidth(window.innerWidth);
    }
  }, [width]);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
}

export default function PostsCarousel({posts}: {posts: PostData[]}) {
  const width = useWindowWidth();
  const [page, setPage] = useState(0);
  const postsPerPage = width < 640 ? 1 : 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="w-full overflow-hidden mb-10">
      <ul
        className="flex overflow-visible relative transition-all duration-300 ease-in-out"
        style={{
          // keep last page filled with posts
          left: `-${
            Math.min(page * postsPerPage, Math.max(0, posts.length - postsPerPage)) *
            ((1 / postsPerPage) * 100)
          }%`,
        }}
      >
        {posts.map((post) => (
          <li key={post.id} className="flex-none" style={{width: `${(1 / postsPerPage) * 100}%`}}>
            <PostPreview key={post.id} post={post} />
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div className="flex items-center justify-center w-full gap-10 my-10">
          <button
            aria-label="Previous"
            className="text-4xl disabled:dark:text-gray-700 disabled:text-gray-400 transition-all ease-in-out enabled:hover:scale-125"
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            aria-label="Next"
            className="text-4xl disabled:dark:text-gray-700 disabled:text-gray-400 transition-all ease-in-out enabled:hover:scale-125"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages - 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
