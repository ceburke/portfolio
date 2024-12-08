import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostCarousel from "@/components/PostCarousel";
import ToolsList from "@/components/tools/ToolsList";
import { toolsData } from "@/components/tools/toolsData";
import type { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { postsData } from "../posts/postsData";
import headshot from "./headshot.jpg";
import { Heading3 } from "../posts/postComponents";

export const metadata: Metadata = {
  title: "Claire Burke | About",
  description: `I'm Claire, a product designer with a passion for UI and UX.`,
};

const ABOUT_PAGE_MAX_CONTENT_WIDTH = 1175;

export default function About() {
  return (
    <div>
      <Navbar />
      <main
        className="mx-auto mt-10 px-5 lg:px-0"
        style={{ maxWidth: `${ABOUT_PAGE_MAX_CONTENT_WIDTH}px` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-start gap-10 md:gap-20">
          <ExportedImage
            src={headshot}
            alt="Claire headshot"
            className="md:w-1/3 md:flex-none"
            sizes="100vw"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">Background and vision</h1>
            <p>
              I like helping people discover new experiences, solve problems, and improve their
              daily lives. My background in environmental consulting and graphic design taught me
              how to understand people, meet their needs, explain complex ideas clearly, and create
              accessible solutions.Transitioning into UX/UI design has allowed me to focus these
              skills on creating meaningful, user-centered experiences.
            </p>
            <p>
              Outside of work, I love mountain biking, playing ultimate frisbee, rekindling my love
              of piano, and reading fantasy books (currently reading <i>The Wandering Inn</i>).
            </p>
            <p>
              Connect with me on&nbsp;
              <Link
                className="underline hover:font-bold"
                href="https://www.linkedin.com/in/claire-burke/"
                title="Claire's LinkedIn profile"
                target="_blank"
              >
                LinkedIn
              </Link>
              &nbsp;to learn more about my career path.
            </p>
            <Heading3>Education</Heading3>
            <p>
              <span className="font-bold">University of Virginia</span>
              <br></br>B.A. Environmental Science, B.A. Studio Art
            </p>
            <p>
              <span className="font-bold">Coursera</span>
              <br></br>Google UX Design Professional Certificate
            </p>
          </div>
        </div>

        <div className="mt-9">
          <h2 className="text-3xl font-bold mb-8">Top tools</h2>
          <ToolsList toolsData={toolsData} />
        </div>

        <h2 className="text-3xl font-bold mt-14 mb-10">Personal projects</h2>
      </main>
      <PostCarousel posts={postsData.filter((post) => post.group === "personal")} />
      <Footer />
    </div>
  );
}
