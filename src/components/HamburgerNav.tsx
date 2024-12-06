'use client';
import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import Curb from './Curb';

export default function HamburgerNav({children}: {children: React.ReactNode}): React.ReactNode {
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
      <button
        type="button"
        aria-label="nav menu"
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </button>
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-white dark:bg-black flex items-center justify-center cursor-zoom-out overflow-auto"
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
            <div className="flex flex-col items-center gap-10">
              <Curb />
              <ul className="flex flex-col text-2xl gap-4 text-center">{children}</ul>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
