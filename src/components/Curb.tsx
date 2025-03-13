import Link from "next/link";

export default function Curb() {
  return (
    <Link className="group text-2xl" href="/">
      <div className="flex items-center justify-center w-20 sm:w-64 lg:w-80">
        <div className="flex">
          <div className="font-emblema-one bg-white dark:bg-black">C</div>
          <div
            className="bg-white dark:bg-black overflow-hidden w-0 group-hover:w-12 transition-all ease-in-out duration-700 delay-500 hidden sm:block"
            style={{ direction: "rtl" }}
          >
            laire
          </div>
        </div>
        <div className="h-[2px] w-0 group-hover:w-1 group-hover:lg:w-2 transition-all ease-in-out duration-700 delay-500 hidden sm:block" />
        <div className="h-[2px] bg-black dark:bg-white w-0 group-hover:w-5 group-hover:lg:w-10 transition-all ease-in-out duration-700 delay-500 hidden sm:block" />
        <div className="h-[2px] w-0 group-hover:w-1 group-hover:lg:w-2 transition-all ease-in-out duration-700 delay-500 hidden sm:block" />
        <div className="flex">
          <div className="font-emblema-one bg-white dark:bg-black">B</div>
          <div
            className="bg-white dark:bg-black overflow-hidden w-0 group-hover:w-[50px] transition-all ease-in-out duration-700 delay-500 hidden sm:block"
            style={{ direction: "rtl" }}
          >
            urke
          </div>
        </div>
      </div>
    </Link>
  );
}
