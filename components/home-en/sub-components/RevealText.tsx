"use client";

import React, { useEffect } from "react";
import logo from "@/public/assets/images/logo/logo-text.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const RevealText = () => {
  useEffect(function () {
    gsap.to(".reveal-1", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".reveal-1",
        start: "top 90%",
      },
    });

    gsap.to(".reveal-2", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".reveal-2",
        start: "top 100%",
      },
    });
  }, []);

  return (
    <div className="relative h-[40rem] lg:h-[35rem] flex  flex-col gap-20  backdrop-blur-md shadow-2xl ">
      <video
        autoPlay
        muted
        loop
        className="h-full w-full top-0 left-0 object-cover absolute"
      >
        <source src="/assets/videos/bgvideo2.mp4" type="video/mp4"></source>
      </video>
      <div className="overlay-1 flex flex-col gap-10 px-20 py-10">
        <div className="flex flex-col z-50 lg:flex-row items-center gap-5 reveal-1 mt-56 opacity-0">
          <Image className="w-[3rem]" src={logo} alt="logo-text"></Image>
          <p className=" flex text-center sm:text-base md:text-lg lg:text-2xl font-bold ">
            Our castle is located 25 km from Budapest in Pusztazámor, you can
            find it in a hospitable little village where there is so much magic
            you will have a share.
          </p>
        </div>
        <div className="flex flex-col z-50 lg:flex-row items-center gap-5 reveal-2 mt-10 opacity-0">
          <Image className="w-[3rem]" src={logo} alt="logo-text"></Image>
          <p className=" flex text-center sm:text-base md:text-lg lg:text-2xl font-bold ">
            The locality is characterized by familiarity and hospitality and
            immediacy. The walls of the castle and the surrounding area park, a
            moment of great joy, a secret meeting, a confession of love and
            keeps memories of huge weddings.
          </p>
        </div>
      </div>
    </div>
  );
};
