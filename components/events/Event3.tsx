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
          Az épület a hatalmas parkkal egybekötve kihagyhatatlan lehetőségeket
          nyújt borvacsorák, céges csapatépítők, karácsonyi partik és más
          vállalati események számára. Ha az unalmastól eltérő, a céges sereget
          a szürke hétköznapokból kizökkentő házibulit akartok, akkor a legjobb
          helyen jártok. Ahogy az esküvőknél, privát eseményeknél, itt is olyan
          helyszínt kaptok, ahol bármilyen téma köré építhetitek a
          rendezvényeteket. Éjszakai kísértetkastélynak, vagy “Ki volt a
          gyilkos?” nyomozós játokékok számára is tökéletes helyszín
          csapatépítés gyanánt.
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
