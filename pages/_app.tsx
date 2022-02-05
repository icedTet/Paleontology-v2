import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import "../utils/nprogress";
import "nprogress/nprogress.css";
import { configureColor } from "../utils/nprogress";
import { Navbar } from "../components/Navbar";
configureColor("rgb(220,38,38)");
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ||
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? `dark`
        : `light`
    );
  }, []);
  return (
    <div
      className={`flex flex-row ${theme === `dark` && `dark`} w-full h-full `}
    >
      <div className={`flex flex-grow flex-col dark:bg-gray-800 bg-gray-150 `}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
