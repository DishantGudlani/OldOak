"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montaga } from "next/font/google";
import { EmblaOptionsType } from "embla-carousel";

import EmblaCarousel from "./sub-components/CarouselOutdoors";
gsap.registerPlugin(ScrollTrigger);

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

export const Outdoors = () => {
  useEffect(function () {
    gsap.to(".swiper-outdoors", {
      opacity: 1,
      y: -100,
      duration: 1,
      scrollTrigger: {
        trigger: ".swiper-outdoors",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-[-5rem]">
      <div className="outdoorContainer">
        <h1
          className={`flex uppercase title split-1 text-center ${montaga.className}`}
        >
          szabadban
        </h1>
      </div>
      <div className="pt-10 opacity-0 swiper-outdoors mt-52">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};
