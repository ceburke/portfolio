import { css } from "@emotion/react";

import googleMapsImg from "../../public/assets/work/logos/googlemaps.png";
import { BASE_PATH, BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from "../../constants";
import Card from "../Card";
import TextBubble from "../TextBubble";

export default function GoogleMapsCard(): JSX.Element {
  return (
    <Card
      size="medium"
      title="Google Maps"
      subtitle="Improving user flow for planned trips with custom alarms"
      image={googleMapsImg}
    >
      <div
        css={css`
          padding: 25px 60px 0 35px;
          position: relative;
          top: -35px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            padding: 25px 20px 0 20px;
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
              Enhancing Planned Trips in Google Maps
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
              Syncing navigation, traffic and alarms to reduce stress and increase success rate.
            </p>
          </div>
          <img
            src={`${BASE_PATH}/assets/work/logos/googlemaps.png`}
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
            Dropping a loved one off at the airport can be a stressful experience. What time should
            you leave? What if there is traffic? Google Maps is the go-to navigation app for
            millions of users and can help them further, by taking the guesswork out of planned
            trips.
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
              content="Planned trips can be challenging when time restraints prevent users from updating travel parameters in real time"
            />
            <TextBubble
              css={css`
                flex: 0 1 50%;
              `}
              title="Objective"
              content="Create a single user flow for navigation, traffic alerts and alarm setting"
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
            Google Maps has an existing user flow to address planned trips. Within the route
            navigation interface, there is a “Remind you to leave on time” feature with “Leave by”
            and “Arrive by” time selector options.
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
              src={`${BASE_PATH}/assets/optimizations/googlemaps/existing.png`}
              css={css`
                border-radius: 35px;
                width: 100%;
                display: block;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  display: none;
                  border-radius: 20px;
                }
              `}
            />
            <img
              src={`${BASE_PATH}/assets/optimizations/googlemaps/existing_mobile.png`}
              css={css`
                border-radius: 35px;
                width: 100%;
                display: none;

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
            Google Maps’ existing flow for trip reminders can be optimized for the busy user by
            integrating traffic data and device alarms. A set of simple questions guide the user to
            complete the process.
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
                src={`${BASE_PATH}/assets/optimizations/googlemaps/update.png`}
                css={css`
                  width: 100%;
                  border-radius: 35px;
                  display: block;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    display: none;
                    border-radius: 20px;
                  }
                `}
              />
              <img
                src={`${BASE_PATH}/assets/optimizations/googlemaps/update_mobile.png`}
                css={css`
                  border-radius: 35px;
                  width: 100%;
                  display: none;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    display: block;
                    border-radius: 20px;
                  }
                `}
              />
              <p
                css={css`
                  margin: 25px 0 0 0;
                  font-size: 24px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    font-size: 16px;
                  }
                `}
              >
                Integration into a built-in device alarm allows users to keep one variable of their
                schedule constant and familiar. In practice, checking the viability of a connection
                between device settings and Google Maps would require development input.
                Additionally, development input could inform cross-platform feasibility, on desktop
                and Google Home.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
}
