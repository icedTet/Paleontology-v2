import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const NavbarItem = (props: {
  label: string;
  href?: string;
  options?: {
    label: string;
    description?: string;
    href: string;
  }[];
}) => {
  const { label, href, options } = props;
  return (
    <div className={`text-red-400 dark:text-rose-600`}>
      <Link href={href ?? ""}>
        <div className={`relative group`}>
          <a
            className={`text-red-400 dark:text-rose-600 font-bold text-lg cursor-pointer flex flex-row gap-2 items-center`}
            // href={href}
            onClick={(e) => {
              if (!href) {
                e.stopPropagation();
                e.preventDefault();
              }
            }}
          >
            {label}
            {options && (
              <ChevronDownIcon
                className={`w-4 h-4 ml-2 group-hover:rotate-180 transition-all duration-300`}
              />
            )}
          </a>
          {options && (
            <div
              className={`absolute right-0 bottom-0 translate-y-full pt-4 group-hover:scale-100 scale-0 transition-all origin-top-right`}
            >
              <div
                className={`dark:bg-gray-750 bg-gray-100 rounded-2xl shadow-lg w-fit p-4 flex flex-col gap-4`}
              >
                {options.map((option) => (
                  <Link href={option.href} key={option.href}>
                    <div className={`flex flex-col gap-1 cursor-pointer p-3 hover:bg-gray-150 dark:hover:bg-gray-700 rounded-2xl transition-all`}>
                      <span
                        className={`text-red-400 dark:text-rose-600 font-bold text-base cursor-pointer flex flex-row gap-2 items-center`}
                      >
                        {option.label}
                      </span>
                      {option.description && (
                        <span className={`dark:text-gray-500 text-gray-400 text-xs`}>
                          {option.description}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
