import React, { useRef } from "react";
import { ThreeDCardDemo } from "./sub-components/ThreeDCardDemo3";
import { motion, useScroll, useTransform } from "framer-motion";

export const Event3 = () => {
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
      <div className="flex flex-col items-center text-center w-full px-10 pt-20 ">
        <p className="text-sm lg:text-base font-medium text-[--primary]">
          The building combined with the huge park offers unmissable
          opportunities provides wine dinners, corporate team building,
          Christmas parties and more for corporate events. If it&apso;s
          different from boring, the corporate army if you want a house party
          that will take you out of the gray weekdays, then it&apos;s the best I
          visited a place. As with weddings and private events, it is the same
          here you get a location where you can build around any topic your
          events. Haunted castle at night, or &quot;Who was the killer?&quot; it
          is also a perfect location for detective toys as team building.
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
