"use client";
import React from "react";
import Link from "next/link";
import { Vortex } from "@/components/ui/vortex";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const buttons = {
  component: (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-md lg:text-lg text-white backdrop-blur-3xl">
        Let&apos;s connect
      </span>
    </button>
  ),
};

const words = [
  {
    text: "Hi!",
  },
  {
    text: "I'm",
  },
  {
    text: "Mrh,",
    className: "text-violet-500 dark:text-violet-500",
  },
  {
    text: "a",
  },
  {
    text: "Full",
  },
  {
    text: "Stack",
  },
  {
    text: "Web",
  },
  {
    text: "Developer",
  },
  {
    text: "based",
  },
  {
    text: "in",
  },
  {
    text: "Bangladesh.",
  },
];

const Hero = () => {
  return (
    <div
      id="home"
      className="max-w-[1200px] mx-auto py-4 overflow-x-clip bg-black"
    >
      <div className="flex justify-center items-center h-screen">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl max-w-md md:max-w-2xl lg:max-w-4xl font-medium text-center">
            Building Interactive & Seamless{" "}
            <span className="text-violet-500">Web Applications</span>
          </h2>

          <TypewriterEffect words={words} />
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-8">
            <Link href={"mailto: mrhrakib07@gmail.com"}>
              <ButtonsCard onClick={() => null}>
                {buttons.component}
              </ButtonsCard>
            </Link>
          </div>
        </Vortex>
      </div>
    </div>
  );
};

export default Hero;
