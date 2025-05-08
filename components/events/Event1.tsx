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
          Ahány ember, annyi elképzelés van arról, hogy hogyan kell ünnepelni az
          igaz szerelmet. Mi egy olyan helyet biztosítunk nektek, ahol
          kibontakozhat a fantáziátok... hazatértek...otthon vagytok...családban
          maradtok.... A határt csakis a képzeletetek szabja meg. Fantasy
          világtól kezdve a vad punk életérzésen át nálunk minden bele fér, amik
          ti vagytok. Az év bármely évszakában biztosítjuk számotokra, hogy a
          tervezésen túl az esküvőtök napján a felszabadult mulatozáson kívül
          semmi teendőtök ne legyen.{" "}
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
