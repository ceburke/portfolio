import {css} from '@emotion/react';

import stravaImg from '../../public/assets/work/logos/strava.png';
import {BASE_PATH, BREAKPOINT_MEDIUM, BREAKPOINT_SMALL} from '../../constants';
import Card from '../Card';
import TextBubble from '../TextBubble';
import {fullBleedContentCss} from './styles';

export default function StravaCard(): JSX.Element {
  return (
    <Card size="medium" title="Strava" image={stravaImg} imageType="icon">
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
              Integrating Trail Conditions
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
              Conditions play a crucial role in any trail-based activity. Seasonal transitions and
              weather events can significantly affect trail surfaces and impact how and when
              athletes recreate.
            </p>
          </div>
          <img
            src={`${BASE_PATH}/assets/work/logos/strava.png`}
            css={css`
              text-align: right;
              height: 180px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                width: 75px;
                height: 75px;
                margin-bottom: 25px;
              }
            `}
          />
        </div>

        <div css={fullBleedContentCss}>
          <img
            src={`${BASE_PATH}/assets/optimizations/strava/intro.jpeg`}
            css={css`
              width: 100%;
              max-height: 400px;
              object-fit: cover;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                max-height: 200px;
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
            Going on a trail run or bike ride during mud season can be a slog. It is difficult to
            predict when trails will be travelable during seasonal transitions and after weather
            events. By incorporating a trail conditions feature, Strava could enable users to share
            their experiences, allowing others to benefit from their insights and protect trail
            surfaces from negative wear.
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
              content="Help users “know before they go”, or report their experience to inform others."
            />
          </div>
          <img
            src={`${BASE_PATH}/assets/optimizations/strava/existing.jpeg`}
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
            While all three platforms allow users to input location-specific text, images, and trail
            conditions, the trail reports are often sparse and out-of-date due to low user
            engagement.
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
            Strava’s activity recording could host the conditions reporting user flow. To be
            competitive, trail reporting must include images, text and a relevant time-scale. To
            avoid privacy issues, trail reports should not be directly linked to activity posts. The
            reporting interface must focus on accessibility and convenience to increase engagement.
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
                  object-fit: cover;
                  border-radius: 35px;
                  display: block;
                  height: 100%;
                  margin-top: 20px;
                  margin-bottom: 20px;

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
                  margin: 20px 0 10px 0;
                  font-size: 24px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    font-size: 16px;
                  }
                `}
              >
                Trail conditions are viewable via the maps hub as a map layer and per segment.
              </p>
            </div>
            <div>
              <img
                src={`${BASE_PATH}/assets/optimizations/strava/view.png`}
                css={css`
                  width: 100%;
                  max-height: 100%;
                  object-fit: cover;
                  border-radius: 35px;
                  display: block;
                  margin-top: 100px;

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
                  margin: 15px 0 35px 0;
                  font-size: 24px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    font-size: 16px;
                  }
                `}
              >
                Although implementing the feature would cause adjustments to several main user
                flows, its potential value in enhancing activity enjoyment, facilitating route
                planning, and promoting trail stewardship is significant.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
}
