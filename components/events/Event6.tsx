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
          Mire vágyna jobban egy gyermeki lélek, mint a szabad és önfeledt
          játszadozásra a természet lágy ölén, ahol igazán élvezheti kiskori
          életét... A kastélyunkba belépő gyerekek számára garantált ez a
          szabadság. Egyetlen egy dologra hívnánk fel a figyelmet, a kertünk
          végében lévő sima tükrű valami, egy tó és nem trambulinozásra alkalmas
          kifeszített ugrálófelület. A lovarda közelségének, a megfelelően nagy
          térnek és a kastély korábbi rendeltetésének köszönhetően lovastáborok
          is tarthatóak nálunk, amelyek terápiás jellegüknek köszönhetően remek,
          nyugalmat biztosító kikapcsolódás, mind a gyermekek, mind a felnőttek
          számára. A gyerektáborok mellett felnőttek részére is remek helyszín
          lehetőség alkotói táborok rendezése.
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
