import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export const ThemeToggle = (props: {
  setTheme: (theme: string) => void;
  theme: string;
}) => {
  const { setTheme, theme } = props;
  return (
    <div
      className={`dark:text-gray-50 cursor-pointer hover:bg-gray-100 hover:shadow-lg dark:hover:bg-gray-850 p-2 rounded-2xl transition-all duration-300`}
      onClick={() => {
        setTheme(theme === `dark` ? `light` : `dark`);
        localStorage.setItem("theme", theme === `dark` ? `light` : `dark`);
      }}
    >
      {theme === `dark` ? (
        <MoonIcon className={`h-6 w-6`} />
      ) : (
        <SunIcon className={`h-6 w-6`} />
      )}
    </div>
  );
};
