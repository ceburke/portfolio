import {css} from "@emotion/react";
import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {useEffect} from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import {COLORS} from "../constants";
import justTheTipImg from "../public/assets/work/just-the-tip.jpg";
import aiImg from "../public/assets/work/logos/ai.png";
import figmaImg from "../public/assets/work/logos/figma.png";
import githubImg from "../public/assets/work/logos/github.png";
import googleMapsImg from "../public/assets/work/logos/googlemaps.png";
import gsuiteImg from "../public/assets/work/logos/gsuite.png";
import idImg from "../public/assets/work/logos/id.png";
import msImg from "../public/assets/work/logos/ms.png";
import psImg from "../public/assets/work/logos/ps.png";
import stravaImg from "../public/assets/work/logos/strava.png";
import vsImg from "../public/assets/work/logos/vs.png";
import xdImg from "../public/assets/work/logos/xd.png";
import solvedInMotionImg from "../public/assets/work/solved-in-motion.jpeg";
import swpgImg from "../public/assets/work/swpg.png";
import type1MeetImg from "../public/assets/work/type1meet.png";
import {sectionCss} from "../styles/styles";

const toolIcons = [figmaImg, xdImg, vsImg, githubImg, idImg, aiImg, psImg, gsuiteImg, msImg];

const Home: NextPage = () => {
  // adjust CSS scroll variable on window scroll, used for hero "parallax"
  useEffect(() => {
    const onScroll = () => {
      document.body.style.setProperty(
        "--scroll",
        `${window.pageYOffset / (document.body.offsetHeight - window.innerHeight)}`
      );
    };
    window.addEventListener("scroll", onScroll, false);
    return () => {
      window.removeEventListener("scroll", onScroll, false);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Claire Burke | Portfolio Home</title>
        <meta
          name="description"
          content="I'm Claire, a product designer with a passion for UI and UX."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* TODO switch this to local @next/font */}
        <link rel="stylesheet" href="https://use.typekit.net/eri7ofr.css"></link>
      </Head>

      <div
        css={css`
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
          color: #fff;
          margin-bottom: 175px;
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
            `}
          />
        </div>
        <section css={sectionCss}>
          <h1
            css={css`
              font-size: 36px;
              font-weight: 400;
              line-height: 42px;
              margin-top: 100px;
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
              product designer
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
            and a <br />
            passion for{" "}
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
            `}
          >
            I am a designer by way of scientific communication, environmental consulting and
            printmaking.
            <br />
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
        <div
          css={css`
            position: relative;
            width: 1200px;
            max-width: 95vw;
            height: 450px;
            top: 100px;
            background: url(/assets/work/hero.jpg);
            background-size: cover;
            background-position-y: calc(-200px - 2000px * var(--scroll));
          `}
        />
      </div>

      <section
        css={[
          sectionCss,
          css`
            margin: 90px auto;
          `,
        ]}
      >
        <h2
          css={css`
            font-weight: bold;
            font-size: 40px;
          `}
        >
          What I've Done
        </h2>
        <p
          css={css`
            font-size: 20px;
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
          `}
        >
          <h3
            css={css`
              flex: 0 0 200px;
              height: 100%;
              padding-top: 40px;
              font-size: 24px;
            `}
          >
            Case Studies
          </h3>
          <div
            css={css`
              width: 100%;
            `}
          >
            <Card
              size="large"
              title="Type 1 Meet"
              subtitle="Community and resource sharing platform for people with chronic disease"
              image={type1MeetImg}
            >
              <p>bacon ipsum</p>
            </Card>
            <Card
              size="large"
              css={css`
                margin-top: 35px;
              `}
              title="Southwest Print Guild"
              subtitle="Expanding professional networks and community building in a rural region"
              image={swpgImg}
            />
          </div>
        </div>

        <div
          css={css`
            display: flex;
            margin-top: 90px;
          `}
        >
          <h3
            css={css`
              flex: 0 0 200px;
              height: 100%;
              padding-top: 40px;
              font-size: 24px;
            `}
          >
            Optimization
          </h3>
          <div
            css={css`
              display: flex;
              gap: 35px;
              flex: 1 1 100%;
            `}
          >
            <Card
              size="medium"
              title="Strava"
              subtitle="Integrating trail conditions reporting with activities and heat maps"
              image={stravaImg}
            />
            <Card
              size="medium"
              title="Google Maps"
              subtitle="User flow for planned trips with custom alarms and live conditions"
              image={googleMapsImg}
            />
          </div>
        </div>

        <div
          css={css`
            display: flex;
            margin-top: 90px;
            width: 100%;
          `}
        >
          <h3
            css={css`
              flex: 0 0 200px;
              height: 100%;
              padding-top: 40px;
              font-size: 24px;
            `}
          >
            Design
          </h3>
          <div
            css={css`
              display: flex;
              gap: 35px;
              width: 100%;
            `}
          >
            <Card
              size="medium"
              title="Book Covers"
              subtitle="A series of imaginary book covers inspired by a love of reading and design"
              image={justTheTipImg}
              imageType="cover"
            />
            <Card
              size="medium"
              title="Solved in motion"
              subtitle="Immersive art installation featuring a local trail system"
              image={solvedInMotionImg}
              imageType="cover"
            />
          </div>
        </div>
      </section>

      <div
        css={css`
          background: ${COLORS.primary};
          padding: 50px 0 100px 0;
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
            `}
          >
            Tool Kit
          </h2>
          <p
            css={css`
              font-size: 20px;
            `}
          >
            I taught myself Figma, Adobe XD, HTML and CSS with the help of online learning
            platforms. I have years of professional experience in Adobe programs such as Photoshop,
            Illustrator and InDesign. I have worked in Google Suite and Microsoft Office team
            environments. I am eager to learn new tools and deepen my knowledge.
          </p>
          <ul
            css={css`
              list-style-type: none;
              padding: none;
              display: flex;
              gap: 30px;
              margin: 90px 0;
              justify-content: center;
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
            `}
          >
            <h3
              css={css`
                flex: 0 0 200px;
                height: 100%;
                padding-top: 40px;
                font-size: 24px;
              `}
            >
              Certifications
            </h3>
            <div
              css={css`
                display: flex;
                gap: 35px;
                flex: 1 1 100%;
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
  );
};

export default Home;
