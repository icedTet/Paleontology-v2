import Link from "next/link";

export const NavbarItem = (props: { path: string; label: string }) => (
  <Link href={props.path}>
    <div
      className={`font-medium font-inter text-xl group transition-all cursor-pointer w-full rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2 px-4`}
    >
      <span
        className={`group-odd:from-rose-600 group-odd:to-red-500 group-even:from-red-500 group-even:to-pink-400 text-transparent bg-clip-text bg-gradient-to-tl `}
      >
        {props.label}
      </span>
    </div>
  </Link>
);
