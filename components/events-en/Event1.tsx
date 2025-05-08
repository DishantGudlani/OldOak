import React, { useRef } from "react";
import { ThreeDCardDemo } from "./sub-components/ThreeDCardDemo1";
import { motion, useScroll, useTransform } from "framer-motion";

export const Event1 = () => {
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
      className="relative w-full events-cards bg-[--accent]"
    >
      <div className="flex text-center w-full px-10 pt-20">
        <p className="text-sm lg:text-base font-medium text-[--primary]">
          There are as many ideas about how to celebrate true love as there are
          people. We provide you with a place where your imagination can
          unfold... you return home... you are at home... you stay in the
          family.... The only limit is your imagination. From a fantasy world to
          a wild punk lifestyle, we have everything you need. In any season of
          the year, we assure you that a in addition to planning, in addition to
          free fun on your wedding day you should have nothing to do.
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
