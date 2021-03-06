import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LambdaSVG } from "../components/LambdaSVG";
import { LandingOverlay } from "../components/LandingOverlay";
import { Navbar } from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div className={`dark:bg-gray-800 w-full h-full overflow-auto`}>
      <Head>
        <title>Paleyentology</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`w-full h-full flex flex-col gap-8 items-center justify-center`}
      >
        <h1 className={`text-7xl font-black font-montserrat dark:text-gray-50`}>
          Josh Paley&apos;s Web Stuff
        </h1>
        <div
          className={`flex flex-row gap-2 text-lg dark:text-gray-400 w-full text-gray-600`}
        >
          <span className="w-full text-right">(650) 354-8247 (Math Dept.)</span>
          <span>•</span>
          <span
            className={`w-full dark:hover:text-rose-600 hover:text-red-400 hover:underline cursor-pointer transition-all`}
            onClick={() => {
              window.open("mailto:jpaley@pausd.org");
            }}
          >
            jpaley@pausd.org
          </span>
        </div>
      </div>
      <div className={`flex flex-row -translate-y-4 w-full justify-center`}>
        <div
          className={`flex flex-row gap-8 items-center justify-center w-full`}
        ></div>
      </div>
      <LandingOverlay />
    </div>
  );
};

export default Home;
