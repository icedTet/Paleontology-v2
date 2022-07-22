import Link from "next/link";
import { LambdaSVG } from "../LambdaSVG";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { NavbarItem } from "./NavbarItem";
import { ThemeToggle } from "./ThemeToggle";
export const Navbar = (props: {
  setTheme: (theme: string) => void;
  theme: string;
}) => {
  const { setTheme, theme } = props;
  const classes = [
    {
      label: "AP Computer Science A",
      href: "/classes/apcsa",
      description:
        "Advanced course emulating a freshmen Berkley CS experience while also preparing for the AP CS A exam.",
    },
    {
      label: "FOOP",
      href: "/classes/foop",
      description:
        "Project-oriented course that introduces the student to the functional and object-oriented programming paradigms.",
    },
    {
      label: "CS Capstone",
      href: "/classes/capstone",
      description:
        "Capstone course that allows students to apply their skills to a real-world project.",
    },
  ];
  const clubs = [
    {
      label: "Girls Tech Club",
      href: "/clubs/gtc",
      description:
        "A community of high school women passionate about technology with space to freely explore their own interests.",
    },
    {
      label: "United Computations",
      href: "/clubs/uc",
    description: "One of the longest-running and oldest cs clubs at Gunn.",
    },
  ];
  const skipLanes = [
    {
      label: "Summer Homework for AP CS A",
      href: "/skip/cshw",
      description:
        "Optional summer homework for AP CS A. Heavily advised for people who want to skip directly into AP CS A without taking FOOP.",
    },
    {
      label: "Notes on Skipping directly AP CS A",
      href: "/skip/notes",
      description:
        "Contains IMPORTANT information on skipping, including whether or not you are ready to skip, and how to do it.",
    },
  ];
  return (
    <div
      className={`flex flex-row w-full p-4 gap-8 justify-between sticky top-0`}
    >
      <Link href="/">
        <div className="flex flex-row items-center gap-4 cursor-pointer group">
          <div className={`brightness-100`}>
            <Image src="/logo.webp" width={64} height={64} className={``} />
            {/* dark:invert-100 dark:hue-rotate-180 */}
          </div>
          <span
            className={`font-bold font-montserrat text-3xl bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-transparent bg-clip-text transition-all`}
          >
            Paleyontology
          </span>
        </div>
      </Link>
      <div className={`flex flex-row gap-4 items-center pr-6`}>
        <div
          className={`flex flex-row justify-end items-center gap-8 pr-8 min-w-5/12 whitespace-nowrap`}
        >
          <NavbarItem label="Classes" options={classes} />
          <NavbarItem label="Clubs" options={clubs} />
          <NavbarItem label="Skipping Lanes" options={skipLanes} />
        </div>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};
