"use client";

import { Montaga } from "next/font/google";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
import Image from "next/image";
import leaf from "@/public/assets/images/logo/leaf.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

const text = "A kastély története";

export const History = () => {
  useEffect(function () {
    gsap.to(".history-info", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".history-info",
        start: "top 100%",
      },
    });
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center lg:pt-32 pt-20"
    >
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className={`w-full h-full flex items-center justify-center backdrop-blur-md title ${montaga.className}`}
      >
        {text.split("").map((char, i) => {
          return char === " " ? (
            <motion.span
              variants={child}
              key={i}
              className=" ml-4 "
            ></motion.span>
          ) : (
            <motion.span
              className=" font-semibold text-[--color-1] overview_title_2"
              variants={child}
              key={i}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
      <motion.span
        variants={slideInFromBottom}
        className="flex flex-col lg:flex-row text-base lg:text-xl cursive py-6 px-6 font-medium text-[#328177] items-center  text-center backdrop-blur-md"
      >
        <Image
          className=" mr-6 h-16 w-8 rotate-[-65deg]"
          src={leaf}
          alt="leaf"
        ></Image>
        A kastély az 1870-es évek környékén épült ekkor a fa már kb. 150 éves
        volt.
      </motion.span>
      <motion.iframe
        className="player backdrop-blur-md rounded-lg"
        variants={slideInFromBottom}
        src="https://www.youtube.com/embed/O0y2aaA1c78?si=jhYm-JycRBJsN9Kc"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></motion.iframe>
      <p className=" pt-10 mt-28 text-base px-4 lg:px-20 opacity-0 backdrop-blur-md text-[--primary] font-semibold history-info">
        JEGYZET :{" "}
        <span className="text-xs lg:text-sm text-[#328177]]">
          A kastély nevét az édesapja adta. Aki egy lovas panziót képzelt el
          magának. Egy barátjával arra keveredett, meglátta a fát, azonnal
          beleszeretett a helybe és azt mondta itt valósítja meg az álmát. Az
          édesapja egy lovas ember volt. Régiségkereskedő és onnan van ez a sok
          cucc, van. amit már Olivér gyűjtötte hozzá. Apáról fiúra szállt.
        </span>
      </p>
    </motion.div>
  );
};
