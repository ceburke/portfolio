import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Work</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
