import {useEffect, useState} from 'react';

const useWindowSize = (initialWidth = 0, initialHeight = 0) => {
  const [state, setState] = useState<{width: number; height: number}>({
    width: typeof window === 'undefined' ? initialWidth : window.innerWidth,
    height: typeof window === 'undefined' ? initialHeight : window.innerHeight,
  });

  useEffect(() => {
    const handler = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handler();

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return state;
};

export default useWindowSize;
