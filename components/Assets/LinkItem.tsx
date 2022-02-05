import { LinkIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

export const LinkItem = (props: {
  path: string;
  icon?: string | ((props: { className: string }) => JSX.Element);
  label: string;
}) => {
  const IconElement = props.icon ? (
    typeof props.icon === "string" ? (
      <img
        src={props.icon}
        className={`w-12 h-12 rounded-full flex-shrink-0 z-10`}
      />
    ) : (
      <props.icon
        className={`w-12 h-12 flex-shrink-0 z-10 text-rose-500 group-hover:text-white`}
      />
    )
  ) : (
    <LinkIcon
      className={`w-12 h-12 rounded-full flex-shrink-0 text-rose-500 z-10 group-hover:text-white`}
    />
  );

  return (
    <Link href={props.path}>
      <div
        className={`hoverablecard font-medium font-ubuntu text-base group transition-all duration-500 cursor-pointer w-full rounded-lg dark:bg-gray-750  bg-gray-100 p-2 flex flex-row items-center justify-center gap-4 relative overflow-hidden`}
      >
        <div
          className={`w-full h-full absolute top-0 left-0 bg-gradient-to-r from-rose-700 to-pink-600 opacity-0 dark:group-hover:opacity-30 group-hover:opacity-60 z-10 transition-all`}
        />
        {IconElement}
        <span
          className={`text-rose-500 flex-grow group-hover:text-white transition-all z-10`}
        >
          {props.label}
        </span>
      </div>
    </Link>
  );
};
