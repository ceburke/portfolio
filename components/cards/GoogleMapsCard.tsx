import { css } from "@emotion/react";

import googleMapsImg from "../../public/assets/work/logos/googlemaps.png";
import { BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from "../../constants";
import Card from "../Card";
import TextBubble from "../TextBubble";

export default function GoogleMapsCard(): JSX.Element {
  return (
    <Card
      size="medium"
      title="Google Maps"
      subtitle="User flow for planned trips with custom alarms and live conditions"
      image={googleMapsImg}
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
              Syncing navigation, traffic, alarms and navigation to reduce stress and increase
              success rate.
            </p>
          </div>
          <img
            src="/assets/work/logos/googlemaps.png"
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
            millions and has the capacity to help users even more, by taking the guesswork out of
            planned trips.
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
              content="Planned trips can be challenging when time restraints prevent users from updating travel parameters in real time."
            />
            <TextBubble
              title="Objective"
              content="Create a single user flow for navigation, traffic alerts and alarm setting."
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
            selection interface, there is a “Remind you to leave on time” option with “Leave by” and
            “Arrive by” time selector options.
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
              src="/assets/optimizations/googlemaps/existing.png"
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
              src="/assets/optimizations/googlemaps/existing_mobile.png"
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
            Google Maps’ existing flow for trip reminders can be optimized for the busy user’s needs
            by integrating traffic data and device alarms. A set of simple question prompts help
            guide the user and complete setup.
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
                src="/assets/optimizations/googlemaps/update.png"
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
                src="/assets/optimizations/googlemaps/update_mobile.png"
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
                Integration into the built-in device alarm features allows users to keep one
                variable of their schedule static. Additionally, the updated user flow could be
                implemented into desktop and Google Home.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
}
