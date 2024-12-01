import {PostMetadata} from '@/app/posts/postsMetadata';
import Image from 'next/image';
import Link from 'next/link';

export default function PostPreview({post}: {post: PostMetadata}) {
  return (
    <div className="w-full">
      <Link className="block overflow-hidden h-[330px]" href={`/posts/${post.id}`}>
        <Image
          className="object-cover w-full h-full transition-all duration-300 ease-in-out scale-100 hover:scale-110"
          src={post.previewImg}
          alt={post.description}
        />
      </Link>
      <div className="flex flex-col gap-2 px-10 mt-6">
        <h2 className="text-2xl font-bold">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </h2>
        <h3 className="text-xl font-bold">{post.subtitle}</h3>
        <p>{post.description}</p>
      </div>
    </div>
  );
}
