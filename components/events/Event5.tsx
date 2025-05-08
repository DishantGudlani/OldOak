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
          A fesztiválok terén gyűjtött tapasztalataink és a zene iránti
          szeretetünk elegendő bizonyságot ad arról, hogy bármikor összehozunk
          egy tökéletes kastélyfesztivált. Az eseményhez már csak ti,
          ötletgazdák hiányoztok!
        </p>
        <p className="text-base  font-medium text-[--primary]">
          A Nagyterem táncparkettjén mintegy 350 táncos tudja ropni egyszerre,
          amit ki is használunk a LaBoumokon, a tó partján több mint 1000 fős
          koncertekkel párhuzamosan. Évről évre kastélyunk és annak varázslatos
          kertje ad otthon a hazai könnyűzene egy hétvégén át tartó tárházának.
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
