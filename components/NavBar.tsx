import {
  BASE_PATH,
  BREAKPOINT_LARGE,
  BREAKPOINT_MEDIUM,
  BREAKPOINT_SMALL,
  COLORS,
} from "../constants";
import { css } from "@emotion/react";
import { sectionCss } from "../styles/styles";
import Image from "next/image";
import { useRouter } from "next/router";

const baseNavItemCss = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-top: 12px solid transparent;
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 24px;
  flex: 1 1 auto;
  max-width: 100px;

  &:hover {
    opacity: 0.8;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: ${BREAKPOINT_MEDIUM}px) {
    max-width: 75px;
    font-size: 20px;
  }
`;

const pageNavItemCss = css`
  font-weight: 700;
`;

const navItemCss = css`
  color: ${COLORS.secondary};
`;

const activeItemCss = css`
  border-top-color: ${COLORS.secondary};
`;

export default function NavBar(): JSX.Element {
  const router = useRouter();

  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        height: 100px;
        max-width: 100%;
      `}
    >
      <div
        css={[
          sectionCss,
          css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            padding: 0 10px;
          `,
        ]}
      >
        <a
          css={css`
            display: inline-flex;
            align-items: center;
            color: ${COLORS.secondary};
            font-weight: bold;
            font-size: 40px;
            line-height: 48px;
            text-transform: lowercase;
            margin-top: 15px;
            height: 100%;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              font-size: 20px;
              margin-left: 10px;
            }
          `}
          href={`${BASE_PATH || "/"}`}
        >
          Claire Burke
        </a>
        <nav
          css={css`
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex: 1 1 0%;
            gap: 100px;
            overflow: hidden;

            @media (max-width: ${BREAKPOINT_LARGE}px) {
              gap: 60px;
            }

            @media (max-width: ${BREAKPOINT_MEDIUM}px) {
              gap: 50px;
            }
          `}
        >
          <a
            css={[baseNavItemCss, pageNavItemCss, router.pathname === "/" && activeItemCss]}
            href={`${BASE_PATH}/`}
          >
            work
          </a>
          <a
            css={[baseNavItemCss, pageNavItemCss, router.pathname === "/about" && activeItemCss]}
            href={`${BASE_PATH}/about`}
          >
            about
          </a>
          <a
            css={[
              baseNavItemCss,
              navItemCss,
              css`
                @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                  display: none;
                }
              `,
            ]}
            href={`${BASE_PATH}/assets/ClaireBurke-Resume.pdf`}
            about="_blank"
          >
            <div
              css={css`
                flex: 0 0 auto;
                position: relative;
                margin-right: 10px;
                height: 17px;
                width: 17px;
              `}
            >
              <Image
                src={`${BASE_PATH}/assets/paperclip.svg`}
                alt="Download resume"
                layout="fill"
              />
            </div>
            resume
          </a>
          <a
            css={[
              baseNavItemCss,
              navItemCss,
              css`
                @media (max-width: ${BREAKPOINT_MEDIUM}px) {
                  display: none;
                }
              `,
            ]}
            href="mailto:claireburke1130@gmail.com"
          >
            <div
              css={css`
                flex: 0 0 auto;
                position: relative;
                margin-right: 10px;
                height: 16px;
                width: 22px;
              `}
            >
              <Image src={`${BASE_PATH}/assets/envelope.svg`} alt="Email" layout="fill" />
            </div>
            email
          </a>
        </nav>
      </div>
    </header>
  );
}
