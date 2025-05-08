import React, { useRef } from "react";
import { ThreeDCardDemo } from "./sub-components/ThreeDCardDemo2";
import { motion, useScroll, useTransform } from "framer-motion";

export const Event2 = () => {
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
        <p className="text-sm lg:text-base font-medium text-[--primary]">
          A more special event, a round birthday, golden wedding, engagement
          party or just a simple family one celebration, proposing to a girl...
          All of these are events that most we would spend it in an intimate,
          home-like place. The castle is like that it also provides a perfect,
          friendly and intimate environment for occasions where we can break
          away from everyday life at home.
        </p>
        <p className="text-base font-medium text-[--primary]">
          Thanks to the features of the park, there are plenty of opportunities
          to recharge outdoors. A special program can be used for this easy
          weekend picnics in the garden, which can even be organized frames can
          also be implemented with us.
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
