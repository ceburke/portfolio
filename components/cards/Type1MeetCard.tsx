import { css } from "@emotion/react";

import type1MeetImg from "../../public/assets/case studies/type1/intro.png";
import { BASE_PATH, BREAKPOINT_SMALL } from "../../constants";
import Card from "../Card";
import TextBubble from "../TextBubble";

export default function Type1MeetCard(): JSX.Element {
  return (
    <Card
      size="large"
      title="T1Meet"
      subtitle="Social and resource sharing platform for people with chronic disease"
      image={type1MeetImg}
    >
      <div
        css={css`
          padding: 25px 60px 0 35px;
          position: relative;
          top: -35px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            padding: 0 20px 0 20px;
            top: 0;
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
            src={`${BASE_PATH}/assets/case studies/type1/intro.gif`}
            css={css`
              max-height: 325px;
              object-fit: cover;
              object-position: 30px -98px;
              flex: 1 1 50%;
              border-radius: 0px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                width: 100%;
                max-height: 150px;
                object-fit: cover;
                object-position: 15px -47px;
                flex: 1 1 50%;
                border-radius: 0px;
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
            Living with chronic disease, such as Type 1 diabetes, can be isolating. Oftentimes,
            friends and family struggle to understand. This project was inspired by being a
            wallflower while two friends with Type 1 enthusiastically shared their challenges,
            successes, tips and tricks.
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
              css={css`
                flex: 0 1 50%;
              `}
              title="Problem"
              content="Connecting with Type 1 people online is dispersed across non-profit sites, social media and medical forums."
            />
            <TextBubble
              css={css`
                flex: 0 1 50%;
              `}
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
            I shared my idea for this project and did some initial research with one of my friends
            who also has Type 1 diabetes. She helped me figure out what was possible and which
            features would be most helpful. Following that, I proceeded to develop user personas to
            gain insights into the needs and behaviors of other users.
          </p>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 25px;
            `}
          >
            <img
              src={`${BASE_PATH}/assets/case studies/type1/personas1.png`}
              css={css`
                width: 100%;
                border-radius: 35px;
                margin-bottom: 25px;
                display: block;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  display: none;
                }
              `}
            />

            <img
              src={`${BASE_PATH}/assets/case studies/type1/personas_1m.png`}
              css={css`
                width: 100%;
                border-radius: 35px;
                margin-bottom: 25px;
                display: none;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  border-radius: 20px;
                  display: block;
                }
              `}
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
              src={`${BASE_PATH}/assets/case studies/type1/personas2.png`}
              css={css`
                width: 100%;
                border-radius: 35px;
                display: block;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  display: none;
                }
              `}
            />

            <img
              src={`${BASE_PATH}/assets/case studies/type1/personas_2m.png`}
              css={css`
                width: 100%;
                border-radius: 35px;
                display: none;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  border-radius: 20px;
                  display: block;
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
            I did a round of brainstorming sketches to get started, then moved on to low-fidelity
            mocks and prototyping. I had a user test the low-fidelity prototype and acted upon the
            insights gained to create the high-fidelity prototype.
          </p>
          <div
            css={css`
              display: flex;
              align-items: center;
              max-height: 700px;
              width: auto;
              overflow: hidden;
              border-radius: 20px;
            `}
          >
            <video
              autoPlay
              playsInline
              loop
              controls
              css={css`
                flex: 1 1 auto;
                width: 100%;
                border-radius: 20px;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  width: 100%;
                }
              `}
            >
              <source src={`${BASE_PATH}/assets/case studies/type1/design.mp4`} type="video/mp4" />
            </video>
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
            age, personal journey value and topics of interest.
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
              css={css`
                flex: 0 1 33%;
              `}
              title="Age Ranges"
              content="Ability to select age range preference in chat hub."
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Individual Experience"
              content="Personal journey area with private posts and check-in data."
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Topics"
              content="More relevant umbrella categories."
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
              src={`${BASE_PATH}/assets/case studies/type1/changes.png`}
              css={css`
                width: 100%;
                display: block;
                border-radius: 35px;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  display: none;
                }
              `}
            />

            <img
              src={`${BASE_PATH}/assets/case studies/type1/changes_mobile.png`}
              css={css`
                width: 100%;
                display: none;
                border-radius: 35px;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  display: block;
                  border-radius: 20px;
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
            T1Meet was made with Type 1 users in mind, but could be applied to other chronic
            diseases. This project helped me understand how essential user feedback is, and how to
            incorporate it in multiple stages of the design process.
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
              css={css`
                flex: 0 1 33%;
              `}
              title="Challenge"
              content="The user was not able to utilize the prototype interactions in Figma due to unclear context and direction. Future usability studies should include explicit introductory information and instructions."
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Success"
              content="Testing in the low-fidelity stage yielded several high-value, user-centric improvements."
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Opportunity"
              content="Value to real users. Pitch the project to a Type 1 non-profit with enough resources to make it real."
            />
          </div>
        </section>
      </div>
    </Card>
  );
}
