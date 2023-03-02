import { css } from "@emotion/react";

import stravaImg from "../../public/assets/work/logos/strava.png";
import { BASE_PATH, BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from "../../constants";
import Card from "../Card";
import TextBubble from "../TextBubble";

export default function StravaCard(): JSX.Element {
  return (
    <Card
      size="medium"
      title="Strava"
      subtitle="Integrating trail conditions reporting and viewing within existing user flows"
      image={stravaImg}
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
              Trail conditions are a key aspect of any trail-based activity. Seasonal transitions
              and weather events can impact trail surfaces, how and when athletes recreate.
            </p>
          </div>
          <img
            src={`${BASE_PATH}/assets/work/logos/strava.png`}
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
            Going on a trail run or bike ride during mud season can be a slog. It can be hard to
            predict when trails will be travelable during seasonal transitions or after weather
            events. Rather than redundant struggles through poor conditions, a trail conditions
            feature in Strava could make the wisdom of one become many.
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
              content="Seasonal changes and weather events can create unenjoyable and/or unsafe trail conditions for users."
            />
            <TextBubble
              css={css`
                flex: 0 1 50%;
              `}
              title="Objective"
              content="Help users “know before they go”, or report their experience."
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
            Competitors such as AllTrails, Trailforks and FarOut have conditions reporting features.
            All three allow input of location-specific text, images and conditions. Overall, trail
            reports can be sparse and out-of-date.
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
              src={`${BASE_PATH}/assets/optimizations/strava/competitors.png`}
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
              src={`${BASE_PATH}/assets/optimizations/strava/competitor_mobile.png`}
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
                src={`${BASE_PATH}/assets/optimizations/strava/report.png`}
                css={css`
                  width: 100%;
                  max-height: 700px;
                  object-fit: cover;
                  border-radius: 35px;
                  display: block;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    display: none;
                    border-radius: 20px;
                  }
                `}
              />
              <img
                src={`${BASE_PATH}/assets/optimizations/strava/report_m.png`}
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
                  margin: 10px 0 35px 0;
                  font-size: 24px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    font-size: 16px;
                  }
                `}
              >
                Viewing trail conditions could be added into the maps hub. Trail conditions could be
                viewable as a map layer and per segment.
              </p>
            </div>
            <div>
              <img
                src={`${BASE_PATH}/assets/optimizations/strava/view.png`}
                css={css`
                  width: 100%;
                  max-height: 700px;
                  object-fit: cover;
                  border-radius: 35px;
                  display: block;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    display: none;
                    border-radius: 20px;
                  }
                `}
              />
              <img
                src={`${BASE_PATH}/assets/optimizations/strava/view_m.png`}
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
                  margin: 10px 0 35px 0;
                  font-size: 24px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    font-size: 16px;
                  }
                `}
              >
                Implementation would cause adjustments to several main user flows, but the value to
                activity enjoyment, route planning and trail stewardship would be significant.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
}
