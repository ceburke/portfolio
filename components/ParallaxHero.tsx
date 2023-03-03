import {css} from '@emotion/react';
import {useEffect, useRef} from 'react';
import {BASE_PATH, BREAKPOINT_SMALL} from '../constants';

export default function ParallaxHero(): JSX.Element {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      window.requestAnimationFrame(() =>
        imgRef.current?.style.setProperty(
          'transform',
          `translateY(-${Math.min(
            window.scrollY,
            imgRef.current.getBoundingClientRect().height / 2
          )}px)`
        )
      );
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

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
          top: 0;
          width: 100vw;
          max-width: none;
          height: 250px;
        }
      `}
    >
      <img
        ref={imgRef}
        src={`${BASE_PATH}/assets/work/hero.jpg`}
        css={css`
          width: 100%;
          transition: transform 0.1s linear;
        `}
      />
    </div>
  );
}
