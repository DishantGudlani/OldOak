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

const text = "Welcome!";

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
        At Old Oak Castle Inn, where you can immerse yourself in rich history,
        the breathtaking scenery and you can experience its unique offer. The
        Öreg Tölgy Kastély-Fogadó is close to the capital, yet quite far away to
        escape from the noise of the city into the world of nature.
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
        Our castle is on the edge of Pusztazámor, in the middle of a 3-hectare
        primeval garden is located. You can enter the building through wrought
        iron gates, which the parking lots are located in the front yard. The
        park through the building, as well as on the small path surrounded by
        greenery next to the building we can approach. The smaller one is
        located directly at the back of the castle the garden serves as the
        location for receptions, if the weather is kind to us. From there,
        passing the two stone lions guarding the huge park, down the stairs we
        reach the 350-year-old peduncle that rises as the heart of the garden to
        the oak, which became the symbol of the place. In the lowest part of the
        park we find the lake with the bath house. Adventurers thrown into the
        jungle you can also find yourself at the end of the garden on the old
        bastion, which is harmless it can be a perfect hiding place for
        children.
      </p>
    </motion.div>
  );
};
