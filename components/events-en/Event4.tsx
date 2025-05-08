import React, { useRef } from "react";
import { ThreeDCardDemo } from "./sub-components/ThreeDCardDemo4";
import { motion, useScroll, useTransform } from "framer-motion";

export const Event4 = () => {
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
      <div className="flex flex-col items-center  text-center w-full px-10 pt-20">
        <p className="text-sm lg:text-base font-medium text-[--primary]">
          Our castle with a magical atmosphere and its huge park are rich in
          ideas provides imagery and a unique image for photo shoots,
          respectively for video clips and film shoots. Not only the interior
          spaces and the building its outer parts are surrounded by rampant
          plants with walls, but it is ancient the pond hidden behind sycamores
          also holds so many possibilities for creative eyes. Next to the visual
          world is nature you can also include their voices in the soundtrack of
          a video. We, for example we love quiet summer evenings with crickets
          chirping.
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
