import {css} from "@emotion/react";

import swpgImg from "../../public/assets/work/swpg.png";
import {BREAKPOINT_SMALL} from "../../constants";
import Card from "../Card";
import TextBubble from "../TextBubble";

export default function SWPGCard(): JSX.Element {
  return (
    <Card
      size="large"
      css={css`
        margin-top: 35px;
      `}
      title="Southwest Print Guild"
      subtitle="Expanding professional networks and community building in a rural region"
      image={swpgImg}
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
            overflow: hidden;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              flex-direction: column;
              align-items: center;
            }
          `}
        >
          <div
            css={css`
              flex: 1 1 50%;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                flex: 1 1 100%;
              }
            `}
          >
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
            src="/assets/work/type1meet.png"
            css={css`
              width: 50%;
              border-radius: 35px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                width: 100%;
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
              flex-wrap: wrap;
              gap: 25px;
            `}
          >
            <img
              src="/assets/design/solved-in-motion/thesis_full.jpg"
              css={css`
                width: 100%;
                border-radius: 35px;
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
            Design
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
            <img
              src="/assets/design/solved-in-motion/thesis_full.jpg"
              css={css`
                width: 100%;
                border-radius: 35px;
              `}
            />
            <img
              src="/assets/design/solved-in-motion/thesis_full.jpg"
              css={css`
                width: 100%;
                border-radius: 35px;
              `}
            />
            <img
              src="/assets/design/solved-in-motion/thesis_full.jpg"
              css={css`
                width: 100%;
                border-radius: 35px;
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
            Improvements
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
              margin: 25px 0;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                flex-direction: column;
                gap: 25px;
              }
            `}
          >
            <TextBubble
              title="1"
              content="Description spanning one longer sentence, oh like so look at that."
            />
            <TextBubble
              title="2"
              content="Description spanning one longer sentence, oh like so look at that."
            />
            <TextBubble
              title="3"
              content="Description spanning one longer sentence, oh like so look at that."
            />
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 25px;
            `}
          >
            <img
              src="/assets/design/solved-in-motion/thesis_full.jpg"
              css={css`
                width: 100%;
                border-radius: 35px;
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
            Outcome
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
              margin: 25px 0;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                flex-direction: column;
                gap: 25px;
              }
            `}
          >
            <TextBubble
              title="Challenge"
              content="Description spanning one longer sentence, oh like so look at that."
            />
            <TextBubble
              title="Success"
              content="Description spanning one longer sentence, oh like so look at that."
            />
            <TextBubble
              title="Opportunity"
              content="Description spanning one longer sentence, oh like so look at that."
            />
          </div>
        </section>
      </div>
    </Card>
  );
}
