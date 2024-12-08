import { Double, ExtendedPostTitle, Heading3, PostImage, Triple } from "../postComponents";
import motion1 from "./motion1.jpg";
import motion2 from "./motion2.jpg";
import motion3 from "./motion3.jpg";

export default function PostSolvedInMotion() {
  return (
    <>
      <ExtendedPostTitle
        title="Solved in motion"
        description="Solved in motion was the culmination of my undergraduate Studio Art major and a significant departure from my printmaking concentration. Creating an installation piece required both convincing and risk, as it challenged traditional definitions within the discipline. I defended the work as printmaking by emphasizing its iterative process and conceptual parallels, bridging my existing skills with a new medium. It was well-acclaimed by my peers and faculty, and was a pivotal experience in my development as an artist."
      />
      <Double>
        <iframe
          src="https://drive.google.com/file/d/1xwFl9sTI91waFM_Wtmyjx5PCh9fRt5rs/preview?start=2"
          width="550px"
          height="400px"
          allow="autoplay"
        ></iframe>
        <section>
          <Heading3>Creating an immersive experience</Heading3>
          <p>
            This installation uses time, light, and motion to create a space where slowing down and
            moving forward happen together. A winding animation of GPS maps from hikes, runs, and
            bike rides flows across the wall. Overhead, a bike wheel projects the topographic
            profile of a local trail system onto a bed of hand-cut leaves shaped to match native
            species.
          </p>
        </section>
      </Double>
      <p>
        The skills I learned while creating this installation, combined with time spent at the local
        trail system, made this project especially meaningful to me. Every part of the exhibit was
        borrowed, upcycled, or repurposed after its run. I’d love to revisit and expand on this
        project in the future.
      </p>
      <Triple>
        <PostImage
          src={motion1}
          description="A bed of paper leaves, cut to match the species of the area."
        />
        <PostImage
          src={motion2}
          description="A winding, GPS animation made from a year of recorded hikes, runs, and bikes."
        />
        <PostImage
          src={motion3}
          description="An translucent print mounted in the spokes a bike wheel, moved by a custom Arduino-controlled motor."
        />
      </Triple>
    </>
  );
}
