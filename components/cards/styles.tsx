import {BREAKPOINT_SMALL} from '../../constants';
import {css} from '@emotion/react';

// to make content go all the way to edge of card modal have to wrap in div that applies the inverse of
// ancestors' padding, hacky but easier than rewriting the ancestors to not have padding
// and wrapping each individual content in a container with the padding
export const fullBleedContentCss = css`
  position: relative;
  left: -45px;
  width: calc(100% + 35px + 60px + 20px);

  @media (max-width: ${BREAKPOINT_SMALL}px) {
    width: calc(100% + 20px + 20px + 20px);
    left: -30px;
  }
`;
