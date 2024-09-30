"use client";

import { socialMedia } from "@/data/socialmedia";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {

  const words = [
    {
      text: "Let's",
    },
    {
      text: "Bring",
    },
    {
      text: "Your",
    },
    {
      text: "Vision",
      className: "text-violet-500 dark:text-violet-500",
    },
    {
      text: "To",   
    },
    {
      text: "Life",   
    },
  ];

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

  return (
    <footer id="contact" className="max-w-[1200px] mx-auto py-20" >
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-10 min-h-98">
        <Image
          src="/footer-grid.svg"
          width={1000}
          height={1000}
          alt="grid"
          className="w-full h-full opacity-10"
        />
      </div>

      <div className="flex flex-col items-center">
       
        <TypewriterEffectSmooth words={words} />

        <p className="text-white max-w-[360px] md:max-w-md lg:max-w-lg text-lg md:text-xl  text-center mb-8">
        Reach out to discuss how we can collaborate and create something amazing together.
        </p>
        <Link href={"mailto: mrhrakib07@gmail.com"}>
        <ButtonsCard onClick={() => null}>{buttons.component}</ButtonsCard>
        </Link>
      </div>
      <div className="flex mt-10 md:mt-16 gap-5 md:gap-2 md:flex-row flex-col justify-around items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mrh
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link key={info.id} href={info.link}>
             <div
              key={info.id}
              className="w-10 h-10 cursor-pointer hover:bg-neutral-800 transition duration-200 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
            </Link>
           
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;