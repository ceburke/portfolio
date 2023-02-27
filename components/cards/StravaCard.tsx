import { css } from "@emotion/react";

import stravaImg from "../../public/assets/work/logos/strava.png";
import { BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from "../../constants";
import Card from "../Card";
import TextBubble from "../TextBubble";

export default function StravaCard(): JSX.Element {
  return (
    <Card
      size="medium"
      title="Strava"
      subtitle="Integrating trail conditions reporting with activities and heat maps"
      image={stravaImg}
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
              Integrating Trail Conditions into Strava
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
              Trail conditions are a key aspect of any trail-based activity. Many regions,
              especially the US and Europe, where Strava’s user base is largest, experience seasonal
              transitions which impact trail surfaces. Trails world-wide are affected by weather
              events such as rainstorms and windstorms.
            </p>
          </div>
          <img
            src="/assets/work/logos/strava.png"
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
            Create a trail conditions reporting and viewing user flow which utilizes existing
            features within the Strava app. Allow users to make informed decisions about trail usage
            based on fellow user information, or contribute to that knowledge base.
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
              content="Seasonal changes and weather events can create unenjoyable and/or unsafe trail conditions for users."
            />
            <TextBubble
              title="Objective"
              content="Create a trail condition user flow which helps users plan activities accordingly."
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
            Competitors such as Gaia, Trailforks and FarOut have trail reporting features.
            Trailforks provides basic text input, while Gaia and FarOut allow input of
            location-specific text, images and in-map conditions. Trail reports for all three
            competitors show the most recent date, which can be irrelevant if older than a few days.
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
              src="/assets/design/solved-in-motion/thesis_full.jpg"
              css={css`
                border-radius: 35px;
                width: 33%;

                @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                  width: 100%;
                }
              `}
            />
            <img
              src="/assets/design/solved-in-motion/thesis_full.jpg"
              css={css`
                border-radius: 35px;
                width: 33%;
                @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                  width: 100%;
                }
              `}
            />
            <img
              src="/assets/design/solved-in-motion/thesis_full.jpg"
              css={css`
                border-radius: 35px;
                width: 33%;
                @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                  width: 100%;
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
            Strava’s activity recording could host the conditions reporting aspect of the user flow.
            To be competitive, trail reporting must include images, text and have a time-scale
            selector. To avoid privacy issues, trail reports should not be directly linked to
            activity posts. However, to make the user flow accessible and convenient, reporting
            should be integrated into the activity recording flow.
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
                src="/assets/design/solved-in-motion/thesis_full.jpg"
                css={css`
                  width: 100%;
                  border-radius: 35px;
                `}
              />
              <p
                css={css`
                  margin: 10px 0 35px 0;
                  font-size: 24px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    font-size: 16px;
                  }
                `}
              >
                Viewing trail conditions could be added into the maps hub. Trail conditions should
                be as a layer on the overall map, within segment details and the route planner.
              </p>
            </div>
            <div>
              <img
                src="/assets/design/solved-in-motion/thesis_full.jpg"
                css={css`
                  width: 100%;
                  border-radius: 35px;
                `}
              />
              <p
                css={css`
                  margin: 10px 0 35px 0;
                  font-size: 24px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    font-size: 16px;
                  }
                `}
              >
                Implementation would require adjustments to all main user flows, but the value to
                activity enjoyment, route planning and trail stewardship would be significant.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
}
