import {MAX_CONTENT_WIDTH} from '@/constants';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex">
        <div className="border-2 border-transparent border-b-black dark:border-b-white w-full" />
        <div className="border-4 border-b-black dark:border-b-white flex-none w-[327px] h-14" />
        <div className="border-2 border-transparent border-b-black dark:border-b-white flex-none w-[5%] lg:w-1/6" />
      </div>
      <div
        className="flex justify-between h-24 mx-auto pt-5 px-10 lg:px-40"
        style={{maxWidth: `${MAX_CONTENT_WIDTH}px`}}
      >
        <p className="text-sm">All rights reserved, 2024</p>
        <p className="text-sm">Based in Durango, Colorado</p>
      </div>
    </footer>
  );
}
