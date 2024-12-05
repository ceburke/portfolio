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
        description="Fort Lewis College’s sprawling 6,000-page website, built on an outdated codebase, struggled with accessibility, usability, and scalability. Decades of inconsistent styles created frustrations for both users and content creators. The Talon Design System was designed to solve these challenges by modernizing the digital presence with a scalable, accessible, and cohesive framework. This ongoing project spans pitching the initiative, auditing components, designing accessible templates, and partnering with a vendor to bring the vision to life."
        roles={[
          "Pitch value, strategy, and process",
          "Conduct usability research, competitive audits, and design reviews",
          "Design system architecture, components, templates, and documentation",
          "Manage vendor relationship and development timeline",
        ]}
        results={[
          "Secured approval and funding",
          "Audited site information architecture and universal components",
          "Designed new components, templates, and documentation",
          "Delivered design files, expectations, and timeline to the vendor",
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
          src={talon1}
          description="A section of the FigJam board showcasing the value proposition, implementation structure, and larger context of design systems in higher education institutions."
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

      <Heading2>Learning through iteration</Heading2>
      <p>
        Creating the Talon Design System was far from a straightforward process. Early on, I
        conducted a competitive audit of design systems used by other higher-ed institutions,
        gaining insight into what was possible and effective. Inspired by these examples, I began
        workshopping designs with the graphic design team, coding components myself, and documenting
        them as I went.
      </p>
      <Triple>
        <PostImage src={wideShort} description="Descriptive caption, 1-2 sentences" />
        <PostImage src={large} description="Descriptive caption, 1-2 sentences" />
        <PostImage src={small} description="Descriptive caption, 1-2 sentences" />
      </Triple>
      <p>
        However, I quickly ran into significant roadblocks: conflicting stylesheets, outdated
        dependencies, a lack of developer workflows, and no documentation for the existing setup.
        These challenges revealed that Fort Lewis College’s digital foundation wasn’t ready to
        support a robust design system yet. Recognizing the need to pivot, I shifted focus to
        cleaning up the codebase, with goals like upgrading to Bootstrap 5 and consolidating CSS and
        SCSS.
      </p>
      <p>
        This phase taught me that foundational technical improvements are essential for scalability
        and highlighted the importance of flexibility when navigating complex projects.
      </p>

      <PostImage
        src={large}
        description="Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences"
      />
      <PostImage
        src={small}
        description="Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences"
      />

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
