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

export default function PostTemplate() {
  return (
    <>
      <ExtendedPostTitle
        title="Talon Design System"
        description="Fort Lewis College’s sprawling 6,000-page website faced a breaking point: outdated code, inaccessible designs, and a disjointed experience for users and content creators alike. The Talon Design System is built to transform this fragmented digital presence into a scalable, accessible framework. From pitching stakeholders to designing universal components, I’ve led this ongoing effort to modernize and unify the college’s digital assets."
        roles={[
          "Pitch value, strategy, and process",
          "Conduct competitive audits, best practice research, and design reviews",
          "Design system architecture, components, templates, and documentation",
          "Manage vendor relationship and development timeline",
        ]}
        results={[
          "Secured approval and funding",
          "Audited site information architecture and universal components",
          "Designed new components and documentation based on Atomic Design",
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
        Stakeholders initially hesitated, unsure how a design system could address the complexity of
        the FLC website and other digital assets. To build trust, I demonstrated how hours saved
        through cohesive design could translate into real cost savings.{" "}
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
            team-wide benefits. An essential part of the pitch was a return-on-investment (ROI)
            value equation (from Smashing Magazine) that translated hours saved on design and
            development into direct monetary savings, putting the abstract concept of a design
            system into common terms.{" "}
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
        Initial efforts revealed critical roadblocks—conflicting stylesheets, outdated dependencies,
        and undocumented workflows—prompting a pivot to modernize the codebase with Bootstrap 5 and
        consolidated CSS/SCSS.
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
        Figma variables, I streamlined design workflows and ensured scalability. I developed
        universal components, like menus and page layouts, and CMS-level pane layouts for
        implementation. My design process balanced stakeholder feedback, technical needs, and modern
        design principles.
      </p>

      <PostImage
        src={talon5}
        description="A sampling of the types of foundational guidelines and components within Talon."
      />

      <Heading2>Identify a developer and set expectations</Heading2>
      <p>
        To implement the system across a complex website, I partnered with a developer, delivering
        annotated designs, a phased implementation plan, and workflows to support long-term
        scalability.
      </p>
      <p>
        A phased implementation strategy prioritizes high-impact areas like the header, footer,
        navigation, and homepage, with content components to follow. This approach ensures
        manageable implementation and lays the foundation for scalable updates across the college’s
        sprawling website.
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
            Outline technical expectations, knowledge gaps, timelines, and process documentation to
            ensure a smooth, collaborative process.
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
