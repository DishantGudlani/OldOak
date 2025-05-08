"use client";

import React, { useEffect } from "react";
import { Montaga } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

export const EventsHeading = () => {
  useEffect(function () {
    gsap.to(".events-heading", {
      opacity: 1,
      y: -50,
      scrollTrigger: {
        trigger: ".events-heading",
        start: "top 95%",
      },
    });
  }, []);
  return (
    <div className="relative mt-28 lg:mt-40 flex items-center justify-center">
      <h2
        className={`font-semibold opacity-0 events-heading text-[--color-1] text-2xl lg:text-6xl px-4 lg:px-20 flex text-center ${montaga.className}`}
      >
        Az Öreg Tölgy Kastélyfogadó történelmi hangulatát élénkítő rendezvények.
      </h2>
    </div>
  );
};
