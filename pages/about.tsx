import { css } from "@emotion/react";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { BASE_PATH, BREAKPOINT_SMALL, COLORS } from "../constants";
import { sectionCss } from "../styles/styles";

function ValueSection(): JSX.Element {
  return (
    <section
      css={[
        sectionCss,
        css`
          display: flex;
          gap: 60px;
          padding: 45px 10px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            flex-direction: column;
            gap: 20px;
            padding: 0;
          }
        `,
      ]}
    >
      <img
        src={`${BASE_PATH}/assets/about/artshow.jpeg`}
        css={css`
          height: 469px;
          width: 390px;
          object-fit: cover;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            width: 100%;
            height: auto;
          }
        `}
      />

      <div
        css={css`
          margin: 10px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            padding: 0 15px 0 30px;
          }
        `}
      >
        <h1
          css={css`
            font-size: 36px;
            font-weight: 400;
            line-height: 42px;
            margin: 0 0 40px 0;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              font-size: 32px;
            }
          `}
        >
          I value
          <br />
          <span
            css={css`
              font-weight: bold;
              color: ${COLORS.secondary};
            `}
          >
            imagination,{" "}
            <br
              css={css`
                @media (min-width: ${BREAKPOINT_SMALL}px) {
                  display: none;
                }
              `}
            />
            vibrance &
            <br
              css={css`
                @media (min-width: ${BREAKPOINT_SMALL}px) {
                  display: none;
                }
              `}
            />{" "}
            inclusivity
          </span>
        </h1>

        <h2
          css={css`
            font-size: 32px;

            @media (min-width: ${BREAKPOINT_SMALL}px) {
              font-size: 20px;
            }
          `}
        >
          Why product design?
        </h2>
        <p
          css={css`
            font-size: 20px;
            margin-bottom: 35px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              font-size: 16px;
            }
          `}
        >
          I enjoy helping others discover new experiences, solve problems, and enrich their daily
          lives. In my past jobs, I excelled at learning about people, finding ways to address their
          needs and making resources accessible. I decided to transition to product design, where I
          can pursue these passions and tasks on a full-time basis.
        </p>

        <h2
          css={css`
            font-size: 32px;

            @media (min-width: ${BREAKPOINT_SMALL}px) {
              font-size: 20px;
            }
          `}
        >
          What do I bring?
        </h2>
        <p
          css={css`
            font-size: 20px;
            margin-bottom: 15px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              font-size: 16px;
            }
          `}
        >
          I bring curiosity, great communication skills, humor and quick learning abilities to the
          table. I am eager to apply my experience to the field of product design, further my skills
          and create impactful products.
        </p>
      </div>
    </section>
  );
}

function PassionSection(): JSX.Element {
  return (
    <section
      css={[
        sectionCss,
        css`
          display: flex;
          gap: 60px;
          padding: 45px 10px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            flex-direction: column;
            gap: 20px;
            padding: 0;
          }
        `,
      ]}
    >
      <img
        src={`${BASE_PATH}/assets/about/engineer.jpeg`}
        css={css`
          height: 469px;
          width: 390px;
          object-fit: cover;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            width: 100%;
            height: auto;
          }
        `}
      />

      <div
        css={css`
          margin: 10px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            padding: 0 0 0 30px;
          }
        `}
      >
        <header
          css={css`
            display: flex;

            @media (max-width: ${BREAKPOINT_SMALL + 50}px) {
              flex-direction: column;
            }
          `}
        >
          <h2
            css={css`
              font-size: 36px;
              font-weight: 400;
              line-height: 42px;
              margin: 0;

              @media (max-width: ${BREAKPOINT_SMALL}px) {
                font-size: 24px;
                margin-top: 15px;
                line-height: 28px;
              }
            `}
          >
            I am passionate about
            <br />
            <span
              css={css`
                font-weight: bold;
              `}
            >
              getting outside, creating art & building community
              <br
                css={css`
                  @media (min-width: ${BREAKPOINT_SMALL}px) {
                    display: none;
                  }
                `}
              />
            </span>
          </h2>
          <div
            css={css`
              display: flex;
              gap: 5px;

              @media (max-width: ${BREAKPOINT_SMALL + 50}px) {
                margin: 25px 0;
              }
            `}
          >
            <img
              src={`${BASE_PATH}/assets/about/biking.png`}
              css={css`
                height: 40px;
                width: 40px;
              `}
            />
            <img
              src={`${BASE_PATH}/assets/about/frisbee.png`}
              css={css`
                height: 40px;
                width: 40px;
              `}
            />
            <img
              src={`${BASE_PATH}/assets/about/running.png`}
              css={css`
                height: 40px;
                width: 40px;
              `}
            />
          </div>
        </header>

        <p
          css={css`
            font-size: 20px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              font-size: 16px;
            }
          `}
        >
          I am an outdoor human of the bike-variety. I started with road biking, traversing the U.S.
          from New Hampshire to Washington. Shortly thereafter, I got hooked on mountain biking. I
          learned how to tango with rocks and roots in the Blue Ridge Mountains of Virginia. I have
          since made my way to Durango, Colorado to explore Southwestern vistas, sedimentary slabs
          and high country traverses.
        </p>
        <p
          css={css`
            font-size: 20px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              font-size: 16px;
            }
          `}
        >
          When not on the bike, I am often playing ultimate frisbee, volleyball or running. I have a
          deep love for ultimate, which I played in college and have found a rich community in
          Durango through.
        </p>
        <p
          css={css`
            font-size: 20px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              font-size: 16px;
            }
          `}
        >
          I make collages,{" "}
          <a
            css={css`
              text-decoration: underline;
            `}
            href="https://thetownbicycle.com/into-the-deep-end-and-back-again-a-cautionary-tale/"
          >
            write articles about bike packing
          </a>
          , play piano and read epic fantasy in my free time.
        </p>
      </div>
    </section>
  );
}

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Claire Burke | About</title>
        <meta
          name="description"
          content="I'm Claire, a product designer with a passion for UI and UX."
        />
        <link rel="icon" href={`${BASE_PATH}/favicon.png`} />
      </Head>

      <div
        css={css`
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
          color: #fff;
          overflow: visible;

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

        <ValueSection />
      </div>
      <PassionSection />

      <Footer />
    </div>
  );
};

export default About;
