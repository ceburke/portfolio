import Link from 'next/link';

export default function Curb() {
  return (
    <Link className="group text-2xl" href="/">
      <div className="flex items-center justify-center w-80">
        <div className="flex">
          <div className="font-emblema-one bg-white dark:bg-black">C</div>
          <div
            className="bg-white dark:bg-black overflow-hidden w-0 group-hover:w-12 transition-all ease-in-out duration-700 delay-500"
            style={{direction: 'rtl'}}
          >
            laire
          </div>
        </div>
        <div className="h-[2px] w-0 group-hover:w-3 transition-all ease-in-out duration-700 delay-500" />
        <div className="h-[2px] bg-black dark:bg-white w-0 group-hover:w-10 transition-all ease-in-out duration-700 delay-500" />
        <div className="h-[2px] w-0 group-hover:w-3 transition-all ease-in-out duration-700 delay-500" />
        <span className="font-emblema-one text-xl overflow-hidden w-0 group-hover:w-14 transition-all ease-in-out duration-700 delay-500">
          Curb
        </span>
        <div className="h-[2px] w-0 group-hover:w-3 transition-all ease-in-out duration-700 delay-500" />
        <div className="h-[2px] bg-black dark:bg-white w-0 group-hover:w-10 transition-all ease-in-out duration-700 delay-500" />
        <div className="h-[2px] w-0 group-hover:w-3 transition-all ease-in-out duration-700 delay-500" />
        <div className="flex">
          <div className="font-emblema-one bg-white dark:bg-black">B</div>
          <div
            className="bg-white dark:bg-black overflow-hidden w-0 group-hover:w-[50px] transition-all ease-in-out duration-700 delay-500"
            style={{direction: 'rtl'}}
          >
            urke
          </div>
        </div>
      </div>
    </Link>
  );
}
