import { StaticImageData } from "next/image";
import PostChildrensBook from "./postChildrensBook/postChildrensBook";
import PreviewChildrens from "./postChildrensBook/previewChildrens.jpg";
import PostCollagesAndCovers from "./postCollagesAndCovers/postCollagesAndCovers";
import PreviewCollage from "./postCollagesAndCovers/previewCollage.jpg";
import PostFLCNews from "./postFLCNews/PostFLCNews";
import PreviewFLCNews from "./postFLCNews/previewFLCNews.jpg";
import PostSolvedInMotion from "./postSolvedInMotion/postSolvedInMotion";
import PreviewSolvedInMotion from "./postSolvedInMotion/previewSolvedInMotion.jpg";
import PostTalon from "./postTalon/PostTalon";
import PreviewTalon from "./postTalon/previewTalon.jpg";
import large from "./postTemplate/large.png";
import PostTemplate from "./postTemplate/PostTemplate";
import PostTheOldFort from "./postTheOldFort/PostTheOldFort";
import PreviewTheOldFort from "./postTheOldFort/previewTheOldFort.jpg";

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
    previewImg: PreviewFLCNews,
    title: "Information architecture and responsive redesign",
    subtitle: "Fort Lewis College News",
    group: "work",
    description:
      "Making a core marketing tool relevant and readable. Transforming thousands of articles into a streamlined, responsive platform.",
    content: <PostFLCNews />,
  },
  {
    id: "talon-design-system",
    previewImg: PreviewTalon,
    title: "Building a foundation for the future",
    subtitle: "Talon Design System",
    group: "work",
    description:
      "Redefining a higher ed institution’s digital presence. From pitching to designing and developing, creating a modern design system that sets the stage for long-term growth.",
    content: <PostTalon />,
  },
  {
    id: "the-old-fort",
    previewImg: PreviewTheOldFort,
    title: "Organization and identity",
    subtitle: "The Old Fort",
    group: "work",
    description:
      "Revitalizing a research-based institution with a tailored visual style and structure that highlights the unique character of its users and content.",
    content: <PostTheOldFort />,
  },
  {
    id: "childrens-book",
    previewImg: PreviewChildrens,
    title: "The Adventures of Ashe and Cat",
    subtitle: "Children's book illustrator",
    group: "personal",
    description:
      "An illustrated 34-page children’s book about facing challenges head-on and finding joy on two wheels.",
    content: <PostChildrensBook />,
  },
  {
    id: "solved-in-motion",
    previewImg: PreviewSolvedInMotion,
    title: "Solved in motion",
    subtitle: "Studio Art thesis exhibition",
    group: "personal",
    description:
      "An exploration of installation art, blending movement and space to create an unforgettable sensory experience.",
    content: <PostSolvedInMotion />,
  },
  {
    id: "collages-and-covers",
    previewImg: PreviewCollage,
    title: "Covers and collages",
    subtitle: "Original artwork",
    group: "personal",
    description:
      "Playful book covers and collage mashups inspired by a love of reading, strangeness, and a knack for creative composition.",
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
