import React, { useRef } from "react";
import { ThreeDCardDemo } from "./sub-components/ThreeDCardDemo5";
import { motion, useScroll, useTransform } from "framer-motion";

export const Event5 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 0", "1.11 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="relative w-full mt-20 events-cards bg-[--accent]"
    >
      <div className="flex flex-col items-center text-center w-full px-10 pt-20">
        <p className="text-sm lg:text-base flex flex-col font-medium text-[--primary]">
          Our experience in the field of festivals and our love for music our
          love is enough proof that we can get together at any time a perfect
          castle festival. For the event, only you I miss you creators!
        </p>
        <p className="text-base  font-medium text-[--primary]">
          About 350 dancers can dance on the dance floor of the Great Hall at
          the same time, which we also use on LaBoumok, on the shore of the
          lake, with more than 1,000 people in parallel with concerts. Year
          after year, our castle and its magic garden is home to a weekend-long
          repository of Hungarian popular music.
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
