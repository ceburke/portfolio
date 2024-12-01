import PostFLCNews from './PostFLCNews';
import PostTalonDesignSystem from './PostTalonDesignSystem';
import PostTemplate from './postTemplate/PostTemplate';

export interface PostMetadata {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  content: React.ReactNode;
}

export const postsMetadata: PostMetadata[] = [
  {
    id: 'flc-news-architecture-and-design',
    title: 'Information architecture and responsive design',
    subtitle: 'FLC News',
    description:
      'Redesigning a primary marketing tool with a thousands of posts deep database, and users from every walk of life.',
    content: <PostFLCNews />,
  },
  {
    id: 'talon-design-system',
    title: 'Building a foundation for the future',
    subtitle: 'Talon Design System',
    description:
      'The do’s and don’ts of pitching, planning, building, and implementation a grassroots design system. The process of bringing a higher ed institution’s digital presence into the modern era.',
    content: <PostTalonDesignSystem />,
  },
];

if (process?.env.NODE_ENV === 'development') {
  postsMetadata.push({
    id: 'template',
    title: 'Template Title',
    subtitle: 'Template Subtitle',
    description: 'Template Description',
    content: <PostTemplate />,
  });
}
