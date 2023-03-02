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
                margin-top: 0;

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
              Created in Adobe XD.
            </p>
          </div>
          <img
            src="/assets/work/swpg.png"
            css={css`
              width: 50%;
              height: 350px;
              object-position: -30px 10px;
              object-fit: cover;
              border-radius: 35px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                width: 100%;
                max-height: 150px;
                object-position: 20px -5px;
                object-fit: cover;
                border-radius: 20px;
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
            The southwest United States is a beautiful and geographically sparse area. Population
            centers are few and far-flung. When I moved to Durango, Colorado from the east coast, I
            found connecting with other artists challenging and art-centric community organizing
            next-to-impossible. The goal of Southwest Print Guild is to build a central connection
            point for artists and gallerists of all levels in an otherwise unconnected region.
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
              content="Small and scattered population centers make in-person or word-of-mouth connections of artists, gallerists and community organizers challenging."
            />
            <TextBubble
              css={css`
                flex: 0 1 50%;
              `}
              title="Objective"
              content="Create a web platform that connects artists and gallerists and enables community-building and event promotion."
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
            Users tend to operate in local social media channels and physical signage to advertise
            workshops, shows and grant opportunities. Creating a virtual bulletin platform - where
            all announcements live could save users time in finding connections and opportunities.
            In addition to the bulletin function, I created user personas to identify other needed
            site functions.
          </p>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 25px;
            `}
          >
            <img
              src="/assets/case studies/swpg/personas1.png"
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
              src="/assets/case studies/swpg/personas_1m.png"
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
              src="/assets/case studies/swpg/personas2.png"
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
              src="/assets/case studies/swpg/personas_2m.png"
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
            I did a round of brainstorming sketches to get started, moved onto low-fidelity mocks
            and then prototyping. I had a user test the low-fidelity prototype and acted upon the
            insights gained from that feedback to create the high-fidelity prototype.
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
              <source src="/assets/case studies/swpg/design.mp4" type="video/mp4" />
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
            A large portion of my design effort was spent redoing the layout in the high-fidelity
            phase. The initial layout was bulky and non-intuitive, so I invested time in determining
            a new design approach prior to testing. After the improved design was implemented, a
            part-time artist tested the high-fidelity prototype. Themes of the feedback centered
            around making distinctions in user types and providing monetary perks for member
            artists.
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
              content="Create tailored account interfaces for hobbyists, professionals and gallerists. Existing account interfaces may be inaccessible or intimidating to beginners or irrelevant to gallerists."
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
              src="/assets/case studies/swpg/changes.png"
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
              src="/assets/case studies/swpg/changes_mobile.png"
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
            Southwest Print Guild was an important learning experience in terms of my approach to
            web design. The biggest take-away of this project was recognizing the value of stepping
            back and looking at the fidelity of design choices early. Sunk-cost fallacy thinking,
            the commitment to an approach because of time invested, not value, does not work in the
            UX/UI world.
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
                flex: 0 1 30%;
              `}
              title="Challenge"
              content="Creating a design system and implementing an effective web design which meets user expectations."
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
              content="User testing yielded significant expansion of functions. The site could become a fully-comprehensive tool by addressing multiple user flows in the same virtual space."
            />
          </div>
        </section>
      </div>
    </Card>
  );
}
