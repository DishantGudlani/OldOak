"use client";

import { Montaga } from "next/font/google";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    text: "Blahalousiana – live session forgatás – 2023 BLAHALOUISIANA - Give Me One (Live Session) ",
    link: "https://www.youtube.com/watch?v=r5yRtlWx9Cg",
  },
  {
    text: "Carson Coma - Album Recording - 2023 ",
    link: "https://www.youtube.com/results?search_query=Carson+Coma+%E2%80%93+Album+felv%C3%A9tel+%E2%80%93+2023",
  },
  {
    text: "Filming of the music video for the song Bordó Sárkány – Partly Whole – 2023",
    link: "https://www.youtube.com/watch?v=rhE8XqI9zOg",
  },
  {
    text: "30Y - Hungry fed - 2022 ",
    link: "https://www.youtube.com/watch?v=NHJgd1K2r-c",
  },
  {
    text: "Carson Coma - Spider - 2021",
    link: "https://www.youtube.com/watch?v=1CLqEgTHrDM",
  },
  {
    text: "Carson Coma - Shipwrecked 2020",
    link: "https://www.youtube.com/watch?v=IlEnCWgUU1I",
  },
  {
    text: "Tibor Kocsák - János Bródy: Let it be a success - 2020",
    link: "https://www.youtube.com/watch?v=uO76sSFTqDI",
  },
  {
    text: "The Hellfreaks - Witches Heal - 2019",
    link: "https://www.youtube.com/watch?v=pFKqt1N74ew",
  },
  {
    text: "Home is the best... You will become more with every experience! - FOREST PAPER",
    link: "https://www.youtube.com/watch?v=fUf3vKdTuG4",
  },
];

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

export const Music = () => {
  useEffect(function () {
    gsap.to(".MCard", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".MCard",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="w-full px-4 lg:px-20 mt-20 MCard opacity-0">
      <div className=" bg-[--accent] w-full px-10 py-10 flex flex-col relative photo-card">
        <h1
          className={`text-[--color-1] font-bold text-5xl ${montaga.className} text-center`}
        >
          Music shoots
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
                    Click here{" "}
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
