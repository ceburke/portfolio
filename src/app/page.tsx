import Link from 'next/link';

export default function Home() {
  return (
    <div className="dark dark:bg-black dark:text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href="/blog/information-architecture-and-responsive-design">
        Information architecture and responsive design
      </Link>
    </div>
  );
}
