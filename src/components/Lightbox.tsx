'use client';
import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';

export default function LightBox({children}: {children: React.ReactNode}): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  // prevent scrolling behind when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className="cursor-zoom-in" onClick={() => setIsOpen(true)}>
        {children}
      </div>
      {isOpen &&
        createPortal(
          <div
            className="fixed left-0 top-0 h-[100vh] w-[100vw] z-50 bg-white/90 dark:bg-black/90 flex items-center justify-center cursor-zoom-out overflow-auto"
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              aria-label="Close"
              className="group absolute top-3 right-3 flex items-center justify-center h-10 w-10 z-10 bg-white/20 hover:bg-white/70 dark:bg-black/20 hover:dark:bg-black/70 rounded-full transition-all ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 group-hover:scale-110 transition-all ease-in-out"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            {children}
          </div>,
          document.body
        )}
    </>
  );
}
