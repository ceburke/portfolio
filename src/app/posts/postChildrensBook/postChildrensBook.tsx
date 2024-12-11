import { Double, Heading1, Heading2, PostImage, Triple } from "../postComponents";
import Link from "next/link";
import book1 from "./book1.jpg";
import book2 from "./book2.jpg";
import book3 from "./book3.jpg";
import book4 from "./book4.jpg";
import book5 from "./book5.jpg";
import book6 from "./book6.jpg";

export default function PostChildrensBook() {
  return (
    <>
      <Heading1>The Adventures of Ashe and Cat</Heading1>
      <p>
        I collaborated with two authors to illustrate a 34-page children’s book,{" "}
        <i>The Adventures of Ashe and Cat: The Mountain Bike Flat</i>, a story about the challenges
        of mountain biking and the power of resilience. This project was a significant leap from my
        previous experience, teaching me valuable lessons in digital publishing, expectation
        setting, and collaborative project management. The book is published and is&nbsp;
        <Link className="underline" href="https://the-adventures-of-ashe-and-cat.square.site/">
          available for purchase
        </Link>{" "}
        through the authors or at Maria’s Bookshop in Durango, Colorado.
      </p>

      <Heading2>Color and character development</Heading2>
      <p>
        To kick off the project, I collaborated with the authors to review the draft text, project
        specifications, and their vision for the book. Based on these discussions, I created two
        distinct visual options, each featuring unique character designs, color palettes, and
        typography styles.{" "}
      </p>
      <PostImage
        src={book1}
        description="Two style options for character design and color palette."
      />

      <Double>
        <section>
          <Heading2>Setting the scene</Heading2>
          <p>
            I created composition sketches to visualize how characters would interact on each page
            and across spreads. These sketches served as a blueprint for storytelling, ensuring the
            flow and pacing felt cohesive. My approach focused on front-loading design decisions to
            make the full-color illustration phase as seamless as possible.{" "}
          </p>
        </section>
        <PostImage src={book2} description="Initial sketch of a cross-spread scene." />
      </Double>
      <Double>
        <section>
          <Heading2>A monumental effort</Heading2>
          <p>
            Illustrating 34 full-color, full-bleed pages was no small feat, even with the solid
            groundwork from earlier phases. Next time, I’d consider using spot illustrations to
            balance effort and impact. During this phase, I collaborated closely with the authors to
            fine-tune character expressions and ensure seamless text flow.{" "}
          </p>
        </section>
        <PostImage src={book3} description="Full-color final of a cross-spread scene." />
      </Double>

      <Heading2>Bringing the book to life</Heading2>
      <p>
        The final phase of the project involved preparing print-ready files for the publisher,
        ensuring every detail met professional standards. This step was an incredible learning
        experience, from mastering file formats to collaborating on final edits. The result was a
        polished product that exceeded expectations, leaving the authors ecstatic with the outcome.{" "}
      </p>

      <Triple>
        <PostImage src={book4} description="The authors‘ son reading the printed book." />
        <PostImage
          src={book5}
          description="Characters showing emotion through facial expressions."
        />
        <PostImage src={book6} description="End sheets with bike and nature spot illustrations." />
      </Triple>
    </>
  );
}
