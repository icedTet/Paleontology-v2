import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { LambdaSVG } from "./LambdaSVG";

export const LandingOverlay = () => {
  const [activateAnimations, setActivateAnimations] = useState(0);

  useEffect(() => {
    (async () => {
      const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1500);
      setActivateAnimations((a) => (a !== 2 ? 1 : a));
      await sleep(1500);
      setActivateAnimations(2);
    })();
  }, []);

  return (
    <>
      <div
        className={`fixed w-full h-full dark:bg-gray-900 bg-gray-50 flex flex-row items-center justify-center top-0 left-0 cursor-pointer ${
          activateAnimations === 1 &&
          `!opacity-0 transition-all duration-1000 pointer-events-none`
        } ${activateAnimations === 2 && `hidden`}  `}
        onClick={() => setActivateAnimations(2)}
      >
        <div className={`flex flex-row gap-3 items-center`}>
          <LambdaSVG
            className={`w-64 transition-all duration-500 ${
              activateAnimations === 1 && `scale-0`
            }`}
            id="lambda-svg"
          />
        </div>
      </div>
    </>
  );
};
