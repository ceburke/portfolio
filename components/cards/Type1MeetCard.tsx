import { css } from "@emotion/react";

import type1MeetImg from "../../public/assets/case studies/type1/intro.png";
import { BREAKPOINT_SMALL } from "../../constants";
import Card from "../Card";
import TextBubble from "../TextBubble";

export default function Type1MeetCard(): JSX.Element {
  return (
    <Card
      size="large"
      title="T1Meet"
      subtitle="Community and resource sharing platform for people with chronic disease"
      image={type1MeetImg}
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
              T1Meet
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
              An application to help people with Type 1 diabetes connect, share stories and
              resources. Created in Figma.
            </p>
          </div>
          <img
            src="/assets/case studies/type1/intro.gif"
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
            Context
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
            Living with chronic disease, such as Type 1 diabetes, can be isolating, even from close
            family and friends. Oftentimes, friends and family who do not have Type 1 struggle to
            understand. This project premise was inspired by being a wallflower while two friends
            with Type 1 enthusiastically shared their challenges, successes, tips and tricks.
          </p>
          <div
            css={css`
              display: flex;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                flex-direction: column;
                gap: 25px;
              }
            `}
          >
            <TextBubble
              title="Problem"
              content="Connecting with Type 1 people online is dispersed across non-profit sites, social media and medical forums."
            />
            <TextBubble
              title="Objective"
              content="Create a Type 1-specific platform which combines resources, social media and personal growth tracking."
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
            I pitched the idea for this project to one of my Type 1 friends. She provided insight on
            the feasibility of the idea and what features would be most useful. From there, I moved
            on to user personas to identify additional use cases and needs.
          </p>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 25px;
            `}
          >
            <img
              src="/assets/case studies/type1/personas.png"
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
            I did a round of brainstorming sketches to get started, moved onto low-fidelity mocks
            and then prototyping. I had a user test the low-fidelity prototype and acted upon the
            insights gained from that feedback to create the high-fidelity prototype.
          </p>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 25px;
            `}
          >
            <img
              src="/assets/case studies/type1/sketches.png"
              css={css`
                width: 100%;
                border-radius: 35px;
              `}
            />
            <img
              src="/assets/case studies/type1/lofi.png"
              css={css`
                width: 100%;
                border-radius: 35px;
              `}
            />
            <img
              src="/assets/case studies/type1/hifi.gif"
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
            The usability study yielded key improvements related to the characteristics of the user:
            age, personal journey value and topics of interest. The user illuminated missing pieces
            that I was unable to foresee - a prime example of the value of testing early.
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
              title="Age Ranges"
              content="Ability to select preference for age range in chat hub"
            />
            <TextBubble
              title="Individual Experience"
              content="Personal journey area with private posts and check-in data"
            />
            <TextBubble title="Topics" content="More relevant umbrella categories" />
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 25px;
            `}
          >
            <img
              src="/assets/case studies/type1/changes.png"
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
              content="The user was not able to utilize the prototype interactions in Figma due to unclear context and direction. Future usability studies should include explicit introductory information and instructions."
            />
            <TextBubble
              title="Success"
              content="Testing in the low-fidelity stage yielded several large, user-centric improvements."
            />
            <TextBubble
              title="Opportunity"
              content="Value to real users. Pitch the project to a Type 1 non-profit with enough resources to make it real. Although T1Meet was made with Type 1 users in mind, but could be applied to other chronic diseases as well.  "
            />
          </div>
        </section>
      </div>
    </Card>
  );
}
