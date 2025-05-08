"use client";

import { Montaga } from "next/font/google";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    text: "Hazatalálsz - 2023, TV2 ",
    link: "https://tv2play.hu/celebszemle/folytatodik_a_hazatalalsz_jon_a_masodik_evad_",
  },
  {
    text: "Hab – 2020 ",
    link: "https://www.youtube.com/watch?v=OaKqEFWwkHs",
  },
  {
    text: "Genius - Picasso 2019 ",
    link: "https://www.youtube.com/watch?v=knbNwQog4Ro",
  },
  {
    text: "Egy nyári kaland 2018 ",
    link: "https://www.youtube.com/watch?v=Q21MyhUwenk",
  },
  {
    text: "Gondolj Rám 2016 ",
    link: "https://www.youtube.com/watch?v=8CdOs5MvCAU",
  },
  {
    text: "Megtört szív - 2014 ",
    link: "",
  },
];

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

export const Movies = () => {
  useEffect(function () {
    gsap.to(".MoCard", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".MoCard",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="w-full px-4 lg:px-20 mt-10 lg:mt-40 MoCard opacity-0">
      <div className=" bg-[--accent] w-full px-10 py-10 flex flex-col relative photo-card">
        <h1
          className={`text-[--color-1] font-bold text-5xl ${montaga.className} text-center`}
        >
          Filmek, sorozatok
        </h1>
        <ul className="text-[--primary] text-base font-medium mt-10 flex flex-col items-center gap-4">
          {content.map((text, i) => (
            <li
              className="flex flex-col lg:flex-row w-full items-center justify-between"
              key={i}
            >
              <span className="flex text-center">{text.text}</span>
              <a href={text.link} target="_blank" className="z-10">
                <button className="cta">
                  <span className="hover-underline-animation text-[--primary] cursive ">
                    {" "}
                    Kattints ide{" "}
                  </span>
                  <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"
                    ></path>
                  </svg>
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
