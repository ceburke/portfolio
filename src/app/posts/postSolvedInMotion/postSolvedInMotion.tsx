import { ToolData, toolsData } from "@/components/tools/toolsData";
import {
  Double,
  ExtendedPostTitle,
  Heading2,
  Heading3,
  PostImage,
  Triple,
} from "../postComponents";
import motion1 from "./motion1.jpg";
import motion2 from "./motion2.jpg";
import motion3 from "./motion3.jpg";

export default function PostSolvedInMotion() {
  return (
    <>
      <ExtendedPostTitle
        title="Solved in motion"
        description="Solved in motion was the culmination of my undergraduate Studio Art major and a significant departure from my printmaking concentration. Creating an installation piece required both convincing and risk, as it challenged traditional definitions within the discipline. I defended the work as printmaking by emphasizing its iterative process and conceptual parallels, bridging my existing skills with a new medium."
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
            The installation itself explores time, light, and motion to create a reflective space
            where slowing down and moving forward coexist. A winding animation, crafted from
            GPS-recorded maps of hikes, runs, and bike rides, flows across the wall, illustrating
            the rhythms of individual journeys. Overhead, a bike wheel mechanism projects the
            topographic profile of a local trail system onto a bed of hand-cut leaves, meticulously
            shaped to represent species native to the area.
          </p>
        </section>
      </Double>
      <p>
        The new skills I learned and the time spent at the local trail sytem made this exhibit a
        particularly special and impactful experience for me. I would love to do another iteration
        of this project in the future.
      </p>
      <Triple>
        <PostImage
          src={motion1}
          description="A bed of cut leaves, cut to match the species of the area."
        />
        <PostImage
          src={motion2}
          description="A winding, GPS animation made from a year of recorded hikes, runs, and bikes."
        />
        <PostImage
          src={motion3}
          description="An translucent print mounted in the spokes a bike wheel, and motorized an Arduino controller."
        />
      </Triple>
    </>
  );
}
