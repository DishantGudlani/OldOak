import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
import { Montaga } from "next/font/google";
import Image from "next/image";
import leaf from "@/public/assets/images/logo/leaf.png";

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

const text = "Events";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const subtitle = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    y: 0,
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

export const Intro = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center lg:pt-32 pt-20"
    >
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className={`w-full h-full overflow-hidden flex items-center justify-center font-medium title ${montaga.className}`}
      >
        {text.split("").map((word, i) => (
          <motion.span
            className="font-semibold text-[--color-1] overview_title_2"
            variants={child}
            key={i}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h3
        className="text-base lg:text-xl pb-6 cursive text-[#328177] font-medium flex items-center text-center"
        variants={slideInFromBottom}
      >
        <Image
          className=" mr-6 h-16 w-8 rotate-[-65deg]"
          src={leaf}
          alt="leaf"
        ></Image>
        itt van néhány általános információ..
      </motion.h3>
    </motion.div>
  );
};
