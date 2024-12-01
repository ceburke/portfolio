'use client';
import {useState, useEffect} from 'react';

import {PostMetadata} from '@/app/posts/postsMetadata';
import PostPreview from './PostPreview';

function useWindowWidth(): number {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}

export default function PostsCarousel({posts}: {posts: PostMetadata[]}) {
  const width = useWindowWidth();
  const [page, setPage] = useState(0);
  const postsPerPage = width < 640 ? 1 : 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="w-full overflow-hidden">
      <ul
        className="flex overflow-visible relative transition-all duration-200 ease-in-out"
        style={{left: `-${page * postsPerPage * ((1 / postsPerPage) * 100)}%`}}
      >
        {posts.map((post) => (
          <li key={post.id} className="flex-none" style={{width: `${(1 / postsPerPage) * 100}%`}}>
            <PostPreview key={post.id} post={post} />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center w-full gap-5">
        <button
          aria-label="Previous"
          className="text-4xl disabled:dark:text-gray-700 disabled:text-gray-400"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          {'<'}
        </button>
        <button
          aria-label="Next"
          className="text-4xl disabled:dark:text-gray-700 disabled:text-gray-400"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages - 1}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}
