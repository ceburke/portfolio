import {MAX_CONTENT_WIDTH} from '@/constants';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky h-14 p-2 w-full text-center bg-white dark:bg-black dark:text-white">
      <div
        className="flex justify-between items-center mx-auto"
        style={{maxWidth: `${MAX_CONTENT_WIDTH}px`}}
      >
        <Link href="/">CB</Link>
        <ul className="flex items-center gap-4">
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
