import { Double, Triple, ExtendedPostTitle, Heading2, PostImage } from "../postComponents";
import book1 from "./book1.png";
import book2 from "./book2.png";
import book3 from "./book3.png";
import book4 from "./book4.jpg";
import book5 from "./book5.png";
import book6 from "./book6.png";

export default function PostChildrensBook() {
  return (
    <>
      <ExtendedPostTitle
        title="Children‘s book illustration"
        description="I collaborated with two authors to illustrate a 34-page children’s book, The Adventures of Cat and Ashe: The Mountain Bike Flat, a story about the challenges of mountain biking and the power of resilience. This project was a significant leap from my previous experience, teaching me valuable lessons in digital publishing, expectation setting, and collaborative project management. The book is now published and available for purchase through the authors or at Maria’s Bookshop in Durango, Colorado."
      />

      <Heading2>Color and character development</Heading2>
      <p>
        To kick off the project, I collaborated with the authors to review the draft text, project
        specifications, and their vision for the book. Based on these discussions, I created two
        distinct visual concepts, each featuring unique character designs, color palettes, and
        typography styles. These options provided a foundation for the authors to refine their
        preferences, setting a clear and cohesive tone for the final illustrations.{" "}
      </p>
      <PostImage
        src={book1}
        description="Two style options for character design and color palette."
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
