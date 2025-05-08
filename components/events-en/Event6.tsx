import React, { useRef } from "react";
import { ThreeDCardDemo } from "./sub-components/ThreeDCardDemo6";
import { motion, useScroll, useTransform } from "framer-motion";

export const Event6 = () => {
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
      <div className=" flex items-center text-center w-full px-10 pt-20">
        <p className="text-sm lg:text-base font-medium text-[--primary]">
          What would a child&apos;s soul desire more than to be free and
          self-forgetful for playing in the soft lap of nature, where you can
          really enjoy your childhood life... This is guaranteed for children
          entering our castle freedom. We would like to draw attention to only
          one thing, our garden something with a smooth mirror at the end, a
          lake and not suitable for trampolines stretched springboard. It is
          large enough for the proximity of the riding school thanks to the
          square and the former purpose of the castle, horse camps can also be
          kept with us, which, thanks to their therapeutic nature, are
          excellent, relaxation for both children and adults for. In addition to
          children&apos;s camps, it is also a great place for adults possibility
          to organize creative camps.
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
