import { css } from "@emotion/react";
import { throttle } from "lodash";
import { useEffect, useState } from "react";
import { BASE_PATH, BREAKPOINT_SMALL } from "../constants";

const baseHeroCss = css`
  position: relative;
  margin: 0 auto;
  background: url(${BASE_PATH}/assets/work/hero.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-position-y 0.4s linear;
`;

export default function ParallaxHeroImage(): JSX.Element {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = throttle(() => {
      setScroll(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, 1000 / 10);

    window.addEventListener("scroll", onScroll, false);

    return () => {
      window.removeEventListener("scroll", onScroll, false);
    };
  }, []);

  return (
    <>
      <div
        css={[
          baseHeroCss,
          css`
            width: 1200px;
            max-width: 95vw;
            height: 450px;
            top: 100px;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              display: none;
            }
          `,
        ]}
        style={{ backgroundPositionY: `${-200 - 2000 * Math.min(scroll, 0.3)}px` }}
      />
      <div
        css={[
          baseHeroCss,
          css`
            width: 100vw;
            max-width: none;
            height: 250px;
            top: 0;

            @media (min-width: ${BREAKPOINT_SMALL}px) {
              display: none;
            }
          `,
        ]}
        style={{ backgroundPositionY: `${-20 - 2000 * Math.min(scroll, 0.15)}px` }}
      />
    </>
  );
}
