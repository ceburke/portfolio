import {COLORS, SECTION_WIDTH} from "../constants";
import {css} from "@emotion/react";
import {buttonResetCss} from "../styles/styles";
import Image, {StaticImageData} from "next/image";
import {Dialog, IconButton} from "@mui/material";
import {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  children?: React.ReactNode;
  className?: string;
  size?: "large" | "medium";
  title: string;
  subtitle?: string;
  image?: string | StaticImageData;
  imageType?: "normal" | "cover";
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
`;

const largeCardCss = css`
  flex-direction: row;
  flex: 1 1 100%;
`;

const mediumCardCss = css`
  flex-direction: column-reverse;
  flex: 1 1 50%;
`;

const baseImageCss = css`
  position: relative;
  top: 30px;
  right: 30px;
`;

const largeImageCss = css`
  flex: 1 1 50%;
`;

const mediumImageCss = css`
  height: 100px;
  width: 100px;
  align-self: flex-end;
`;

const coverImageCss = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  overflow: hidden;
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
        <div
          css={css`
            max-width: calc(100vw - 64px);
            width: ${SECTION_WIDTH}px;
            max-height: calc(100vw - 64px);
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
              `}
            >
              {modalTitle}
            </h2>
            <button
              type="button"
              css={[
                buttonResetCss,
                css`
                  margin-left: 20px;
                  font-family: century-gothic;
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
          </header>
          {children}
        </div>
      </Dialog>
    </div>
  );
}
