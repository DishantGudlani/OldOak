"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./sub-components/CarouselSurrounding";
import { Montaga } from "next/font/google";

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

gsap.registerPlugin(ScrollTrigger);

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Surroundings = () => {
  useEffect(function () {
    gsap.to(".swiper-surrounding", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".swiper-surrounding",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-[-10rem]">
      <div className="surroundingContainer">
        <h1
          className={`flex uppercase title split-3 text-center ${montaga.className}`}
        >
          Surroundings
        </h1>
      </div>
      <div className="pt-10 opacity-0 swiper-surrounding mt-52">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};
