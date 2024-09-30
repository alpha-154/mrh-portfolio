"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconBrandDeviantart
} from "@tabler/icons-react";

import Experience from "@/components/pages/Experience";
import Feature from "@/components/pages/Feature";
import Footer from "@/components/pages/Footer";
import Hero from "@/components/pages/Hero";
import MyApproach from "@/components/pages/MyApproach";
import Projects from "@/components/pages/Projects";
import SaaS from "@/components/pages/SaaS";
import { Testimonials } from "@/components/pages/Testimonials";


export default function Home() {

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: < IconBrandDeviantart className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
   <>
   <FloatingNav navItems={navItems} />
     <Hero/>
     <Feature/>
     <Projects/>
     <SaaS/>
     <Experience/>
     <MyApproach/>
     <Testimonials/>
     <Footer/>
   </>
  );
}
