import {StaticImageData} from 'next/image';
import PostFLCNews from './postFLCNews/PostFLCNews';
import PostTalonDesignSystem from './postTalonDesignSystem/PostTalonDesignSystem';
import PostTemplate from './postTemplate/PostTemplate';
import flcNewsPreview from './postFLCNews/flc-news-preview.png';
import flcNewsPreview2 from './postFLCNews/flc-news-preview-2.png';
import talonPreview from './postTalonDesignSystem/talon-preview.png';
import theOldFortPreview from './postTheOldFort/the-old-fort-preview.png';
import theOldFortPreview2 from './postTheOldFort/the-old-fort-preview-2.png';
import large from './postTemplate/large.png';
import small from './postTemplate/small.png';
import PostTheOldFort from './postTheOldFort/PostTheOldFort';

export interface PostMetadata {
  id: string;
  previewImg: string | StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  content: React.ReactNode;
}

export const postsMetadata: PostMetadata[] = [
  {
    id: 'flc-news-architecture-and-design',
    previewImg: flcNewsPreview2,
    title: 'Information architecture and responsive design',
    subtitle: 'FLC News',
    description:
      'Redesigning a primary marketing tool with a thousands of posts deep database, and users from every walk of life.',
    content: <PostFLCNews />,
  },
  {
    id: 'talon-design-system',
    previewImg: small,
    title: 'Building a foundation for the future',
    subtitle: 'Talon Design System',
    description:
      'The do’s and don’ts of pitching, planning, building, and implementation a grassroots design system. The process of bringing a higher ed institution’s digital presence into the modern era.',
    content: <PostTalonDesignSystem />,
  },
  {
    id: 'the-old-fort',
    previewImg: theOldFortPreview2,
    title: 'Organization and identity',
    subtitle: 'The Old Fort',
    description:
      'Breathing new life into a unique, research-based institution. Creating a style that highlights the unique character of the content and users.',
    content: <PostTheOldFort />,
  },
];

if (process?.env.NODE_ENV === 'development') {
  postsMetadata.push({
    id: 'template',
    previewImg: large,
    title: 'Template Title',
    subtitle: 'Template Subtitle',
    description: 'Template Description',
    content: <PostTemplate />,
  });
}
