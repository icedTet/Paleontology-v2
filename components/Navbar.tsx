import Link from "next/link";
import { LambdaSVG } from "./LambdaSVG";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { NavbarItem } from "./NavbarItems/NavbarItem";
export const Navbar = () => {
  return (
    <div className={`flex flex-row w-full p-4 gap-8 justify-between`}>
      <Link href="/">
        <div className="flex flex-row items-center gap-4 group cursor-pointer">
          <LambdaSVG
            id="lambda-svg-logo"
            className="w-16 group-hover:stroke-red-500 transition-all"
            noAnim
          />
          <span
            className={`font-bold font-inter text-3xl bg-gradient-to-r from-red-400 to-rose-600 text-transparent bg-clip-text group-hover:from-red-500 group-hover:to-rose-500 transition-all`}
          >
            Paleyontology
          </span>
        </div>
      </Link>

      <div
        className={`flex flex-row justify-end items-center gap-8 pr-8 w-5/12`}
      >
        <div className={`relative group`}>
          <div className="flex flex-row items-center gap-4 py-2">
            <span
              className={` bg-gradient-to-r from-red-400 to-rose-400 text-transparent bg-clip-text cursor-pointer font-ubuntu text-xl `}
            >
              Classes
            </span>
            <ChevronDownIcon className="w-4 h-4 text-rose-400" />
          </div>
          <div
            className={`absolute bottom-0 translate-y-full mt-4 p-4 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 origin-top w-64 dark:bg-gray-750 transition-all rounded-xl shadow-md gap-4 flex flex-col`}
          >
            <NavbarItem path="/classes/APCSA" label="AP CS A" />
            <NavbarItem path="/classes/capstone" label="CS Capstone" />
            <NavbarItem path="/classes/foop" label="FOOP" />
          </div>
        </div>
        <Link href={"/blog"}>
          <div className="flex flex-row items-center gap-4 py-2 px-4 dark:hover:bg-gray-750 rounded-lg transition-all">
            <span
              className={` bg-gradient-to-r from-pink-400 to-rose-400 text-transparent bg-clip-text cursor-pointer font-ubuntu text-xl `}
            >
              Blog
            </span>
          </div>
        </Link>
        <Link href={"https://girlstechclub.wixsite.com/gunngirlstech/outreach"}>
          <div className="flex flex-row items-center gap-4 py-2 dark:hover:bg-gray-750 px-4 rounded-lg transition-all">
            <span
              className={` bg-gradient-to-r from-red-400 to-pink-400 text-transparent bg-clip-text cursor-pointer font-ubuntu text-xl `}
            >
              Girls Tech Club
            </span>
          </div>
        </Link>
        
        <Link href={"https://girlstechclub.wixsite.com/gunngirlstech/outreach"}>
          <div className="flex flex-row items-center gap-4 py-2 dark:hover:bg-gray-750 px-4 rounded-lg transition-all">
            <span
              className={` bg-gradient-to-r from-rose-400 to-red-400 text-transparent bg-clip-text cursor-pointer font-ubuntu text-xl `}
            >
              Contact Me
            </span>
          </div>
        </Link>
        {/* <Link href={"/apcsa"}>
          <span
            className={`font-medium font-inter text-xl dark:text-rose-500 dark:hover:text-rose-400 transition-all cursor-pointer`}
          >
            AP CS A
          </span>
        </Link>
        <Link href={"/foop"}>
          <span
            className={`font-medium font-inter text-xl dark:text-red-500 dark:hover:text-red-400 transition-all cursor-pointer`}
          >
            FOOP
          </span>
        </Link>
        <Link href={"/capstone"}>
          <span
            className={`font-medium font-inter text-xl dark:text-rs-500 dark:hover:text-green-400 transition-all cursor-pointer`}
          >
            CAPSTONE
          </span>
        </Link> */}
      </div>
    </div>
  );
};
