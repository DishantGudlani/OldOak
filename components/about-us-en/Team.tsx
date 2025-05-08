"use client";

import { Montaga } from "next/font/google";
import EmblaCarousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

export const Team = () => {
  useEffect(function () {
    gsap.to(".team-text", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".team-text",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-6 px-4 lg:px-20 backdrop-blur-md">
      <h1
        className={`text-[--color-1] overview_title_2 font-extrabold ${montaga.className} opacity-0 team-text mb-10`}
      >
        Team
      </h1>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};
