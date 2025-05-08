"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montaga } from "next/font/google";

const text = "They said about us";

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

export const Review = () => {
  return (
    <div className="lg:pt-32 pt-20">
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className={`w-full h-full overflow-hidden flex items-center justify-center font-medium title ${montaga.className}`}
      >
        {text.split("").map((word, i) =>
          word === " " ? (
            <motion.span
              className=" mr-4"
              variants={child}
              key={i}
            ></motion.span>
          ) : (
            <motion.span
              className="font-semibold text-[--color-1] overview_title_2"
              variants={child}
              key={i}
            >
              {word}
            </motion.span>
          )
        )}
      </motion.h1>
    </div>
  );
};
