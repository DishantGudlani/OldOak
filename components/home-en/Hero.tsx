"use client";

import { Montaga } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

const text = "Old Oak Castle inn";

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

export const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative min-h-screen w-full"
    >
      <video
        autoPlay
        muted
        loop
        className="h-full w-full object-cover absolute"
      >
        <source src="/assets/videos/bgvideo.mp4" type="video/mp4"></source>
      </video>
      <motion.div className="overlay">
        <motion.span
          variants={container}
          initial="hidden"
          animate="visible"
          className={`w-full overflow-hidden flex items-center justify-center font-medium title ${montaga.className}`}
        >
          {text.split("").map((word, i) =>
            word === " " ? (
              <motion.span
                className=" mr-2"
                variants={child}
                key={i}
              ></motion.span>
            ) : (
              <motion.span variants={child} key={i}>
                {word}
              </motion.span>
            )
          )}
        </motion.span>
        <motion.span
          variants={slideInFromBottom}
          className="w-3/4 flex text-base lg:text-xl items-center justify-center text-center mt-10"
        >
          Welcome to the Old Oak Castle Inn. I am very pleased, since
          you&apos;re here, please let me give you a short virtual one field
          inspection.
        </motion.span>
      </motion.div>
    </motion.section>
  );
};
