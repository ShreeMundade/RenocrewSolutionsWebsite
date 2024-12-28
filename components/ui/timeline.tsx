"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="relative w-full">
      <motion.div
        style={{ opacity }}
        className="absolute left-[50%] top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"
      />
      <div className="space-y-24 pb-24">
        <TimelineItem
          year="2024"
          title="Expanding Horizons"
          description="Launch of comprehensive virtual services including Virtual CFO and Virtual CTO solutions. Expansion into new markets and industries."
          image="/placeholder.svg?height=300&width=400"
        />
        <TimelineItem
          year="2023"
          title="Digital Transformation Focus"
          description="Introduction of advanced cloud services and proptech solutions. Helping businesses navigate the digital transformation landscape."
          image="/placeholder.svg?height=300&width=400"
          reverse
        />
        <TimelineItem
          year="2020"
          title="Growth & Innovation"
          description="Significant expansion of our service offerings. Launch of IT consulting and software development divisions."
          image="/placeholder.svg?height=300&width=400"
        />
        <TimelineItem
          year="2015"
          title="Our Beginning"
          description="Founded as a small team of passionate developers and IT enthusiasts, with a vision to transform businesses through technology."
          image="/placeholder.svg?height=300&width=400"
          reverse
        />
      </div>
    </div>
  );
};

const TimelineItem = ({
  year,
  title,
  description,
  image,
  reverse = false,
}: {
  year: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [reverse ? 100 : -100, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
        reverse ? "md:rtl" : ""
      }`}
    >
      <div className={reverse ? "md:text-right" : ""}>
        <div
          className={`sticky top-12 flex flex-col gap-4 ${
            reverse ? "md:items-end" : ""
          }`}
        >
          <div className="text-cyan-500 text-5xl font-bold">{year}</div>
          <div className="text-2xl font-semibold text-white">{title}</div>
          <p className="text-neutral-300 max-w-md">{description}</p>
        </div>
      </div>
      <div className={reverse ? "md:ltr" : ""}>
        <div className="aspect-video relative rounded-xl overflow-hidden bg-neutral-900">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

