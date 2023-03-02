import {css} from "@emotion/react";
import {BREAKPOINT_SMALL} from "../constants";

interface Props {
  className?: string;
  title?: string;
  content: React.ReactNode;
}

export default function TextBubble(props: Props): JSX.Element {
  const {className, title, content} = props;

  return (
    <div
      className={className}
      css={css`
        background: #f7f7f7;
        padding: 50px;
        border-radius: 35px;

        @media (max-width: ${BREAKPOINT_SMALL}px) {
          padding: 25px;
        }
      `}
    >
      {!!title && (
        <p
          css={css`
            font-weight: bold;
          `}
        >
          {title}
        </p>
      )}
      {content}
    </div>
  );
}
