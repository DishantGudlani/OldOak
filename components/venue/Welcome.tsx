"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import leaf from "@/public/assets/images/logo/leaf.png";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
import { Montaga } from "next/font/google";
import entrance from "@/public/assets/images/venue/entrance.jpg";
import outdoor from "@/public/assets/images/outdoors/outdoor_1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text = "Üdvözöljük!";

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const Welcome = () => {
  useEffect(function () {
    gsap.to(".castle-para", {
      opacity: 1,
      y: -100,
      scrollTrigger: {
        trigger: ".castle-para",
        start: "top 95%",
      },
    });
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex px-4 lg:px-20 flex-col items-center justify-center lg:pt-32 pt-20"
    >
      <motion.h1
        className={`flex text-center ${montaga.className}`}
        variants={container}
      >
        {text.split("").map((char, i) => (
          <motion.span
            variants={child}
            key={i}
            className="font-semibold text-[--color-1] overview_title_2"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h3
        className="text-base lg:text-xl py-6 cursive text-[#328177] font-medium flex flex-col lg:flex-row items-center text-center"
        variants={slideInFromBottom}
      >
        <Image
          className=" mr-6 h-16 w-8 rotate-[-65deg]"
          src={leaf}
          alt="leaf"
        ></Image>
        Old Oak Castle fogadóban, ahol átadhatja magát a gazdag történelemnek, a
        lélegzetelállító tájnak, és megtapasztalhatja egyedülálló kínálatát. Az
        Öreg Tölgy Kastély-Fogadó közel van a fővároshoz, mégis elég távol van
        ahhoz, hogy a város zajától a természet világába meneküljön.
      </motion.h3>
      <motion.div variants={slideInFromBottom} className="card mt-10">
        <div className="card-inner">
          <div className="card-front">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={entrance}
              alt="entrance-image"
            ></Image>
          </div>
          <div className="card-back">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={outdoor}
              alt="map"
            ></Image>
          </div>
        </div>
      </motion.div>

      <p className="castle-para tsxt-[--primary] text-xs lg:text-sm flex text-center mt-32 opacity-0">
        A kastélyunk Pusztazámor szélén, egy 3 hektáros őskert közepén
        található. Az épülethez kovácsolt vaskapukon át lehet bejutni, amelynek
        előkertjében találhatóak a parkolók. A parkot az épületen keresztül,
        valamint az épület melletti zöldek övezte kis ösvényen is
        megközelíthetjük. Közvetlen a kastély hátsó részénél található kisebb
        kert szolgál a fogadások helyszínéül, amennyiben az időjárás is kegyes
        hozzánk. Innen a hatalmas parkot őrző két kőoroszlán mellett elhaladva,
        a lépcsőn lejutunk a kert szíveként magasodó 350 éves kocsányos
        tölgyhöz, amely a hely szimbóluma lett. A park legalacsonyabb részén
        találjuk a tavat a fürdőházzal. A kalandvágyók a dzsungelbe vetve
        magukat a kert végében rálelhetnek a régi bástyára is, amely csíntalan
        gyerekek számára tökéletes rejtekhely lehet.
      </p>
    </motion.div>
  );
};
