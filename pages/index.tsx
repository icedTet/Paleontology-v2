import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LambdaSVG } from "../components/LambdaSVG";
import { LandingOverlay } from "../components/LandingOverlay";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className={`dark:bg-gray-800 w-full h-full`}>
      <Head>
        <title>Paleyentology</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <LandingOverlay />
    </div>
  );
};

export default Home;
