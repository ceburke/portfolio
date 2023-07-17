import { css } from "@emotion/react";

import type1MeetImg from "../../public/assets/work/intro.png";
import { BASE_PATH, BREAKPOINT_SMALL } from "../../constants";
import Card from "../Card";
import TextBubble from "../TextBubble";

export default function Type1MeetCard(): JSX.Element {
  return (
    <Card size="large" title="1Meet" image={type1MeetImg}>
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
        <img
          src={`${BASE_PATH}/assets/case studies/type1/intro1.png`}
          css={css`
            object-fit: cover;
            position: relative;
            left: -225px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              width: 100%;
              max-height: 200px;
              position: relative;
              right: -100px;
              left: 0px;
              object-fit: cover;
              border-radius: 0px;
            }
          `}
        />
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
              resources.
              <span
                css={css`
                  font-weight: bold;
                  font-size: 24px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    font-size: 12px;
                    margin-right: 0;
                  }
                `}
              >
                <br></br>
                <br></br>
                Figma | Research, Design, Copy
              </span>{" "}
            </p>
          </div>
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
            Living with chronic illness, such as Type 1 diabetes, can be isolating. Oftentimes,
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

          <img
            src={`${BASE_PATH}/assets/case studies/type1/inspiration.png`}
            css={css`
              object-fit: cover;
              position: relative;
              left: -15px;
              max-width: 60vw;
              max-height: 600px;
              margin-top: 20px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                width: 100%;
                max-height: 200px;
                position: relative;
                left: 15px;
                object-fit: cover;
                border-radius: 0px;
              }
            `}
          />
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
            My initial research consisted of reading academic papers about how social connection
            between peers with chronic illness can decrease negative impacts of the condition over
            time. I translated my research into an outline-level app design and pitched the idea to
            one of my friends who has Type 1 diabetes. She helped me figure out what of my research
            was relevant and which features would be most helpful. Following that, I proceeded to
            develop user personas to gain insights into the needs and behaviors of other users.
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
              max-height: 700px;
              width: auto;
              border-radius: 20px;
            `}
          >
            <img
              src={`${BASE_PATH}/assets/case studies/type1/lofi.png`}
              css={css`
                object-fit: cover;
                position: relative;
                left: 20px;
                max-width: 60vw;
                max-height: 600px;
                margin-top: 20px;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  width: 100%;
                  max-height: 150px;
                  position: relative;
                  left: 15px;
                  object-fit: cover;
                  border-radius: 0px;
                  margin-top: 0px;
                }
              `}
            />
            <img
              src={`${BASE_PATH}/assets/case studies/type1/hifi.png`}
              css={css`
                object-fit: cover;
                position: relative;
                left: 10px;
                max-width: 60vw;
                max-height: 500px;
                margin-top: -100px;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  width: 100%;
                  max-height: 150px;
                  position: relative;
                  left: 15px;
                  object-fit: cover;
                  border-radius: 0px;
                  margin-top: 0px;
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
              margin-top: 400px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                font-size: 20px;
                margin-top: 20px;
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
              content="Testing in the low-fidelity stage yielded several high-value, user-centric improvements including: a personal journey section, data visualization of daily check-ins and chatrooom age preference selectors."
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Opportunity"
              content="Given more time and access to developers, I would run a larger usability study and adjust the design to account for feasibility feedback from developers. I would also incoporate robust low and no-vision user accessibility into all user flows, as a common complication of Type 1 diabetes is retinopathy."
            />
          </div>

          <img
            src={`${BASE_PATH}/assets/case studies/type1/largetext.png`}
            css={css`
              object-fit: cover;
              position: relative;
              left: 175px;
              max-width: 60vw;
              max-height: 500px;
              margin-top: -100px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                width: 100%;
                max-height: 150px;
                position: relative;
                left: 15px;
                object-fit: cover;
                border-radius: 0px;
                margin-top: 0px;
              }
            `}
          />
        </section>
      </div>
    </Card>
  );
}
