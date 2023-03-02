import { css } from "@emotion/react";
import Image from "next/image";
import { BASE_PATH, BREAKPOINT_SMALL, COLORS } from "../constants";

const navItemCss = css`
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 24px;
  flex: 1 1 auto;
  color: ${COLORS.secondary};
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Footer(): JSX.Element {
  return (
    <footer
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${COLORS.primary};
        padding: 35px 10px;

        @media (min-width: ${BREAKPOINT_SMALL}px) {
          display: none;
        }
      `}
    >
      <nav
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
        `}
      >
        <a css={navItemCss} href={`${BASE_PATH}/assets/ClaireBurke_Resume.pdf`} about="_blank">
          <div
            css={css`
              display: inline-block;
              position: relative;
              margin-right: 10px;
              height: 17px;
              width: 17px;
            `}
          >
            <Image src={`${BASE_PATH}/assets/paperclip.png`} layout="fill" />
          </div>
          resume
        </a>
        <a css={navItemCss} href="mailto:claireburke1130@gmail.com" about="_blank">
          <div
            css={css`
              display: inline-block;
              position: relative;
              margin-right: 10px;
              height: 16px;
              width: 22px;
            `}
          >
            <Image src={`${BASE_PATH}/assets/mail.png`} layout="fill" />
          </div>
          email
        </a>
      </nav>
    </footer>
  );
}
