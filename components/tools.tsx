"use client";
import { motion, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";
import { FeatureIconContainer } from "./features/feature-icon-container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { StickyScroll } from "./ui/sticky-scroll";
import {
  IconMailForward,
  IconSocial,
  IconTerminal,
  IconTool,
} from "@tabler/icons-react";
import { useScroll } from "framer-motion";
import { BlurImage } from "./blur-image";

export const Tools = () => {
  const content = [
    {
      icon: <IconMailForward className="h-8 w-8 text-secondary" />,
      title: "Unlock Your Business Potential with ERPNext and Frappe Development Services",
      description:
      "Our ERPNext and Frappe development services empower businesses to streamline operations, increase efficiency, and drive growth. With our expertise, you can leverage the benefits of these powerful tools to optimize your business processes and achieve your goals.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/frappe.png"
            alt="Frappe"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconSocial className="h-8 w-8 text-secondary" />,
      title: "Unlock the full potential of your business with our cloud consulting services.",
      description:
        "Our team of experts specializes in Azure, AWS, and Google GCP, providing tailored solutions to meet your unique business needs.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/second-backup.png"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconTerminal className="h-8 w-8 text-secondary" />,
      title: "Transforming User Experiences Through Creative Design Solutions",
      description:
        "We specialize in creating intuitive and visually appealing user interfaces that captivate and engage your audience. Our expert team of designers combines creativity with user-centric design principles to deliver exceptional experiences that leave a lasting impression.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/fourth-backup.png"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
    {
      icon: <IconTerminal className="h-8 w-8 text-secondary" />,
      title: "Unlock the full potential of Yardi with our custom API integration solutions.",
      description:
        "Our technical consultation services for Yardi provide expert guidance to optimize your operations and maximize efficiency.",
      content: (
        <ImageContainer>
          <BlurImage
            src="/third.png"
            alt="dashboard"
            height="1000"
            width="1000"
            className="w-full rounded-lg shadow-xl shadow-brand/[0.2]"
          />
        </ImageContainer>
      ),
    },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgrounds = [
    "var(--charcoal)",
    "var(--neutral-900)",
    "var(--gray-900)",
  ];
  const index = Math.round(scrollYProgress.get() * (backgrounds.length - 1));

  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });
  return (
    <motion.div
      animate={{
        background: gradient,
      }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className="w-full relative h-full pt-20 md:pt-40"
    >
      <div className="px-6">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconTool className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="mt-4">Understanding and Fulfilling Client Needs: The Key to Our Success</Heading>
        <Subheading>
        At Renocrew Solutions, we are dedicated to understanding what our clients want and delivering the best solutions to drive their businesses forward.
        
        </Subheading>
      </div>
      <StickyScroll content={content} />
    </motion.div>
  );
};

const ImageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg relative shadow-2xl">
      {children}
      <div className="absolute bottom-0 w-full h-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div className="absolute bottom-0 w-40 mx-auto h-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </div>
  );
};
