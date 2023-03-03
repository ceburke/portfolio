import {css} from '@emotion/react';
import {throttle} from 'lodash';
import {useEffect} from 'react';
import {BASE_PATH, BREAKPOINT_SMALL} from '../constants';

export default function ParallaxHero(): JSX.Element {
  // adjust CSS scroll variable on window scroll, used for hero "parallax"
  useEffect(() => {
    const onScroll = throttle(() => {
      document.body.style.setProperty(
        '--scroll',
        `${window.pageYOffset / (document.body.offsetHeight - window.innerHeight)}`
      );
    }, 1000 / 30);
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  return (
    <div
      css={css`
        position: relative;
        width: 1200px;
        max-width: 95vw;
        height: 450px;
        top: 100px;
        margin: 0 auto;
        background: url(${BASE_PATH}/assets/work/hero.jpg);
        background-size: cover;
        background-position-y: calc(-200px - 2000px * var(--scroll));
        background-repeat: no-repeat;

        @media (max-width: ${BREAKPOINT_SMALL}px) {
          top: 0;
          width: 100vw;
          max-width: none;
          height: 250px;
          background-position-y: calc(-20px - 1000px * var(--scroll));
        }
      `}
    />
  );
}
