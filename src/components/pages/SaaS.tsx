"use client";
import React from 'react'
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from 'next/link';

export default function SaaS() {
  return (
    <section className='max-w-[1200px] mx-auto py-15'>
      <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Currently building this EdTech <br />
              <span className="text-4xl md:text-6xl font-bold mt-1 leading-none">
                SaaS Platform
              </span>
            </h1>
          </>
        }
      >
        <Link href={"https://github.com/alpha-154"}>
        
        <Image
          src="/project-saas.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
        </Link>
      </ContainerScroll>
    </div>
    </section>
  )
}
