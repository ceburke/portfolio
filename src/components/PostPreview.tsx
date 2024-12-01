import {PostMetadata} from '@/app/posts/postsMetadata';
import Image from 'next/image';
import Link from 'next/link';

export default function PostPreview({post}: {post: PostMetadata}) {
  return (
    <div className="w-full h-full border-[1px] border-orange-300">
      <Link href={`/posts/${post.id}`}>
        <Image className="object-cover" src={post.previewImg} alt={post.description} />
      </Link>
      <h2>
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.subtitle}</p>
      <p>{post.description}</p>
    </div>
  );
}
