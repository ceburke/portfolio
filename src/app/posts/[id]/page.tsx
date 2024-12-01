import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {MAX_POST_WIDTH} from '@/constants';
import {postsMetadata} from '../postsMetadata';

export async function generateStaticParams() {
  return postsMetadata.map((postMetadata) => ({
    id: postMetadata.id,
  }));
}

export async function generateMetadata({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const post = postsMetadata.find((post) => post.id === id);
  return {
    title: post?.title || 'Claire Burke | Posts',
    description: post?.description || 'Collecting my work, thoughts, and passion projects.',
  };
}

export default async function Post({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const post = postsMetadata.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="dark:bg-black dark:text-white">
      <Navbar />
      <article className="mx-auto p-5 lg:px-0 *:my-5" style={{maxWidth: `${MAX_POST_WIDTH}px`}}>
        {post.content}
      </article>
      <Footer />
    </div>
  );
}
