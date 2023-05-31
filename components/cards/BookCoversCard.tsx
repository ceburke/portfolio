import bookCovers from "../../public/assets/work/bookcovers.png";
import Card from "../Card";

import { css } from "@emotion/react";
import { BASE_PATH, BREAKPOINT_SMALL } from "../../constants";

const bookCoverImages = [
  `${BASE_PATH}/assets/design/book-covers/doom.jpg`,
  `${BASE_PATH}/assets/design/book-covers/ctrl-chaos.jpg`,
  `${BASE_PATH}/assets/design/book-covers/just-the-tip.jpg`,
  `${BASE_PATH}/assets/design/book-covers/wrong-turns-only.jpg`,
  `${BASE_PATH}/assets/design/book-covers/yeehaw-or-yeenaw.jpg`,
  `${BASE_PATH}/assets/design/book-covers/chicken.jpg`,
];

export default function BookCoversCard(): JSX.Element {
  return (
    <Card size="medium" title="Covers" image={bookCovers} imageType="cover" modalTitle="Covers">
      <p
        css={css`
          margin: 0 25px 50px 25px;
          font-size: 24px;

          @media (max-width: ${BREAKPOINT_SMALL}px) {
            font-size: 16px;
          }
        `}
      >
        A series of imaginary book covers inspired by a love of reading and design.
      </p>
      <ul
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          list-style-type: none;
          padding: 0;
          margin: 25px;
          flex-wrap: wrap;
          gap: 25px;
        `}
      >
        {bookCoverImages.map((bookCoverImg) => (
          <li
            css={css`
              width: 350px;
              height: 350px;
              max-width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 50px 85px;
              background: #f7f7f7;
              border-radius: 35px;
            `}
          >
            <img
              css={css`
                box-shadow: -8px 8px 10px 0px #00000040;
                width: 180px;
                height: 250px;
              `}
              src={bookCoverImg}
              height={250}
              width={180}
              alt=""
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}
