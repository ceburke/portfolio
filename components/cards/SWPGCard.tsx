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
      title="Housing & Dining"
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
          src={`${BASE_PATH}/assets/case studies/swpg/intro.jpg`}
          css={css`
            width: 100%;
          `}
          alt="The Fort Lewis College Housing and Dining homepage"
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
              Housing & Dining
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
              Updating the primary outlet for current and prospective students and families looking
              for information on student housing and dining.
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
                Fort Lewis College | Agile Lead, Research, Design, Development
              </span>{" "}
            </p>
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
                title="Fort Lewis College Housing & Dining"
                href="https://www.fortlewis.edu/life-at-flc/housing-dining/home"
              >
                View the live site
              </a>
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
            The student housing department of Fort Lewis College has seen significant turnover in
            recent years due to the pandemic. New staff were flooded with questions from other
            department staff, students, and parents. In an effort to mitigate question volume, the
            new team brought on the Fort Lewis College web team to redesign the housing website.
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
              content="Existing web resources were not answering the questions of student and families, causing an overload of requests for housing staff."
            />
            <TextBubble
              css={css`
                flex: 0 1 50%;
              `}
              title="Objective"
              content="Update housing information so that it is accurate and accessible for all site users."
            />
          </div>
          <img
            alt="Before images of the old housing and dining site's menu and FAQ page."
            src={`${BASE_PATH}/assets/case studies/swpg/trio.jpg`}
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
            In order to best capture the points of entry and goals of users, I created user personas
            to guide the redesign process. Creating personas was an essential step to ensure the
            user journey accounted for the varied audience of the housing and dining site.
          </p>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 25px;
            `}
          >
            <img
              alt="Three personas for the housing and dining site redesign."
              src={`${BASE_PATH}/assets/case studies/swpg/personas1.jpg`}
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
              alt="Three personas for the housing and dining site redesign."
              src={`${BASE_PATH}/assets/case studies/swpg/personas1.jpg`}
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
            The existing housing and dining site was dense with information, much of which was
            outdated and difficult to navigate. To improve user flow and ensure that critical
            information was preserved, I led my team in a site mapping exercise. We used the site
            map, along with user personas, to weigh consider content and design choices throughout
            the redesign process.
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
            <img
              alt="A Figjam sitemap of the Fort Lewis College housing and dining site before and after."
              src={`${BASE_PATH}/assets/case studies/swpg/design.jpg`}
              css={css`
                width: 100%;
                margin: 25px 0;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  display: none;
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
            The redesign timeline was tight due to a major shift in the Housing department's
            selection process for the spring semester. Given the expedited schedule, I led my team
            in an iterative rollout using the Agile framework. We worked in sprints to complete
            pages by priority, allowing us to work efficiently, request information from the
            department in distinct phases, and launch updates within the existing site framework.
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
              title="Dining rates"
              content="Put plan and rates information in a no-frills, consolidated format, allowing users to find their plan and cost without scrolling."
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Housing options"
              content="Switched from singular pages per housing option to a shopping-style card format."
            />
            <TextBubble
              css={css`
                flex: 0 1 33%;
              `}
              title="Help center"
              content="Developed a help center to direct users to FAQs, resources, and policies."
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
              alt="The Fort Lewis College housing and dining help center, dining rates, and housing options pages."
              src={`${BASE_PATH}/assets/case studies/swpg/changes.jpg`}
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
              alt="The Fort Lewis College housing and dining help center, dining rates, and housing options pages."
              src={`${BASE_PATH}/assets/case studies/swpg/changes_m.jpg`}
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
            After launch, I sought feedback from the housing and dining team. They were pleased with
            the site redesign overall, and noted that the volume of questions from parents and
            families was noticeably less. Their buy-in to the website update request system has
            increased since the redesign. The web team now collaborates with the housing team to
            make important updates well in advance of semesterly changes.
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
              content="Web team was unaware of the magnitude of outdated and missing information. Requesting information from housing and dining staff during a busy time of year was difficult."
            />
            <TextBubble
              css={css`
                flex: 0 1 30%;
              `}
              title="Success"
              content="Based on site data, success rates increased and bounce rates decreased with the launch of the redesigned site."
            />
            <TextBubble
              css={css`
                flex: 0 1 30%;
              `}
              title="Opportunity"
              content="Continue to nurture a healthy working relationship with the housing and dining team. Build important dates into the web team's project workflow."
            />
          </div>
          <img
            alt="The important dates pages for Fort Lewis College housing and dining."
            src={`${BASE_PATH}/assets/case studies/swpg/highlight.jpg`}
            css={css`
              width: 100%;
            `}
          />
        </section>
      </div>
    </Card>
  );
}
