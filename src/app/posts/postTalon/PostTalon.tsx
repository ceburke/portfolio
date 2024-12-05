import { ToolData, toolsData } from "@/components/tools/toolsData";
import {
  Double,
  ExtendedPostTitle,
  Heading2,
  Heading3,
  PostImage,
  Triple,
} from "../postComponents";
import talon1 from "./talon1.jpeg";
import talon2 from "./talon2.jpg";
import talon3 from "./talon3.jpg";
import talon4 from "./talon4.jpg";
import talon5 from "./talon5.jpg";
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
          "Delivered design files, expectations, and timeline to developer",
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
        <PostImage src={talon2} description="Icon and factoid workshopping process." />
        <PostImage
          src={talon3}
          description="Iconography documentation on public-facing design system website."
        />
        <PostImage
          src={talon4}
          description="Developing components, such as testimonials, highlighted the need for modern Bootstrap utilities and clean stylesheets."
        />
      </Triple>
      <p>
        I quickly ran into significant roadblocks: lack of basic governance and styles, conflicting
        stylesheets, outdated dependencies, a lack of developer workflows, and no documentation for
        the existing setup. These challenges revealed that Fort Lewis College’s digital foundation
        wasn’t ready to support a robust design system yet. Recognizing the need to pivot, I shifted
        focus to implementing a modern, well-documented codebase, with goals like upgrading to
        Bootstrap 5 and consolidating CSS and SCSS.
      </p>
      <p>
        This phase taught me that foundational technical improvements are essential for scalability
        and highlighted the importance of flexibility when navigating complex projects.
      </p>

      <Heading2>Building a strong foundation</Heading2>
      <p>
        With the technical limitations of the codebase clear, I shifted focus to building a strong
        foundation for the design system. I revisited user research to identify core needs and
        established accessible typography, color palettes, iconography, and layout standards. Using
        Figma variables, I streamlined design workflows and ensured scalability. Key universal
        components, like menus and page layouts, were developed with a holistic approach, balancing
        stakeholder feedback with modern design principles.
      </p>

      <PostImage
        src={talon5}
        description="A sampling of the types of foundational guidelines and components within Talon."
      />

      <Heading2>Identify a developer and set expectations</Heading2>
      <p>
        Recognizing the need for external expertise, I identified a development vendor to help
        implement the design system. I delivered annotated design files, detailed timelines, and
        clear process documentation to ensure alignment on expectations. With Fort Lewis College’s
        limited in-house development resources, I emphasized a collaborative approach that included
        learning workflows for ongoing updates.
      </p>
      <p>
        A phased implementation strategy focused on high-impact areas like the header, footer,
        navigation, and homepage to minimize disruption while delivering noticeable improvements.
        This partnership sets the stage for scalable updates across the college’s sprawling website.
      </p>

      <Double>
        <section className="h-full">
          <Heading3>Implement high-impact updates</Heading3>
          <p>
            Focus on phased improvements to the header, footer, navigation, and homepage to maximize
            immediate usability gains while minimizing disruption.{" "}
          </p>
        </section>
        <section className="h-full">
          <Heading3>Ensure developer alignment</Heading3>
          <p>
            Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two
            paragraphs per h2, but trying to keep it concise.
          </p>
        </section>
      </Double>
      <Double>
        <section className="h-full">
          <Heading3>Establish scalable workflows</Heading3>
          <p>
            Create a development workflow that allows Fort Lewis College to maintain and expand the
            system over time, despite limited in-house resources.
          </p>{" "}
        </section>
        <section className="h-full">
          <Heading3>Lay the groundwork for full implementation</Heading3>
          <p>
            Develop a strategy for integrating the design system across all 6,000+ pages while
            addressing existing technical limitations.{" "}
          </p>
        </section>
      </Double>

      <p>
        The design files and process documents are currently being reviewed by the developer. Stay
        tuned for updates on the Talon Design System as it continues to evolve and transform.
      </p>
    </>
  );
}
