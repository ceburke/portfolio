import { StaticImageData } from "next/image";
import PostFLCNews from "./postFLCNews/PostFLCNews";
import PostTalon from "./postTalon/PostTalon";
import PostTemplate from "./postTemplate/PostTemplate";
import PostStrava from "./postStrava/PostStrava";
import PostMaps from "./postMaps/PostMaps";
import flcNewsPreview2 from "./postFLCNews/flc-news-preview-2.png";
import theOldFortPreview2 from "./postTheOldFort/the-old-fort-preview-2.png";
import large from "./postTemplate/large.png";
import small from "./postTemplate/small.png";
import PostTheOldFort from "./postTheOldFort/PostTheOldFort";
import PostChildrensBook from "./postChildrensBook/postChildrensBook";
import PreviewChildrens from "./postChildrensBook/previewChildrens.jpg";
import PostSolvedInMotion from "./postSolvedInMotion/postSolvedInMotion";
import PreviewSolvedInMotion from "./postSolvedInMotion/previewSolvedInMotion.jpg";
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
    subtitle: "Fort Lewis College News",
    group: "work",
    description:
      "Transforming thousands of articles into a streamlined, responsive platform. Improved readability, navigation, and accessibility while showcasing strategic initiatives.",
    content: <PostFLCNews />,
  },
  {
    id: "talon-design-system",
    previewImg: small,
    title: "Building a foundation for the future",
    subtitle: "Talon Design System",
    group: "work",
    description:
      "Redefining a higher ed institution’s digital presence. From pitching to designing and developing, creating a modern design system that sets the stage for long-term growth.",
    content: <PostTalon />,
  },
  {
    id: "the-old-fort",
    previewImg: theOldFortPreview2,
    title: "Organization and identity",
    subtitle: "The Old Fort",
    group: "work",
    description:
      "Revitalizing a research-based institution with a tailored visual style and structure that highlights the unique character of its users and content.",
    content: <PostTheOldFort />,
  },
  {
    id: "strava",
    previewImg: theOldFortPreview2,
    title: "Keeping pace with the competition",
    subtitle: "Trail conditions reporting for Strava",
    group: "work",
    description:
      "Exploring a theoretical user flow for reporting trail conditions, and how it could be integrated into the Strava app.",
    content: <PostStrava />,
  },
  {
    id: "maps",
    previewImg: theOldFortPreview2,
    title: "Better late than never",
    subtitle: "Automatic ETA updates for Google Maps",
    group: "work",
    description:
      "A concept for reducing distractions on the go. Learn how an automatic notification feature could keep travelers informed without pulling them away from the journey.",
    content: <PostMaps />,
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
