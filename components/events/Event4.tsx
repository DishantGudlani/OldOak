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
          Varázslatos hangulatú kastélyunk és annak hatalmas parkja ötletgazdag
          képivilággal és egyedi arculattal szolgál fotózásokhoz, illetve
          videóklip - és filmforgatásokhoz. Nem csak a belső terek és az épület
          külső részei a burjánzó növények keretezte falakkal, de az ősi
          platánok rejtekében megbúvó tavacska is megannyi lehetőséget rejt az
          alkotói szemek számára. A képi világ mellett pedig a természet
          hangjait is belevonhatjátok egy-egy videó hangsávjába. Mi például
          imádjuk a csendes nyári estéket a tücsök ciripelésekkel.
        </p>
      </div>
      <ThreeDCardDemo />
    </motion.div>
  );
};
