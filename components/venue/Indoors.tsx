"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import EmblaCarousel from "./sub-components/CarouselIndoors";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

import { Montaga } from "next/font/google";

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

gsap.registerPlugin(ScrollTrigger);

export const Indoors = () => {
  useEffect(function () {
    gsap.to(".swiper-indoors", {
      opacity: 1,
      y: -100,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".swiper-indoors",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-[-10rem]">
      <div className="indoorContainer">
        <h1
          className={`flex uppercase title split-2 text-center ${montaga.className}`}
        >
          Fedett
        </h1>
      </div>
      <div className="pt-10 opacity-0 swiper-indoors mt-52">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};
