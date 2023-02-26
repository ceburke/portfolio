import {css} from "@emotion/react";

import stravaImg from "../../public/assets/work/logos/strava.png";
import {BREAKPOINT_MEDIUM, BREAKPOINT_SMALL} from "../../constants";
import Card from "../Card";
import TextBubble from "../TextBubble";

export default function StravaCard(): JSX.Element {
  return (
    <Card
      size="medium"
      title="Strava"
      subtitle="Integrating trail conditions reporting with activities and heat maps"
      image={stravaImg}
    >
      <div
        css={css`
          padding: 0 60px 0 35px;
          position: relative;
          top: -35px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            padding: 0 20px 0 20px;
            top: -45px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            @media (max-width: ${BREAKPOINT_SMALL}px) {
              flex-direction: column-reverse;
            }
          `}
        >
          <div>
            <h2
              css={css`
                font-size: 40px;
                margin-top: 0;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  font-size: 20px;
                  margin-right: 25px;
                }
              `}
            >
              Case Study | Type 1 Meet
            </h2>

            <p
              css={css`
                margin: 0 25px 25px 0;
                font-size: 32px;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  font-size: 16px;
                  margin-right: 0;
                }
              `}
            >
              Supporting introductory description here, most likely one or two sentences. Typing
              another sentence here to illustrate possible size requirements.
            </p>
          </div>
          <img
            src="/assets/work/logos/strava.png"
            css={css`
              text-align: right;
              height: 180px;
              height: 180px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                width: 75px;
                height: 75px;
                margin-bottom: 25px;
              }
            `}
          />
        </div>

        <section
          css={css`
            margin: 50px 0;
          `}
        >
          <h3
            css={css`
              font-size: 40px;
              margin: 25px 0;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                font-size: 20px;
              }
            `}
          >
            Goal
          </h3>
          <p
            css={css`
              margin: 0 0 35px 0;
              font-size: 24px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                font-size: 16px;
              }
            `}
          >
            Supporting introductory description here, most likely one or two sentence. Typing
            another sentence here to illustrate possible size requirements. Just in case here’s
            another sentence, it might be prudent to include some more space here, just in case it
            runs on a bit.
          </p>
          <div
            css={css`
              display: flex;
              gap: 45px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                flex-direction: column;
                gap: 25px;
              }
            `}
          >
            <TextBubble
              title="Problem"
              content="Description of problem spanning a couple sentences. Here’s another sentence to represent space requirements."
            />
            <TextBubble
              title="Objective"
              content="Description of objective, “allow users to connect with others in their region”. Here’s another sentence to represent space requirements."
            />
          </div>
        </section>

        <section
          css={css`
            margin: 50px 0;
          `}
        >
          <h3
            css={css`
              font-size: 40px;
              margin: 25px 0;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                font-size: 20px;
              }
            `}
          >
            Research
          </h3>
          <p
            css={css`
              margin: 0 0 35px 0;
              font-size: 24px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                font-size: 16px;
              }
            `}
          >
            Supporting introductory description here, most likely one or two sentence. Typing
            another sentence here to illustrate possible size requirements. Just in case here’s
            another sentence, it might be prudent to include some more space here, just in case it
            runs on a bit.
          </p>
          <div
            css={css`
              display: flex;
              justify-content: center;
              gap: 25px;

              @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                flex-direction: column;
              }
            `}
          >
            <img
              src="/assets/design/solved-in-motion/thesis_full.jpg"
              css={css`
                border-radius: 35px;
                width: 33%;

                @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                  width: 100%;
                }
              `}
            />
            <img
              src="/assets/design/solved-in-motion/thesis_full.jpg"
              css={css`
                border-radius: 35px;
                width: 33%;
                @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                  width: 100%;
                }
              `}
            />
            <img
              src="/assets/design/solved-in-motion/thesis_full.jpg"
              css={css`
                border-radius: 35px;
                width: 33%;
                @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                  width: 100%;
                }
              `}
            />
          </div>
        </section>

        <section
          css={css`
            margin: 50px 0;
          `}
        >
          <h3
            css={css`
              font-size: 40px;
              margin: 25px 0;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                font-size: 20px;
              }
            `}
          >
            Solution
          </h3>
          <p
            css={css`
              margin: 0 0 35px 0;
              font-size: 24px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                font-size: 16px;
              }
            `}
          >
            Supporting introductory description here, most likely one or two sentence. Typing
            another sentence here to illustrate possible size requirements. Just in case here’s
            another sentence, it might be prudent to include some more space here, just in case it
            runs on a bit.
          </p>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 25px;
            `}
          >
            <div>
              <img
                src="/assets/design/solved-in-motion/thesis_full.jpg"
                css={css`
                  width: 100%;
                  border-radius: 35px;
                `}
              />
              <p
                css={css`
                  margin: 10px 0 35px 0;
                  font-size: 24px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    font-size: 16px;
                  }
                `}
              >
                Supporting introductory description here, most likely one or two sentence. Typing
                another sentence here to illustrate possible size requirements. Just in case here’s
                another sentence, it might be prudent to include some more space here, just in case
                it runs on a bit.
              </p>
            </div>
            <div>
              <img
                src="/assets/design/solved-in-motion/thesis_full.jpg"
                css={css`
                  width: 100%;
                  border-radius: 35px;
                `}
              />
              <p
                css={css`
                  margin: 10px 0 35px 0;
                  font-size: 24px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    font-size: 16px;
                  }
                `}
              >
                Supporting introductory description here, most likely one or two sentence. Typing
                another sentence here to illustrate possible size requirements. Just in case here’s
                another sentence, it might be prudent to include some more space here, just in case
                it runs on a bit.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
}
