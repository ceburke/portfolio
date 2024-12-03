import { StaticImageData } from "next/image";
import PostFLCNews from "./postFLCNews/PostFLCNews";
import PostTalonDesignSystem from "./postTalonDesignSystem/PostTalonDesignSystem";
import PostTemplate from "./postTemplate/PostTemplate";
import flcNewsPreview2 from "./postFLCNews/flc-news-preview-2.png";
import theOldFortPreview2 from "./postTheOldFort/the-old-fort-preview-2.png";
import large from "./postTemplate/large.png";
import small from "./postTemplate/small.png";
import PostTheOldFort from "./postTheOldFort/PostTheOldFort";
import PostChildrensBook from "./postChildrensBook/postChildrensBook";
import PreviewChildrens from "./postChildrensBook/previewChildrens.jpg";
import PostSolvedInMotion from "./postSolvedInMotion/postSolvedInMotion";
import PostCollagesAndCovers from "./postCollagesAndCovers/postCollagesAndCovers";
import PreviewCollage from "./postCollagesAndCovers/previewCollage.jpg";

export interface PostData {
  id: string;
  previewImg: string | StaticImageData;
  title: string;
  subtitle: string;
  group: "work" | "personal";
  description: string;
  content: React.ReactNode;
}

export const postsData: PostData[] = [
  {
    id: "flc-news-architecture-and-design",
    previewImg: flcNewsPreview2,
    title: "Information architecture and responsive design",
    subtitle: "FLC News",
    group: "work",
    description:
      "Redesigning a primary marketing tool with a thousands of posts deep database, and users from every walk of life.",
    content: <PostFLCNews />,
  },
  {
    id: "talon-design-system",
    previewImg: small,
    title: "Building a foundation for the future",
    subtitle: "Talon Design System",
    group: "work",
    description:
      "The do’s and don’ts of pitching, planning, building, and implementation a grassroots design system. The process of bringing a higher ed institution’s digital presence into the modern era.",
    content: <PostTalonDesignSystem />,
  },
  {
    id: "the-old-fort",
    previewImg: theOldFortPreview2,
    title: "Organization and identity",
    subtitle: "The Old Fort",
    group: "work",
    description:
      "Breathing new life into a unique, research-based institution. Creating a style that highlights the unique character of the content and users.",
    content: <PostTheOldFort />,
  },
  {
    id: "childrens-book",
    previewImg: PreviewChildrens,
    title: "Children’s book illustrator",
    subtitle: "The Adventures of Ashe and Cat: The Mountain Bike Flat",
    group: "personal",
    description:
      "Illustrated a 30-page children’s book about mountain biking, and how to persevere in the face of challenges.",
    content: <PostChildrensBook />,
  },
  {
    id: "solved-in-motion",
    previewImg: flcNewsPreview2,
    title: "Creating immersive experiences",
    subtitle: "Solved in motion",
    group: "personal",
    description:
      "My thesis project from the University of Virginia Studio Art. A leap into installation art.",
    content: <PostSolvedInMotion />,
  },
  {
    id: "collages-and-covers",
    previewImg: PreviewCollage,
    title: "Collages and covers",
    subtitle: "Original artwork",
    group: "personal",
    description:
      "Inspired by a love of reading, occasional boredom, and above-average scissor skills.",
    content: <PostCollagesAndCovers />,
  },
];

if (process?.env.NODE_ENV === "development") {
  postsData.push({
    id: "template",
    previewImg: large,
    title: "Template title",
    subtitle: "Template subtitle",
    group: "work",
    description: "Template description",
    content: <PostTemplate />,
  });
}
