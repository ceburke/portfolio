import { css } from "@emotion/react";

import type1MeetImg from "../../public/assets/work/intro.png";
import { BASE_PATH, BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from "../../constants";
import Card from "../Card";
import TextBubble from "../TextBubble";

export default function Type1MeetCard(): JSX.Element {
  return (
    <Card size="large" title="The Old Fort" image={type1MeetImg}>
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
          src={`${BASE_PATH}/assets/case studies/type1/intro1.jpg`}
          css={css`
            width: 100%;
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
              The Old Fort
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
              A new site for a unique, innovative research, education, and historical hub.
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
                Fort Lewis College | Research, Content, Design, Development, Product Management
              </span>{" "}
              <p>
                <a
                  css={css`
                    color: white;
                    background-color: #230d1e;
                    font-size: 16px;
                    padding: 10px;

                    &:hover {
                      cursor: pointer;
                      color: #230d1e;
                      background: #f8ddc3;
                    }
                  `}
                  title="The Old Fort website"
                  href="https://www.fortlewis.edu/the-old-fort/"
                >
                  View the live site
                </a>
              </p>
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
            The Old Fort is an agricultural and ranching-focused educational center affiliated with
            Fort Lewis College. While it operates under the college's umbrella, The Old Fort offers
            distinct programs, classes, and projects tailored to agricultural and ranching
            education. The directors of the Old Fort, the client, wanted to create a site for The
            Old Fort to effectively communicate its goals and offerings to the public.
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
              content="The Old Fort's brand presence is indistinguishable from the main FLC brand, and the site has poor information architecture."
            />
            <TextBubble
              css={css`
                flex: 0 1 50%;
              `}
              title="Objective"
              content="Shorten the user's journey to information, and create a distinct look and feel for the Old Fort."
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
              src={`${BASE_PATH}/assets/case studies/type1/inspiration.jpg`}
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
              src={`${BASE_PATH}/assets/case studies/type1/inspiration_m.jpg`}
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
            Project Mapping
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
            My initial step was to create a site map of the existing information available for the
            Old Fort. Using information architecture best practices, I pitched an updated navigation
            structure to the client in a working session. With their expertise, we created a final
            site map to house new and migrated content.
          </p>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 25px;
            `}
          >
            <img
              src={`${BASE_PATH}/assets/case studies/type1/personas1.jpg`}
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
              src={`${BASE_PATH}/assets/case studies/type1/personas_1m.jpg`}
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
            The Old Fort's new site had been a backlogged project for more than two years upon my
            entry to the project. In order to build trust with the client, I quickly turned around a
            couple of design options for the visual style of the new site. One example used
            foundational elements from existing brand graphics, and the other leaned heavily on a
            fresh color palette and use of photography. The clients preferred the use of photography
            and fresh colors, as they better captured the scope and setting of the Old Fort.
          </p>
          <img
            src={`${BASE_PATH}/assets/case studies/type1/lofi.jpg`}
            css={css`
              width: 100%;
              margin-bottom: 40px;
            `}
          />
          <p
            css={css`
              margin: 0 0 35px 0;
              font-size: 24px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                font-size: 16px;
              }
            `}
          >
            The clients requested a means of showcasing the seasonality of the Old Fort's land and
            programs. In response, I developed a Javascript function and CSS classes to
            automatically change the homepage look every three months, according to the four seasons
            of Southwest Colorado.
          </p>

          <img
            src={`${BASE_PATH}/assets/case studies/type1/hifi.jpg`}
            css={css`
              width: 100%;
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
            Changes to the site's information architecture yield the most important improvement to
            the site experience. The existing site had 93 pages, within ten menu items in three
            levels. The proposed structure has seven main menu items and reduced the number of pages
            by 73%.
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
              title="Cognitive Load"
              content="Reduced user cognitive load by streamlining information architecture by 73%"
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Projects Navigation"
              content="Implemented an improved structure for finding and navigating current and past projects"
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="History Organization"
              content="Addressed history pages inaccessible with improved UX and UI."
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
              src={`${BASE_PATH}/assets/case studies/type1/changes.jpg`}
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
              src={`${BASE_PATH}/assets/case studies/type1/changes_m.jpg`}
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
            Improvements to the Old Fort's information architecture and content organization greatly
            improve user access across the site. In addition, The Old Fort's new site better
            represents the character and mission of its land, students, and staff members.
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
              title="Challenge"
              content="The large size of the existing site made migration and clean-up of content tedious."
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Success"
              content="Improving UX and UI significantly for important resources such as projects, history, and growing guides."
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Opportunity"
              content="Research best practices and revisit structure of menu to consider landing pages for the main items."
            />
          </div>

          <img
            src={`${BASE_PATH}/assets/case studies/type1/largetext.jpg`}
            css={css`
              width: 100%;
            `}
          />
        </section>
      </div>
    </Card>
  );
}
