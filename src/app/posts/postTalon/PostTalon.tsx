import { ToolData, toolsData } from "@/components/tools/toolsData";
import {
  Double,
  ExtendedPostTitle,
  Heading2,
  Heading3,
  PostImage,
  Triple,
} from "../postComponents";
import talon1 from "./talon1.jpg";
import large from "./large.png";
import small from "./small.png";
import tallNarrow from "./tall-narrow.png";
import wideShort from "./wide-short.png";
import Link from "next/link";

export default function PostTemplate() {
  return (
    <>
      <ExtendedPostTitle
        title="Talon Design System"
        description="Fort Lewis College’s website, with over 6,000 pages and an outdated codebase, faced significant challenges in accessibility, usability, and scalability. Decades of inconsistent styles and fragmented structures made it difficult for users to navigate and for content creators to maintain. The Talon Design System was developed to address these pain points, providing a scalable, accessible, and cohesive framework to modernize the college’s digital presence. This ongoing project has involved pitching the initiative, developing a strategy, auditing existing components, designing accessible templates, and partnering with a development vendor to bring the system to life."
        roles={[
          "Pitch value, strategy, and process",
          "Conduct usability research, competitive audits, and design reviews",
          "Design system architecture, components, templates, and documentation",
          "Manage vendor relationship and development timeline",
        ]}
        results={[
          "Secured funding and approval to move forward",
          "Audited site information architecture and universal components",
          "Designed new components, templates, and documentation",
          "Delivered annotated design files and a comprehensive development timeline to the vendor",
        ]}
        toolsData={
          ["Figma", "Bootstrap"]
            .map((toolName) => toolsData.find((tool) => tool.label === toolName))
            .filter(Boolean) as ToolData[]
        }
      />

      <Heading2>Pitching a grassroots design system</Heading2>
      <p>
        The first hurdle in creating the Talon Design System was convincing stakeholders of its
        necessity. Many were unfamiliar with what a design system entailed or how it could benefit a
        higher education institution like Fort Lewis College. To overcome this, I crafted a
        comprehensive proposal that not only explained the concept but also quantified its impact in
        tangible terms.{" "}
      </p>
      <Double>
        <PostImage
          src={large}
          description="The section of the FigJam board I used to pitch the value and the reasons why for a Fort Lewis College design system."
        />
        <section>
          <Heading3>Creating connection and value</Heading3>
          <p>
            Using an engaging FigJam board, I outlined a clear timeline, areas of application, and
            team-wide benefits. A key part of the pitch was a value equation that translated hours
            saved on design and development into direct monetary savings, making the abstract
            concept of a design system more concrete. By addressing stakeholder concerns head-on and
            illustrating long-term scalability and accessibility gains, the proposal secured buy-in
            and funding to move forward.{" "}
          </p>
        </section>
      </Double>

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
        <PostImage src={small} description="Descriptive caption, 1-2 sentences" />
        <PostImage src={tallNarrow} description="Descriptive caption, 1-2 sentences" />
      </Double>
      <Heading2>h2 Overview or step #</Heading2>
      <p>
        Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two paragraphs
        per h2, but trying to keep it concise.
      </p>
      <Triple>
        <PostImage src={large} description="Descriptive caption, 1-2 sentences" />
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
