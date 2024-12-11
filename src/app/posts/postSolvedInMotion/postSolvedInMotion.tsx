import { Double, Heading1, Heading2, Heading3, PostImage, Triple } from "../postComponents";
import motion1 from "./motion1.jpg";
import motion2 from "./motion2.jpg";
import motion3 from "./motion3.jpg";

export default function PostSolvedInMotion() {
  return (
    <>
      <Heading1>Solved in motion</Heading1>
      <p>
        <i>Solved in motion</i> was the culmination of my undergraduate Studio Art major and a
        significant departure from my printmaking concentration. Despite its novelty, my
        installation was well-acclaimed by my peers and faculty, and was a pivotal experience in my
        development as an artist. The experience of learning new skills, executing a complex
        project, and successfully stepping outside my comfort zone instilled lasting confidence to
        embrace and overcome new challenges.
      </p>
      {/* TODO Fix video size and if possible, preview image*/}
      <Double>
        <iframe
          src="https://drive.google.com/file/d/1xwFl9sTI91waFM_Wtmyjx5PCh9fRt5rs/preview?start=2"
          width="100%"
          height="100%"
          allow="autoplay"
        ></iframe>
        <section>
          <Heading2>Creating an immersive experience</Heading2>
          <p>
            This installation uses time, light, and motion to construct a space where we are allowed
            to slow down, while still moving forward. On the wall, a winding animation is crafted
            from personally-recorded GPS data of hikes, runs, and bike rides. From above, a bike
            wheel mechanism projects the topographic profile of a small, local trail system on a bed
            of leaves, cut to match the species of the area. Moving through any environment is an
            opportunity to observe and explore our surroundings. By slowing down and looking
            closely, even a humble, hometown trail system can become a universe unto itself.
          </p>
        </section>
      </Double>
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
          description="An translucent print mounted in the spokes of a bike wheel, moved by a custom Arduino-controlled motor."
        />
      </Triple>
    </>
  );
}
