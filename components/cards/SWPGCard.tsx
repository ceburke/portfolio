import { css } from "@emotion/react";

import swpgImg from "../../public/assets/work/swpg.png";
import { BASE_PATH, BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from "../../constants";
import Card from "../Card";
import TextBubble from "../TextBubble";

export default function SWPGCard(): JSX.Element {
  return (
    <Card
      size="large"
      css={css`
        margin-top: 35px;
      `}
      title="Housing and Dining"
      image={swpgImg}
    >
      <div
        css={css`
          width: 100%;
          text-align: center;
          margin-bottom: 30px;
        `}
      >
        <img
          src={`${BASE_PATH}/assets/case studies/swpg/intro.png`}
          css={css`
            margin: 0 auto;
            max-height: 500px;
            max-width: 100%;
          `}
        />
      </div>
      <div
        css={css`
          padding: 30px 60px 0 35px;
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
                margin-top: 0px;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  font-size: 20px;
                  margin-right: 25px;
                }
              `}
            >
              Southwest Print Guild
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
              A website to connect artists, gallerists and community organizers in a remote region.
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
                Adobe XD | Research, Design, Copy
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
            The southwestern region of the United States boasts stunning landscapes, but its sparse
            population and widespread geography can make it difficult to connect with fellow
            artists. When I relocated to Durango, Colorado from the east coast, I encountered
            challenges in finding a community that centered around art and organizing art-centric
            events. To bridge this gap, the Southwest Print Guild aims to create a hub for artists
            and gallerists of all levels to come together and build connections in an otherwise
            isolated region.
          </p>

          <div
            css={css`
              display: flex;
              gap: 45px;

              @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                gap: 25px;
              }

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
              content="Connecting artists, gallerists, and community organizers can be challenging in regions with dispersed, small population centers."
            />
            <TextBubble
              css={css`
                flex: 0 1 50%;
              `}
              title="Objective"
              content="Develop a platform that facilitates connections between artists and gallerists, fostering a sense of community and enabling the promotion of events."
            />
          </div>
          <img
            src={`${BASE_PATH}/assets/case studies/swpg/trio.png`}
            css={css`
              width: 100%;
              margin: 25px 0;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                display: none;
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
              margin-top: -20px;

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
            Typically, users rely on local social media channels and physical signage to share
            announcements and promote events. However, consolidating all announcements onto a single
            virtual bulletin platform can save time and increase engagement among users. To identify
            other needed site functions, I developed user personas.
          </p>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 25px;
            `}
          >
            <img
              src={`${BASE_PATH}/assets/case studies/swpg/personas1.png`}
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
              src={`${BASE_PATH}/assets/case studies/swpg/personas_1m.png`}
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
              src={`${BASE_PATH}/assets/case studies/swpg/personas2.png`}
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
              src={`${BASE_PATH}/assets/case studies/swpg/personas_2m.png`}
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
            To begin the design process, I started with a round of brainstorming sketches and
            creating a logo, followed by low-fidelity mocks, and then prototyping. After creating a
            high-fidelity prototype, I had a user test it and used their feedback to make
            improvements.
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
              <source src={`${BASE_PATH}/assets/case studies/swpg/design.mp4`} type="video/mp4" />
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
            During the high-fidelity phase, I refined the initial layout to make it more intuitive
            prior to user testing. My initial design was bulky and hard to navigate. The side
            navigation bar detracted from the main content of the page and minimizing the bar
            resulted in overly-complex layout interactions. I decided a top nav bar approach would
            simplify the layout, interactions and be more familiar to users. After implementing the
            improved design, a part-time artist tested the high-fidelity prototype. Their feedback
            focused on making distinctions between user types and offering monetary incentives for
            member artists. See main themes below:
          </p>
          <div
            css={css`
              display: flex;
              gap: 45px;
              margin: 25px 0;

              @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                gap: 25px;
              }

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
              title="Perks"
              content="Add member benefits such as discounted materials at local supply businesses and discounted show fees."
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Monetization of Work"
              content="Create an in-site gallery which the public can access and member artists can sell work."
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Member Hierarchy"
              content="Create tailored account interfaces for hobbyists, professionals and gallerists. Existing account interface is intimidating to beginners and irrelevant to gallerists."
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
              src={`${BASE_PATH}/assets/case studies/swpg/changes.png`}
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
              src={`${BASE_PATH}/assets/case studies/swpg/changes_mobile.png`}
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
            Southwest Print Guild taught me how to question and improve my design-thinking process.
            The most significant lesson I learned was the importance following an Agile methodology
            throughout the design process. In particular, I realized the potential pitfalls of the
            "sunk-cost fallacy" mindset, which involves persisting with a suboptimal design because
            of the time already spent. In the world of UX/UI design, adapting to meet user needs is
            paramount. Adjusting the placement and interaction of the nav bar was the key instance
            which made me step back and revisit my approach.
          </p>
          <div
            css={css`
              display: flex;
              gap: 45px;
              margin: 25px 0;

              @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                gap: 25px;
              }

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                flex-direction: column;
                gap: 25px;
              }
            `}
          >
            <TextBubble
              css={css`
                flex: 0 1 30%;
              `}
              title="Challenge"
              content="Create a design system and implement an effective web design which meets user expectations."
            />
            <TextBubble
              css={css`
                flex: 0 1 30%;
              `}
              title="Success"
              content="User testing identified that existing features and flows were well-designed and functioned as expected."
            />
            <TextBubble
              css={css`
                flex: 0 1 30%;
              `}
              title="Opportunity"
              content="User testing yielded significant expansion of functions. The site could grow to accomodate multiple user types."
            />
          </div>
          <img
            src={`${BASE_PATH}/assets/case studies/swpg/highlight.png`}
            css={css`
              width: 100%;
            `}
          />
        </section>
      </div>
    </Card>
  );
}
