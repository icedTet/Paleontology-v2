import {
  DocumentIcon,
  DocumentTextIcon,
  PencilAltIcon,
  ShoppingCartIcon,
  SunIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { NextPage } from "next";
import { LinkItem } from "../../components/Assets/LinkItem";

const APCSA: NextPage = () => {
  return (
    <div className={`w-full h-full flex flex-row`}>
      <div className={`max-w-3xl p-8 flex flex-col gap-4`}>
        <div
          className={`w-112 p-4 dark:bg-gray-750 bg-gray-100 rounded-lg h-64 flex flex-col items-center justify-evenly gap-4 shadow-md hoverablecard`}
        >
          <h1
            className={`text-4xl font-bold bg-gradient-to-tl from-red-500 to-pink-400 bg-clip-text text-transparent`}
          >
            AP Computer Science A
          </h1>
          <span className={`font-ubuntu dark:text-gray-250`}>
            This course is designed to give the student a taste of what it is
            like to be a freshman computer science major at a good university.
          </span>
        </div>
        <span className={`text-lg dark:text-gray-400`}>Epik™ Linkz</span>
        <div className={`flex-grow relative overflow-auto`}>
          <div
            className={`flex flex-col gap-4 w-full absolute top-0 left-0 h-full p-4 pb-4`}
          >
            <LinkItem
              path=""
              label="AP Computer Science A Summer Homework"
              icon={SunIcon}
            />
            <LinkItem
              path=""
              label="2021 AP CS A FRQ Questions"
              icon={PencilAltIcon}
            />
            <LinkItem
              path="/apcsa/kool"
              label="Paley Office Hours Zoom Room"
              icon={VideoCameraIcon}
            />

            <LinkItem
              path="/apcsa/kool"
              label="Article that informs Stanford professors' policy on laptops"
              icon={DocumentTextIcon}
            />
            <LinkItem
              path="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              label="HOW TO PURCHASE LAMBDA-THINGWEAR! "
              icon={ShoppingCartIcon}
            />

            <LinkItem
              path=""
              label="Ria Galanos's excellent AP CS resources page"
            />
            <LinkItem path="" label="Student Tech Policies" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default APCSA;
