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
import large from "./large.png";
import news2 from "./news2.png";
import news3 from "./news3.png";
import news4 from "./news4.png";
import news5 from "./news5.png";
import news6 from "./news6.png";
import news7 from "./news7.png";

export default function PostFLCNews() {
  return (
    <>
      <ExtendedPostTitle
        title="Information architecture and responsive redesign"
        description="The Fort Lewis College News site is a central tool for marketing and storytelling, showcasing events, achievements, and strategic initiatives. However, its outdated, non-branded, and unresponsive design created barriers for users and limited its role in broader marketing efforts like fundraising and email campaigns. I led a redesign to transform the site into a modern, responsive platform that aligns with the college’s brand and enhances usability for all audiences."
        roles={[
          "Audit competitors, site information architecture, and user flows",
          "Design templates and components in Figma",
          "Develop the base theme, header, and footer using Bootstrap and nvQuickTheme",
          "Collaborate with a vendor to implement article, category, and page templates in DNN",
          "Manage content migration and train content owners on new features",
        ]}
        results={[
          "Increased site views by 180% and conversion rate by 135%",
          "Broadened the use of FLC News in fundraising, outreach, and email campaigns",
          "Improved visibility of strategic initiatives through enhanced layouts and visual storytelling",
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

      <div className="*:my-5">
        <Heading2>Reaching the breaking point</Heading2>
        <p>
          The outdated design and disorganized article structure of the News site created major
          challenges for Fort Lewis College’s media relations team. These issues limited their
          ability to reach broader audiences and secure administrative support for storytelling.
          Once the redesign was prioritized, we defined project goals and identified key pain points
          to address.{" "}
        </p>
        <PostImage
          src={large}
          description="A side-by-side comparison of the old versus new sitemaps and homepages. "
        />
      </div>

      <div className="*:my-5">
        <Heading2>Determining a best approach</Heading2>
        <p>
          Initially, I considered building the site on a separate subdomain with limited legacy data
          migration, focusing on recent articles and developing the theme independently. However,
          migration tests and competing priorities revealed this approach would delay the project.
          Working with my director, we secured funding to hire a development vendor, 10 Pound
          Gorilla, who focused on article templates while I handled base theme development and
          full-spec design documentation. Ultimately, we decided that building within the existing
          site was the best way to maintain article history.
        </p>
      </div>

      <Double>
        <PostImage
          src={news2}
          description="I expanded specs and documentation on design files to better support the developer developer."
        />
        <section>
          <Heading3>Improving development hand-off</Heading3>
          <p>
            Collaborating with the developer taught me how to refine my Figma documentation. By
            actively engaging with the developer and addressing feedback through comments, I
            improved my design files to ensure they were clear and actionable for implementation.
          </p>
        </section>
      </Double>
      <div className="*:my-5">
        <Heading2>Focusing on responsive design</Heading2>
        <p>
          A competitive audit of higher education sites informed my approach to creating a modern,
          responsive, and on-brand design. Using nvQuickTheme and Bootstrap, I developed a base
          theme with updated headers and footers. Paired with the developer’s article theme, this
          groundwork supported seamless content migration. For all parts of the updates, I speced
          out Figma designs per Bootstrap breakpoints, at four device sizes.
        </p>
      </div>
      <PostImage src={news3} description="Full spread of Figma mocks at multiple device sizes." />
      <Double>
        <section>
          <Heading2>Tackling article migration</Heading2>
          <p>
            To address decades of legacy articles, I worked with the developer to develop a
            SQL-driven category migration plan. This approach reorganized categories to simplify
            future uploads. I conducted thorough QA to ensure the migration met user needs and
            resolved organizational inefficiencies.
          </p>
        </section>
        <PostImage
          src={news4}
          description="I determined an category reassigment map and the developer built out a SQL statement to migrate the articles into new categories."
        />
      </Double>
      <div className="*:my-5">
        <Heading2>Training, documentation, and adoption</Heading2>
        <p>
          I created a comprehensive guide for the entire Marketing and Communications team,
          including the site’s redesign history, category changes, a content map, and step-by-step
          instructions for uploading articles. This ensured the team could confidently manage the
          updated site and its features, and appropriatey utilize the new spaces created to higlight
          their work. In addition, I commit my changes to the article templates through a shared
          repo on GitHub. This approach enables me to extend the template to other use cases on the
          FLC website while maintaining version control and facilitating collaboration with the
          developer for future adjustments.
        </p>
      </div>
      <Triple>
        <PostImage
          src={news5}
          description="I authored step-by-step instructions per content type, to help make the site upload process smoother for current and future editors."
        />
        <PostImage
          src={news6}
          description="The new site features dedicated space for videos and photos."
        />
        <PostImage
          src={news7}
          description="The News redesign supported and informed the re-brand of the college's main email campaign, The Fort Report."
        />
      </Triple>
      <div className="*:my-5">
        <Heading2>Reporting success</Heading2>
        <p>
          Using Google Analytics, I analyzed the News site’s performance post-launch, comparing data
          from October 23 to December 8, 2024, against the same period in 2023. During this
          timeframe, site views increased by 180%, and the conversion rate improved by 135%. While
          increased viewership was bolstered by email campaigns and social media efforts, the
          conversion rate—calculated from users and events—offers a clearer measure of the impact of
          the UX and design changes.
        </p>
      </div>
    </>
  );
}
