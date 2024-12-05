import { Heading1 } from "../postComponents";

import { ToolData, toolsData } from "@/components/tools/toolsData";
import {
  Double,
  ExtendedPostTitle,
  Heading2,
  Heading3,
  PostImage,
  Triple,
} from "../postComponents";
import book1 from "./book1.png";
import book2 from "./book2.png";
import book3 from "./book3.png";
import book4 from "./book4.jpg";

export default function PostChildrensBook() {
  return (
    <>
      <ExtendedPostTitle
        title="Children's book illustration"
        description="I collaborated with two authors to illustrate a 34-page children’s book, The Adventures of Cat and Ashe: The Mountain Bike Flat, which explores the ups and downs of mountain biking and the importance of resilience. While I have past work experience with story illustration, tackling a full book was a significant leap that taught me invaluable lessons about digital illustration for publishing, setting clear expectations, and managing collaborative phases. The book is now published and available for purchase through the authors or at Maria’s Bookshop in Durango, Colorado."
      />

      <Heading2>Color and character development</Heading2>
      <p>
        In an initial meeting, I reviewed the draft text, project specifications, and the authors’
        vision for the book. From there, I developed two visual concepts, each showcasing distinct
        character designs, color palettes, and typography styles. These options allowed the authors
        to refine their preferences and set the tone for the final illustrations.{" "}
      </p>
      <PostImage
        src={book1}
        description="Two style options provided to the authors for character design and color palette."
      />

      <Double>
        <section>
          <Heading2>Scene sketches</Heading2>
          <p>
            I created composition sketches to visualize how characters would interact on each page
            and across spreads. These sketches served as a blueprint for storytelling, ensuring the
            flow and pacing felt cohesive. My approach focused on front-loading design decisions to
            make the full-color illustration phase as seamless as possible.{" "}
          </p>
        </section>
        <PostImage src={book2} description="Initial sketch of a full spread scene." />
      </Double>
      <Double>
        <section>
          <Heading2>Full-color, full-bleed</Heading2>
          <p>
            Illustrating 34 full-bleed pages was no small feat, even with the solid groundwork from
            earlier phases. Next time, I’d consider using spot illustrations to balance effort and
            impact. During this phase, I collaborated closely with the authors to fine-tune
            character expressions and ensure seamless text flow. Once edits were finalized, I
            partnered with the publisher and printer to prepare press-ready files, bringing the book
            to life in print.{" "}
          </p>
        </section>
        <PostImage src={book3} description="Full-color final of a full spread scene." />
      </Double>

      <Heading2>Preparing for print</Heading2>
      <p>
        The final phase of the project involved preparing print-ready files for the publisher,
        ensuring every detail met professional standards. This step was an incredible learning
        experience, from mastering file formats to collaborating on final edits. The result was a
        polished product that exceeded expectations, leaving the authors ecstatic with the outcome.{" "}
      </p>

      <PostImage src={book4} description="The authors' son reading the final printed book." />
    </>
  );
}
