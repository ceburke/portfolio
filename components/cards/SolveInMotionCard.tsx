import { css } from "@emotion/react";

import solvedInMotionImg from "../../public/assets/work/solved-in-motion.jpeg";
import { BASE_PATH, BREAKPOINT_SMALL } from "../../constants";
import Card from "../Card";

export default function SolvedInMotionCard(): JSX.Element {
  return (
    <Card
      size="medium"
      title="Solved in motion"
      subtitle="Immersive art installation featuring a local trail system"
      image={solvedInMotionImg}
      imageType="cover"
      modalTitle="Solved in motion"
    >
      <p
        css={css`
          margin: 0 25px 25px 25px;

          font-size: 32px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            font-size: 20px;
          }
        `}
      >
        An immersive, projection installation
      </p>
      <p
        css={css`
          margin: 0 25px 25px 25px;
          font-size: 24px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            font-size: 16px;
          }
        `}
      >
        <span
          css={css`
            font-style: italic;
          `}
        >
          Solved in motion
        </span>{" "}
        uses time, light, and motion to construct a space where we are allowed to slow down, while
        still moving forward. On the wall, the winding animation is crafted from personally recorded
        GPS data: documenting hikes, runs, and bike rides over several months. From above, a bike
        wheel mechanism projects the topographic profile of a small, local trail system on a bed of
        leaves, cut to match the species of the area.
      </p>
      <div
        css={css`
          display: flex;
          align-items: center;
          max-height: 440px;
          overflow: hidden;
          border-radius: 35px;
          margin: 25px;
        `}
      >
        <video
          autoPlay
          loop
          css={css`
            flex: 1 1 auto;
            border-radius: 35px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              width: 100%;
            }
          `}
        >
          <source
            src={`${BASE_PATH}/assets/design/solved-in-motion/thesis_video.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      <p
        css={css`
          margin: 0 25px 50px 25px;
          font-size: 24px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            font-size: 16px;
          }
        `}
      >
        Outdoor recreation is an opportunity to observe and explore our surroundings. By slowing
        down the pace and looking closely, even a humble, hometown trail system can become a
        universe unto itself.{" "}
      </p>
    </Card>
  );
}
