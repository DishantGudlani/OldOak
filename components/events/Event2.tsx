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
          Egy-egy különlegesebb esemény, kerek évszámos születésnap,
          aranylakodalom, eljegyzési party vagy pusztán egy egyszerű családi
          ünneplés, lánykérés... Mind-mind olyan események, amelyeket leginkább
          egy meghitt, otthon érzését keltő helyen töltenénk el. A kastély ilyen
          alkalmakra is tökéletes, barátságos és meghitt környezetet nyújt, ahol
          kiszakadhatunk az otthoni hétköznapokból.
        </p>
        <p className="text-base font-medium text-[--primary]">
          A park adottságainak köszönhetően rengeteg lehetőség nyílik arra, hogy
          a szabadban töltődjetek fel. Erre egy különleges program lehet a
          kertben való könnyed hétvégi piknikezés, amely akár szervezett keretek
          között is megvalósítható nálunk.
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
