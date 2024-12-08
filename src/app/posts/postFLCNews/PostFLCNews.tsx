import { ToolData, toolsData } from "@/components/tools/toolsData";
import {
  Double,
  ExtendedPostTitle,
  Heading2,
  Heading3,
  PostImage,
  Triple,
} from "../postComponents";
import large from "./large.png";
import small from "./small.png";
import tallNarrow from "./tall-narrow.png";
import wideShort from "./wide-short.png";
import Link from "next/link";

export default function PostFLCNews() {
  return (
    <>
      <ExtendedPostTitle
        title="Fort Lewis College News Redesign"
        description="The Fort Lewis College News site is a central marketing and storytelling tool for the college, showcasing events, achievements, and strategic initiatives. However, the outdated, non-branded, and unresponsive design created barriers for users and limited its effectiveness in broader marketing efforts like fundraising, outreach, and email campaigns. This redesign transformed the News site into a modern, responsive platform that aligns with the college’s brand and enhances usability for all audiences."
        roles={[
          "Audit information architecture, content, and user flows",
          "Design templates and components in Figma, develop base theme, header, and footers",
          "Collaborate with a vendor to develop article, category, and page templates in DNN",
          "Manage content migration and trained the marketing team on new features",
        ]}
        results={[
          "Increased page views by 180% and time on page by 210% post-redesign",
          "Enabled broader integration of FLC News into fundraising, outreach, and email campaigns",
          "Highlighted strategic initiatives through enhanced header, and layouts for videos and photography",
          <>
            View the{" "}
            <Link className="underline" href="https://www.fortlewis.edu/fort-lewis-college-news">
              FLC News site
            </Link>
          </>,
        ]}
        toolsData={
          ["Figma", "Bootstrap", "VSCode", "Github"]
            .map((toolName) => toolsData.find((tool) => tool.label === toolName))
            .filter(Boolean) as ToolData[]
        }
      />

      <Heading2>h2 Overview or step #</Heading2>
      <p>
        Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two paragraphs
        per h2, but trying to keep it concise.{" "}
      </p>
      <PostImage
        src={large}
        description="Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences"
      />
      <PostImage
        src={small}
        description="Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences"
      />

      <Heading2>h2 Overview or step #</Heading2>
      <p>
        Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two paragraphs
        per h2, but trying to keep it concise.
      </p>
      <Double>
        <PostImage
          src={small}
          description="Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences"
        />
        <PostImage src={tallNarrow} description="Descriptive caption, 1-2 sentences" />
      </Double>
      <Heading2>h2 Overview or step #</Heading2>
      <p>
        Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two paragraphs
        per h2, but trying to keep it concise.
      </p>
      <Triple>
        <PostImage
          src={large}
          description="Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences."
        />
        <PostImage src={large} description="Descriptive caption, 1-2 sentences" />
        <PostImage src={large} description="Descriptive caption, 1-2 sentences" />
      </Triple>
      <Heading2>h2 Overview or step #</Heading2>
      <p>
        Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two paragraphs
        per h2, but trying to keep it concise.
      </p>
      <Triple>
        <PostImage src={wideShort} description="Descriptive caption, 1-2 sentences" />
        <PostImage src={large} description="Descriptive caption, 1-2 sentences" />
        <PostImage src={small} description="Descriptive caption, 1-2 sentences" />
      </Triple>
      <Double>
        <section>
          <Heading2>h2 Overview or step #</Heading2>
          <p>
            Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two
            paragraphs per h2, but trying to keep it concise.
          </p>
        </section>
        <PostImage src={wideShort} description="Descriptive caption, 1-2 sentences" />
      </Double>
      <Double>
        <PostImage src={large} description="Descriptive caption, 1-2 sentences" />
        <section>
          <Heading2>h2 Overview or step #</Heading2>
          <p>
            Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two
            paragraphs per h2, but trying to keep it concise.
          </p>
        </section>
      </Double>
      <Heading2>h2 Overview or step #</Heading2>
      <Double>
        <section className="h-full">
          <Heading3>h3</Heading3>
          <p>
            Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two
            paragraphs per h2, but trying to keep it concise.
          </p>
        </section>
        <section className="h-full">
          <Heading3>h3</Heading3>
          <p>
            Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two
            paragraphs per h2, but trying to keep it concise.
          </p>
        </section>
      </Double>
    </>
  );
}
