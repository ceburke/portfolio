import { css } from "@emotion/react";
import { useRef } from "react";
import { BASE_PATH, BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from "../constants";
import useWindowSize from "../hooks/useWindowSize";

export default function ParallaxHero(): JSX.Element {
  const imgRef = useRef<HTMLImageElement>(null);
  const { width } = useWindowSize();

  return (
    <div
      css={css`
        overflow: hidden;
        position: relative;
        width: 1200px;
        max-width: 95vw;
        height: 450px;
        top: 100px;
        margin: 0 auto;

        @media (max-width: ${BREAKPOINT_SMALL}px) {
          top: 50px;
          width: 100vw;
          max-width: none;
          height: 100%;
        }
      `}
    >
      <img
        ref={imgRef}
        src={`${BASE_PATH}/assets/work/artshow_home.png`}
        css={css`
          width: 100%;
          transition: transform 0.1s linear;

          @media (max-width: ${BREAKPOINT_MEDIUM}px) {
            transform: translateY(-50%);
          }
        `}
      />
    </div>
  );
}

/* Store parallax code

useEffect(() => {
    const handler = () => {
      window.requestAnimationFrame(() => {
        imgRef.current?.style.setProperty(
          "transform",
          `translateY(-${Math.min(
            window.scrollY,
            imgRef.current.getBoundingClientRect().height / 2
          )}px)`
        );
      });
    };

    if (width > BREAKPOINT_MEDIUM) {
      window.addEventListener("scroll", handler);
      imgRef.current?.style.setProperty(
        "transform",
        `translateY(-${Math.min(
          window.scrollY,
          imgRef.current.getBoundingClientRect().height / 2
        )}px)`
      );
    } else {
      imgRef.current?.style.setProperty("transform", "translateY(-10%)");
    }

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [width]);
*/
