import {MAX_CONTENT_WIDTH} from '@/constants';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center sticky top-0 h-20 py-4 px-5 w-full text-center bg-white dark:bg-black dark:text-white">
      <div
        className="flex justify-between items-center mx-auto w-full"
        style={{maxWidth: `${MAX_CONTENT_WIDTH}px`}}
      >
        <Link className="text-2xl font-bold" href="/">
          CB
        </Link>
        <ul className="flex items-center gap-5 lg:gap-10 text-2xl">
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">Resume</Link>
          </li>
          <li>
            <Link href="/about">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
