import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

import HeroSectionModel from "@/components/HeroSectionModel";
import Experience from "@/components/Experience";
import { navLinks } from "@/constants/data";

const AboutMe = dynamic(() => import("@/components/AboutMe"), {
  loading: () => <p>Loading...</p>,
});

const Technologies = dynamic(() => import("@/components/Technologies"), {
  loading: () => <p>Loading...</p>,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <p>Loading...</p>,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" bg-slate-950">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative z-0 flex flex-col bg-hero-pattern min-h-screen bg-cover bg-no-repeat bg-center">
        <div className="container">
          <div className="flex justify-between items-center gap-4 py-6">
            <p className="text-gray-50 font-bold">SOUMYA</p>
            <ul className="hidden sm:flex justify-between items-center gap-8">
              {navLinks.map(link => (
                <li
                  key={link.id}
                  className="font-medium cursor-pointer text-gray-300 hover:text-gray-100">
                  <p>{link.title}</p>
                </li>
              ))}
            </ul>
            <div className="inline-flex sm:hidden relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                type="button"
                className="text-black bg-gradient-to-r from-indigo-300 to-indigo-500 text-lg font-medium rounded-full p-2.5 text-center items-center">
                {!showMenu ? <FiMenu /> : <FiX />}
              </button>
              {showMenu && (
                <div className="w-[150px] absolute top-full right-0 z-10 py-4 px-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-md mt-2">
                  <ul className="flex flex-col justify-between gap-8">
                    {navLinks.map(link => (
                      <li
                        key={link.id}
                        className="font-medium cursor-pointer text-gray-300 hover:text-gray-100">
                        <p>{link.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-[120px] w-full">
          <div className="container relative">
            <div className="space-y-2">
              <h1 className="text-6xl text-gray-100 font-extrabold leading-tight">
                Hey, I'm <span className="text-lime-400">Soumya</span>
              </h1>
              <p className="text-gray-100 text-xl font-mulish">
                I develop 3D visuals, user interfaces and web application.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative top-0 bottom-0 -z-0 w-full">
          <div className="absolute top-0 right-0 left-0 bottom-0">
            <HeroSectionModel />
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center translate-y-1/2">
          <Link href="#about-me">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-white"
              />
            </div>
          </Link>
        </div>
      </div>
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      {/* <Technologies /> */}
    </div>
  );
}
