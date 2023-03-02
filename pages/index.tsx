import {css} from "@emotion/react";
import {throttle} from "lodash";
import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {useEffect} from "react";
import BookCoversCard from "../components/cards/BookCoversCard";
import GoogleMapsCard from "../components/cards/GoogleMapsCard";
import SolvedInMotionCard from "../components/cards/SolveInMotionCard";
import StravaCard from "../components/cards/StravaCard";
import SWPGCard from "../components/cards/SWPGCard";
import Type1MeetCard from "../components/cards/Type1MeetCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ParallaxHeroImage from "../components/ParallaxHeroImage";
import {BREAKPOINT_SMALL, COLORS} from "../constants";
import aiImg from "../public/assets/work/logos/ai.png";
import figmaImg from "../public/assets/work/logos/figma.png";
import githubImg from "../public/assets/work/logos/github.png";
import gsuiteImg from "../public/assets/work/logos/gsuite.png";
import idImg from "../public/assets/work/logos/id.png";
import msImg from "../public/assets/work/logos/ms.png";
import psImg from "../public/assets/work/logos/ps.png";
import vsImg from "../public/assets/work/logos/vs.png";
import xdImg from "../public/assets/work/logos/xd.png";
import {sectionCss} from "../styles/styles";

const toolIcons = [figmaImg, xdImg, vsImg, githubImg, idImg, aiImg, psImg, gsuiteImg, msImg];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Claire Burke | Portfolio Home</title>
        <meta
          name="description"
          content="I'm Claire, a product designer with a passion for UI and UX."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div
        css={css`
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
          color: #fff;
          margin-bottom: 150px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            margin-bottom: 0;
            padding-bottom: 20px;
          }
        `}
      >
        <NavBar />
        <div
          css={css`
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${COLORS.primary};
            overflow: hidden;
          `}
        >
          <div
            css={css`
              background: #3e1732;
              height: 750px;
              width: 750px;
              filter: blur(100px);
              position: absolute;
              right: -200px;
              bottom: -50px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                height: 200px;
                width: 200px;
                right: -100px;
              }
            `}
          />
          <div
            css={css`
              background: #965554;
              height: 400px;
              width: 400px;
              filter: blur(150px);
              position: absolute;
              left: -100px;
              bottom: -50px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                height: 300px;
                width: 300px;
                filter: blur(150px);
                left: -150px;
                bottom: 50px;
              }
            `}
          />
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: column;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              flex-direction: column-reverse;
            }
          `}
        >
          <section css={sectionCss}>
            <h1
              css={css`
                font-size: 36px;
                font-weight: 400;
                line-height: 42px;
                margin-top: 100px;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  font-size: 24px;
                  margin-top: 35px;
                  line-height: 28px;
                }
              `}
            >
              Hi there, I’m Claire,
              <br />a{" "}
              <span
                css={css`
                  font-weight: bold;
                  color: ${COLORS.secondary};
                `}
              >
                product designer{" "}
                <br
                  css={css`
                    @media (min-width: ${BREAKPOINT_SMALL}px) {
                      display: none;
                    }
                  `}
                />
              </span>{" "}
              with an eye for
              <br />
              <span
                css={css`
                  font-weight: bold;
                  color: ${COLORS.secondary};
                `}
              >
                creating community
              </span>{" "}
              <br
                css={css`
                  @media (min-width: ${BREAKPOINT_SMALL}px) {
                    display: none;
                  }
                `}
              />{" "}
              and a{" "}
              <br
                css={css`
                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    display: none;
                  }
                `}
              />
              passion for{" "}
              <br
                css={css`
                  @media (min-width: ${BREAKPOINT_SMALL}px) {
                    display: none;
                  }
                `}
              />
              <span
                css={css`
                  font-weight: bold;
                  color: ${COLORS.secondary};
                `}
              >
                outdoor recreation
              </span>
            </h1>
            <p
              css={css`
                font-size: 20px;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  font-size: 16px;
                }
              `}
            >
              I am a designer by way of scientific communication, environmental consulting and
              printmaking.{" "}
              <br
                css={css`
                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    display: none;
                  }
                `}
              />
              My experience gives me a fresh approach to UX/UI and an insatiable curiosity for
              learning.{" "}
              <a
                href="/about"
                css={css`
                  text-decoration: underline;
                `}
              >
                Read More
              </a>
            </p>
          </section>

          <ParallaxHeroImage />
        </div>
      </div>

      <section
        css={[
          sectionCss,
          css`
            margin: 90px auto;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              margin: 35px auto;
            }
          `,
        ]}
      >
        <h2
          css={css`
            font-weight: bold;
            font-size: 40px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              font-size: 24px;
            }
          `}
        >
          What I've Done
        </h2>
        <p
          css={css`
            font-size: 20px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              font-size: 16px;
            }
          `}
        >
          My work is a collection of self-led and created projects. The case studies, optimizations
          and design work represent my willingness to learn and passion for enabling users to reach
          their goals.
        </p>
        <div
          css={css`
            display: flex;
            margin-top: 90px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              flex-direction: column;
              margin-top: 0;
            }
          `}
        >
          <h3
            css={css`
              flex: 0 0 auto;
              width: 200px;
              height: 100%;
              padding-top: 40px;
              font-size: 24px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                padding-top: 0;
                font-size: 20px;
              }
            `}
          >
            Case Studies
          </h3>
          <div
            css={css`
              width: 100%;
            `}
          >
            <Type1MeetCard />
            <SWPGCard />
          </div>
        </div>

        <div
          css={css`
            display: flex;
            margin-top: 90px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              flex-direction: column;
              margin-top: 25px;
            }
          `}
        >
          <h3
            css={css`
              flex: 0 0 auto;
              width: 200px;
              height: 100%;
              padding-top: 40px;
              font-size: 24px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                padding-top: 0;
                font-size: 20px;
              }
            `}
          >
            Optimization
          </h3>
          <div
            css={css`
              display: flex;
              gap: 35px;
              flex: 1 1 100%;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                flex-direction: column;
              }
            `}
          >
            <StravaCard />
            <GoogleMapsCard />
          </div>
        </div>

        <div
          css={css`
            display: flex;
            margin-top: 90px;
            width: 100%;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              flex-direction: column;
              margin-top: 25px;
            }
          `}
        >
          <h3
            css={css`
              flex: 0 0 auto;
              width: 200px;
              height: 100%;
              padding-top: 40px;
              font-size: 24px;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                padding-top: 0;
                font-size: 20px;
              }
            `}
          >
            Design
          </h3>
          <div
            css={css`
              display: flex;
              gap: 35px;
              width: 100%;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                flex-direction: column;
              }
            `}
          >
            <BookCoversCard />
            <SolvedInMotionCard />
          </div>
        </div>
      </section>

      <div
        css={css`
          position: relative;
          background: ${COLORS.primary};
          padding: 50px 0 100px 0;
          overflow: hidden;
        `}
      >
        <div
          css={css`
            background: #723c48;
            height: 600px;
            width: 600px;
            filter: blur(200px);
            position: absolute;
            right: -200px;
            top: 300px;
            z-index: 1;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              width: 300px;
              height: 300px;
              top: 600px;
              right: -100px;
              filter: blur(100px);
            }
          `}
        />
        <div
          css={css`
            position: relative;
            z-index: 2;
          `}
        >
          <section
            css={[
              sectionCss,
              css`
                color: #fff;
              `,
            ]}
          >
            <div
              css={css`
                height: 12px;
                width: 175px;
                background: ${COLORS.secondary};
                margin-bottom: 50px;
              `}
            />
            <h2
              css={css`
                font-weight: bold;
                font-size: 40px;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  font-size: 24px;
                }
              `}
            >
              Tool Kit
            </h2>
            <p
              css={css`
                font-size: 20px;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  font-size: 16px;
                }
              `}
            >
              I taught myself Figma, Adobe XD, HTML and CSS with the help of online learning
              platforms. I have years of professional experience in Adobe programs such as
              Photoshop, Illustrator and InDesign. I have worked in Google Suite and Microsoft
              Office team environments. I am eager to learn new tools and deepen my knowledge.
            </p>
            <ul
              css={css`
                list-style-type: none;
                padding: none;
                display: flex;
                flex-wrap: wrap;
                gap: 30px;
                margin: 90px auto;
                padding: 0;
                justify-content: center;
                align-items: center;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  margin: 30px auto;
                }
              `}
            >
              {toolIcons.map((toolIcon) => (
                <li>
                  <Image src={toolIcon} height={75} width={75} />
                </li>
              ))}
            </ul>

            <div
              css={css`
                display: flex;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  flex-direction: column;
                }
              `}
            >
              <h3
                css={css`
                  flex: 0 0 auto;
                  width: 200px;
                  height: 100%;
                  padding-top: 40px;
                  font-size: 24px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    padding-top: 0;
                  }
                `}
              >
                Certifications
              </h3>
              <div
                css={css`
                  display: flex;
                  gap: 35px;
                  flex: 1 1 100%;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    flex-direction: column;
                  }
                `}
              >
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    background: #fff;
                    height: 200px;
                    border-radius: 35px;
                    padding: 35px;
                  `}
                >
                  <img
                    css={css`
                      margin-bottom: 15px;
                    `}
                    src="/assets/work/logos/codecademy.png"
                    width={157}
                  />
                  <p
                    css={css`
                      font-weight: bold;
                      font-size: 20px;
                      color: #000;
                      margin: 2px 0;
                    `}
                  >
                    Website Building Skill Path
                  </p>
                  <p
                    css={css`
                      font-weight: bold;
                      font-size: 20px;
                      color: #676767;
                      margin: 2px 0;
                    `}
                  >
                    HTML, CSS and GitHub
                  </p>
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    background: #fff;
                    height: 200px;
                    border-radius: 35px;
                    padding: 35px;
                  `}
                >
                  <img
                    css={css`
                      margin-bottom: 15px;
                    `}
                    src="/assets/work/logos/coursera.png"
                    width={232}
                  />
                  <p
                    css={css`
                      font-weight: bold;
                      font-size: 20px;
                      margin: 2px 0;
                      color: #000;
                      margin-top: 24px;
                    `}
                  >
                    Google UX Design Professional Certificate
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
