import { css } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { BREAKPOINT_SMALL, BREAKPOINT_TINY, COLORS, SECTION_WIDTH } from "../constants";
import { buttonResetCss } from "../styles/styles";

interface Props {
  children?: React.ReactNode;
  className?: string;
  size?: "large" | "medium";
  title: string;
  subtitle?: string;
  image?: string | StaticImageData;
  imageType?: "normal" | "cover" | "icon";
  imageAlt?: string;
  modalTitle?: string;
}

const baseCardCss = css`
  height: 275px;
  background: ${COLORS.gray[900]};
  border-radius: 35px;
  display: flex;
  overflow: hidden;
  position: relative;
  min-height: 275px;
  transition: all 300ms ease;

  &:hover {
    cursor: pointer;
    background: #f8ddc3;
  }
`;

const largeCardCss = css`
  flex-direction: row;
  flex: 1 1 100%;

  @media (max-width: ${BREAKPOINT_SMALL}px) {
    flex-direction: column-reverse;
  }
`;

const mediumCardCss = css`
  flex-direction: column-reverse;
  flex: 1 1 50%;

  @media (max-width: ${BREAKPOINT_SMALL}px) {
    flex: 1 1 100%;
  }
`;

const baseImageCss = css`
  position: relative;
  top: 30px;
  right: 30px;

  @media (max-width: ${BREAKPOINT_SMALL}px) {
    position: static;
  }
`;

const largeImageCss = css`
  flex: 1 1 50%;

  @media (max-width: ${BREAKPOINT_SMALL}px) {
    height: 100px;
    width: 100px;
    align-self: flex-end;
  }
`;

const mediumImageCss = css`
  height: 250px;
  width: 250px;
  align-self: flex-end;
  top: 50px;

  @media (max-width: ${BREAKPOINT_TINY}px) {
    top: 0;
    height: 100px;
    width: 100px;
  }
`;

const iconImageCss = css`
  height: 100px;
  width: 100px;
  align-self: flex-end;
  top: 0;

  @media (max-width: ${BREAKPOINT_TINY}px) {
    top: 0;
    height: 100px;
    width: 100px;
  }
`;

const coverImageCss = css`
  height: 100px;
  width: 100px;
  align-self: flex-end;
`;

export default function Card(props: Props): JSX.Element {
  const {
    children,
    className,
    size = "large",
    image,
    imageType,
    imageAlt = "",
    title,
    subtitle,
    modalTitle,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={className}
      css={[baseCardCss, size === "large" ? largeCardCss : mediumCardCss]}
      onClick={() => setIsOpen(true)}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          margin: 25px;
          max-width: 500px;
        `}
      >
        <p
          css={css`
            font-weight: bold;
            font-size: 20px;
            margin: 2px 0;

            @media (max-width: ${BREAKPOINT_SMALL}px) {
              display: none;
            }
          `}
        >
          {title}
        </p>
        {!!subtitle && (
          <p
            css={css`
              font-weight: bold;
              font-size: 20px;
              color: #676767;
              margin: 2px 0;
            `}
          >
            {subtitle}
          </p>
        )}
        <button
          type="button"
          title="Expand"
          css={[
            buttonResetCss,
            css`
              color: #a64c07;
              font-size: 40px;
            `,
          ]}
        >
          +
        </button>
      </div>
      {!!image && (
        <div
          css={[
            baseImageCss,
            size === "large"
              ? largeImageCss
              : imageType === "cover"
              ? coverImageCss
              : mediumImageCss,
            imageType === "icon" && iconImageCss,
          ]}
        >
          <Image
            layout="fill"
            src={image}
            alt={imageAlt}
            objectFit={imageType === "cover" ? "cover" : "contain"}
          />
        </div>
      )}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth={false}>
        <>
          <button
            type="button"
            css={[
              buttonResetCss,
              css`
                margin-left: 20px;
                font-family: century-gothic;
                position: absolute;
                top: 25px;
                right: 25px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 5px;
                z-index: 100;

                @media (max-width: ${BREAKPOINT_SMALL}px) {
                  top: 10px;
                  right: 10px;
                }
              `,
            ]}
            title="Close"
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(false);
            }}
          >
            <CloseIcon fontSize="large"></CloseIcon>
          </button>

          <div
            css={css`
              max-width: calc(100vw - 64px);
              width: ${SECTION_WIDTH}px;
              max-height: 100vh;
              min-height: 400px;
              padding: 10px;
              overflow-x: hidden;
            `}
          >
            <header
              css={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px 0 10px 25px;
                overflow: hidden;
                width: 100%;
                z-index: 10;
                position: relative;
              `}
            >
              <h2
                css={css`
                  flex: 1 1 auto;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  margin: 0;
                  font-size: 40px;

                  @media (max-width: ${BREAKPOINT_SMALL}px) {
                    font-size: 24px;
                  }
                `}
              >
                {modalTitle}
              </h2>
            </header>
            {children}
          </div>
        </>
      </Dialog>
    </div>
  );
}
