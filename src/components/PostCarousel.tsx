import {PostMetadata} from '@/app/posts/postsMetadata';
import PostPreview from './PostPreview';

export default function PostsCarousel({posts}: {posts: PostMetadata[]}) {
  return (
    <div>
      <ul className="flex gap-2">
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
