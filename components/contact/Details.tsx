"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montaga } from "next/font/google";
import Image from "next/image";
import logo from "@/public/assets/images/logo/logo-text.png";
import { slideInFromBottom } from "@/utils/motion";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const text = "Elérhetőségeink";

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

export const Details = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center lg:pt-32 pt-20"
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
      <motion.div variants={slideInFromBottom} className="parent mt-10">
        <div className="card-1">
          <div className="logo">
            <span className="circle circle1"></span>
            <span className="circle circle2"></span>
            <span className="circle circle3"></span>
            <span className="circle circle4"></span>
            <span className="circle circle5">
              <Image
                className=" h-8 w-8"
                priority={true}
                src={logo}
                alt="logo"
              ></Image>
            </span>
          </div>
          <div className="glass"></div>
          <div className="content flex flex-col items-center justify-center">
            <span className="title">KONTAKT</span>
            <div className="text flex flex-col lg:flex-row text-center">
              <span className="text-sm lg:text-base font-semibold">
                E-mail:
              </span>
              <span className="text-sm lg:text-base ml-2">
                oregtolgyfogado@gmail.com
              </span>
            </div>
            <span className="text flex-col lg:flex-row   flex text-center">
              <span className="text-sm lg:text-base font-semibold">
                Telefon:
              </span>
              <span className="text-sm lg:text-base ml-2">
                +36 30 9649533 - Krajcsovics Olivér - Tulajdonos
              </span>
            </span>
            <span className="text flex flex-col lg:flex-row text-center">
              <span className="text-sm lg:text-base font-semibold">Cím:</span>
              <span className="text-sm lg:text-base ml-2">
                Pusztazámor Kossuth Lajos utca 22. 2039
              </span>
            </span>
          </div>
          <div className="bottom">
            <div className="social-buttons-container">
              <button className="social-button .social-button1">
                <Link
                  href="https://www.facebook.com/oregtolgykastelyfogado/"
                  target="_blank"
                >
                  <FaFacebookSquare />
                </Link>
              </button>
              <button className="social-button .social-button2">
                <Link
                  href="https://www.instagram.com/oregtolgyfogado/?hl=hu"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </button>
              <button className="social-button .social-button3">
                <Link
                  href="https://www.tiktok.com/@oregtolgykastelyfogado"
                  target="_blank"
                >
                  <FaTiktok />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
