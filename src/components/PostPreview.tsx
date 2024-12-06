import {PostData} from '@/app/posts/postsData';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';

export default function PostPreview({post}: {post: PostData}) {
  return (
    <div className="w-full">
      <Link className="block overflow-hidden h-[330px] relative" href={`/posts/${post.id}`}>
        <ExportedImage
          className="object-cover w-full h-full transition-all duration-300 ease-in-out scale-100 hover:scale-110"
          fill
          src={post.previewImg}
          alt={post.description}
        />
      </Link>
      <div className="flex flex-col gap-2 px-5 lg:px-10 mt-6">
        <h2 className="text-2xl font-bold">
          <Link className="hover:underline" href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        <h3 className="text-xl font-bold">{post.subtitle}</h3>
        <p>{post.description}</p>
      </div>
    </div>
  );
}
