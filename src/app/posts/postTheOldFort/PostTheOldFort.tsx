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
import old1 from "./old1.jpg";
import old2 from "./old2.jpg";
import old3 from "./old3.jpg";
import old4 from "./old4.jpg";
import old5 from "./old5.jpg";
import old6 from "./old6.jpg";
import old7 from "./old7.jpg";
import old8 from "./old8.jpg";
import old9 from "./old9.jpg";

export default function PostTheOldFort() {
  return (
    <>
      <ExtendedPostTitle
        title="The Old Fort branding, design, and build"
        description="The Old Fort is a unique research institution under Fort Lewis College, with its own distinct mission, audience, and identity. The goal of this project was to create a fresh brand and website that captured the character of the Old Fort while making its deep repository of research and historical resources easier to explore."
        roles={[
          "Create a new brand for the Old Fort",
          "Design and build the new site",
          "Primary stakeholder contact and project manager",
        ]}
        results={[
          "Increased active users by 31% and tracked events by 330%",
          "Reduced sitemap size by 65%, streamlining navigation and improving user experience",
          "Rebuilt trust with stakeholders by moving project out of backlog ",
          <>
            Explore{" "}
            <Link className="underline" href="https://www.fortlewis.edu/the-old-fort/">
              the Old Fort
            </Link>
          </>,
        ]}
        toolsData={
          ["Figma", "Google Analytics", "Adobe Creative Suite", "Bootstrap"]
            .map((toolName) => toolsData.find((tool) => tool.label === toolName))
            .filter(Boolean) as ToolData[]
        }
      />

      <Heading2>Dusting off the cobwebs</Heading2>
      <p>
        The Old Fort redesign had been stalled for nearly three years when I joined Fort Lewis
        College. The project lacked momentum and trust from stakeholders. To rebuild confidence, I
        created an alternative design alongside the inherited proposal, giving stakeholders options
        and demonstrating my commitment to understanding their vision. The main goals as presented
        by the stakeholders were as follows:{" "}
      </p>

      <Double>
        <section className="h-full">
          <Heading3>Make resources accessible</Heading3>
          <p>Audit site content and clean up information architecture.</p>
        </section>
        <section className="h-full">
          <Heading3>Create a distinct brand</Heading3>
          <p>Design a compelling visual identity that reflects the Old Fort’s character.</p>
        </section>
      </Double>

      <PostImage
        src={old1}
        description="I formatted the inherited design and brand elements and my new, additional design option as a high-fidelity desktop and mobiles mocks for stakeholder review. The stakeholders selected my added option."
      />

      <Heading2>Collecting tools for the job</Heading2>
      <p>
        Given the constraints of building within the DNN framework, I identified a theme package
        that allowed for customization and faster development. To align the visual identity with the
        Old Fort’s mission, I collaborated closely with FLC's photographer and videographer to
        collect assets that supported the content with strong visuals.
      </p>
      <Triple>
        <PostImage src={old2} description="Image collection and optimization in Adobe Photoshop." />
        <PostImage
          src={old3}
          description="Showcasing video content on the history page by updating the video design and adding a lightbox feature."
        />
        <PostImage
          src={old4}
          description="Templated components within the Old Fort's DNN theme editing interface."
        />
      </Triple>

      <Heading2>Creating a sitemap and streamlining content</Heading2>
      <p>
        I worked with stakeholders and my team's content writer to reorganize and streamline the
        site’s structure. I used Google Analytics to rank most viewed pages, to help inform the
        reorganization. Proposing a new sitemap and addressing gaps in the content addressed the
        lion's share of information accessibility issues. I reviewed the proposed sitemap with
        stakeholders holistically to ensure the direction was inline with their needs. After
        identifying the structure, I was able to hone in on user-friendly content formats to make
        their depth of resources accessible.
      </p>
      <PostImage
        src={old5}
        description="Collaborative FigJam board used to develop the updated site map with stakeholders. "
      />
      <Heading2>Migrating and building</Heading2>
      <p>
        I built the site in phases, allowing stakeholders to review sections as I completed them.
        This iterative approach kept the process manageable and ensured alignment throughout.
        Migrating and integrating content required collaboration with the content writer,
        stakeholders, and hours of manual input. Dividing the work into sprints made the effort more
        efficient and less overwhelming. Two specific areas required additional iteration and
        research:
      </p>
      <Double>
        <section>
          <Heading2>Research projects</Heading2>
          <p>
            A large, disorganized collection of historical and current research projects posed
            navigation challenges. I redesigned this section using a card-style layout with
            categories and a search function, improving navigation and information access.
          </p>
        </section>
        <PostImage
          src={old7}
          description="Old projects view versus the new, searchable projects list."
        />
      </Double>
      <Double>
        <PostImage
          src={old6}
          description="Old history page sample versus new timeline component (mobile view) and history subpag (desktop view)."
        />
        <section>
          <Heading2>History</Heading2>
          <p>
            This section needed cultural sensitivity and careful reorganization. This original site
            content was hidden in layers of pages, making the story of the Old Fort hard to follow,
            and content hard to migrate. To address the cultural senstivity of the page, I worked
            with Diversity Affairs to add a prominent land acknowledgment with an audio recording in
            the universal footer and on the history page. I also coded a visually engaging,
            responsive timeline to provide a connected view of the Old Fort’s history.
          </p>
        </section>
      </Double>
      <Heading2>Measuring success</Heading2>
      <Double>
        <section className="h-full">
          <Heading3>Quantitative</Heading3>
          <p>
            Using Google Analytics, I analyzed success metrics including views, active users,
            events, and time on page. To account for the Old Fort’s seasonality, I compared data
            from the same time period in consecutive years (June 15 to December 1, 2023 for the old
            site, and 2024 for the redesigned site).
          </p>
          <ul>
            <li>
              Improved user traffic and engagement, as seen by the&nbsp;
              <b>
                31% increase in active users, 29% increase in views, and a 330% increase in tracked
                events
              </b>
            </li>
            <li>
              Led to a <b>29% increase in page views</b>, demonstrating improved visibility and user
              interaction without any accompanying marketing campaigns or major program launches
            </li>
            <li>
              Average engagement time per user <b>decreased by 50% </b>, which may indicate a more
              streamlined site, but warrants further exploration through heatmapping or user testing
            </li>
          </ul>
        </section>
        <section className="h-full">
          <Heading3>Qualitative</Heading3>
          <p>
            The site became a key feature in Old Fort presentations, serving as a visual
            representation of its identity and mission.
          </p>
          <PostImage
            src={old8}
            description="Jennifer Jewell giving a talk about the future of agriculture at the Old Fort, with a screenshot of the website homepage on the introduction slide."
          />
        </section>
      </Double>
    </>
  );
}
