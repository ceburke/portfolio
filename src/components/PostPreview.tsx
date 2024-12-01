import {PostMetadata} from '@/app/posts/postsMetadata';
import Link from 'next/link';

export default function PostPreview({post}: {post: PostMetadata}) {
  return (
    <div className="w-1/3">
      <Link href={`/posts/${post.id}`}>
        <div className="bg-orange-300 h-60 w-full" />
      </Link>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
      {post.subtitle}
      {post.description}
    </div>
  );
}
