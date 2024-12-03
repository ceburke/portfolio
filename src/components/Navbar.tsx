import { MAX_CONTENT_WIDTH } from "@/constants";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center sticky top-0 z-10 h-20 py-4 px-5 w-full text-center bg-white dark:bg-black dark:text-white">
      <div
        className="flex justify-between items-center mx-auto w-full"
        style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}
      >
        <Link className="text-2xl font-bold font-emblema-one" href="/">
          CB
        </Link>
        <ul className="flex items-center gap-4 lg:gap-10 text-md lg:text-lg">
          <li>
            <Link className="flex gap-2 items-center hover:underline" href="/">
              Work
            </Link>
          </li>
          <li>
            <Link className="flex gap-2 items-center hover:underline" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center hover:underline"
              href="/assets/ClaireBurkeResume.pdf"
              about="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                />
              </svg>
              Resume
            </Link>
          </li>
          <li>
            {/* TODO figure out why the mailto: email address does not open the default mail app pop-up */}
            <Link
              className="flex gap-2 items-center hover:underline"
              href="mailto:claireburke1130@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
