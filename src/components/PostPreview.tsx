import {PostMetadata} from '@/app/posts/postsMetadata';
import Image from 'next/image';
import Link from 'next/link';

export default function PostPreview({post}: {post: PostMetadata}) {
  return (
    <div className="w-full border-[1px]">
      <Link className="block overflow-hidden h-[330px]" href={`/posts/${post.id}`}>
        <Image
          className="object-cover w-full h-full"
          src={post.previewImg}
          alt={post.description}
        />
      </Link>
      <h2>
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.subtitle}</p>
      <p>{post.description}</p>
    </div>
  );
}
