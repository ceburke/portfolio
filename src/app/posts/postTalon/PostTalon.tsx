import { ToolData, toolsData } from "@/components/tools/toolsData";
import Link from "next/link";
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
import talon6 from "./talon6.jpg";
import talon7 from "./talon7.jpg";

export default function PostTemplate() {
  return (
    <>
      <ExtendedPostTitle
        title="Building a foundation for the future"
        description="Fort Lewis College’s sprawling 6,000-page website faced a breaking point: outdated code, inaccessible designs, and a disjointed experience for users and content creators alike. The Talon Design System is built to transform this fragmented digital presence into a scalable, accessible framework. From pitching stakeholders to designing universal components, I’ve led this ongoing effort to modernize and unify the college’s digital assets."
        roles={[
          "Pitch value, strategy, and process",
          "Conduct competitive audits, best practice research, and design reviews",
          "Design system architecture, components, templates, and documentation",
          "Manage developer relationship and timeline",
        ]}
        results={[
          "Secured buy-in and funding to modernize the college's digital presence",
          "Audited site information architecture and universal components",
          "Designed new components and documentation based on Atomic Design principles for scalability",
          "Delivered design files, expectations, and timeline to developer",
        ]}
        toolsData={
          ["Figma", "Bootstrap"]
            .map((toolName) => toolsData.find((tool) => tool.label === toolName))
            .filter(Boolean) as ToolData[]
        }
      />
      <div className="*:my-5">
        <Heading2>Pitching a grassroots design system</Heading2>
        <p>
          Stakeholders initially hesitated, unsure how a design system could address the complexity
          of the FLC website and other digital assets. To build trust, I demonstrated how hours
          saved through cohesive design could translate into real cost savings.{" "}
        </p>
      </div>
      <Double>
        <PostImage
          src={talon1}
          description="A section of the FigJam board showcasing the value proposition, implementation structure, and larger context of design systems in higher education institutions."
        />
        <section>
          <Heading3>Creating connection and value</Heading3>
          <p>
            Using an engaging FigJam board, I outlined a clear timeline, areas of application, and
            team-wide benefits. An essential part of the pitch was a return-on-investment (ROI)
            value equation (
            <Link
              className="underline"
              href="https://www.smashingmagazine.com/2022/09/formula-roi-design-system/"
            >
              design system ROI from Smashing Magazine
            </Link>
            ) that translated hours saved on design and development into direct monetary savings,
            putting the abstract concept of a design system into common terms.{" "}
          </p>
        </section>
      </Double>
      <div className="*:my-5">
        <Heading2>Learning through iteration</Heading2>
        <p>
          Creating the Talon Design System was far from a straightforward process. Early on, I
          conducted a competitive audit of design systems used by other higher-ed institutions,
          gaining insight into what was possible and effective. Inspired by these examples, I began
          workshopping designs with the graphic design team, coding components myself, and
          documenting them as I went.
        </p>
        <p>
          Initial efforts revealed critical roadblocks, including conflicting stylesheets, outdated
          dependencies, and undocumented workflows. These challenges prompted a necessary pivot to
          modernize the codebase with Bootstrap 5, consolidated CSS/SCSS, and a versioned dev
          workflow. This phase underscored the importance of establishing a strong technical
          foundation for scalability and taught me the value of flexibility when navigating complex
          projects.
        </p>
      </div>

      <Triple>
        <PostImage src={talon2} description="Icon and factoid workshopping process." />
        <PostImage
          src={talon3}
          description="Iconography documentation draft on initial approach design system website."
        />
        <PostImage
          src={talon4}
          description="Developing components, such as testimonials, highlighted the need for modern Bootstrap utilities and clean stylesheets."
        />
      </Triple>
      <div className="*:my-5">
        <Heading2>Building a strong foundation</Heading2>
        <p>
          With the technical and style limitations clear, I shifted focus to building a strong
          foundation for the design system. I revisited user research to identify core needs and
          established accessible typography, color palettes, iconography, and layout standards.
          Using Figma variables, I streamlined design workflows and ensured scalability. I developed
          universal components, like menus and page layouts, and CMS-level pane layouts for
          implementation. My design process balanced stakeholder feedback, technical needs, team
          capacity, and modern design principles.
        </p>
      </div>

      <PostImage
        src={talon5}
        description="A sampling of the types of foundational guidelines and components within Talon."
      />
      <div className="*:my-5">
        <Heading2>Identify a developer and set expectations</Heading2>
        <p>
          To implement the system across a complex website, I engaged a developer with experience in
          DNN, the College’s CMS. I delivered a comprehensive package of design files, technical
          expectations, and process documentation to ensure alignment. This package included
          annotated designs, an implementation plan, and workflows to support long-term scalability.
        </p>
        <p>
          I proposed a phased implementation strategy to prioritize high-impact areas like the
          header, footer, navigation, and homepage, with content components to follow. This approach
          ensures manageable implementation and lays the foundation for scalable updates across the
          college’s sprawling website. Here are the guiding goals of the refined design system
          approach:
        </p>
      </div>

      <Double>
        <section className="h-full p-4">
          <Heading3>Implement high-impact updates</Heading3>
          <p>
            Focus on phased improvements to the header, footer, navigation, and homepage to maximize
            immediate usability gains while minimizing disruption.{" "}
          </p>
        </section>
        <section className="h-full p-4">
          <Heading3>Ensure developer alignment</Heading3>
          <p>
            Outline technical expectations, knowledge gaps, timelines, and process documentation to
            ensure a smooth, collaborative process.
          </p>
        </section>
      </Double>
      <Double>
        <section className="h-full p-4">
          <Heading3>Establish scalable workflows</Heading3>
          <p>
            Create a development workflow that allows Fort Lewis College to maintain and expand the
            system over time, despite limited in-house resources.
          </p>{" "}
        </section>
        <section className="h-full p-4">
          <Heading3>Lay the groundwork for full implementation</Heading3>
          <p>
            Develop a strategy for integrating the design system across all 6,000+ pages while
            addressing capacity and content limitations.{" "}
          </p>
        </section>
      </Double>
      <Double>
        <PostImage
          src={talon7}
          description="Accessibility annotation on the main menu component design file."
        />
        <section>
          <Heading3>Communicating accessibility</Heading3>
          <p>
            Using
            <Link
              className="underline"
              href="https://www.figma.com/community/file/1311421011482282592/web-accessibility-annotation-kit"
            >
              CVS Health’s Web Accessiblity Annotation Kit
            </Link>
            , I added accessibility annotations to the design system component files to align
            semantic HTML best practices with the development workflow - taking the guesswork out of
            accessibility build-out.{" "}
          </p>
        </section>
      </Double>

      <PostImage
        src={talon6}
        description="The final mock of a secondary navigation component, designed to be flexible and scalable across the FLC website. This component utilizes brand logos to orient the user, and addresses navigation challenges within dense subpages on the current site."
      />
      <div className="*:my-5">
        <p>
          The design files and process documents are currently being reviewed by the developer. Stay
          tuned for updates on the Talon Design System as it continues to evolve and transform.
        </p>
      </div>
    </>
  );
}
