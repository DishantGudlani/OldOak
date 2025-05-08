"use client";

import { Montaga } from "next/font/google";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    text: "Sophie Molnar Design Jewelry – FAIRY TALE kampányfotózás ",
  },
  {
    text: "Saint Aurora – SS20 kollekciójának kampányfotózása  ",
  },
  {
    text: "TheBlush nyári ruha kollekciójának kampányfotózása ",
  },
  {
    text: "Bernice Fashion ruha kollekciójának kampányfotózása ",
  },
  {
    text: "Debreceni Fórum Fashion – 2023 őszi kiadvány ",
  },
  {
    text: "“Levél helyett” című styled shoot esküvői fotózás a Tales of Light Photo által – 2023 ",
  },
  {
    text: "Reminisce című styleg shoot esküvői fotózás a  ",
  },
  {
    text: "Celebration of Love kollekció – Nora Sarman, 2020 ",
  },
];

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

export const Photo = () => {
  useEffect(function () {
    gsap.to(".fCard", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".fCard",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="w-full 4 lg:px-20 mt-32 fCard opacity-0">
      <div className=" bg-[--accent] w-full px-10 py-10 flex flex-col relative photo-card">
        <h1
          className={`text-[--color-1] font-bold text-5xl ${montaga.className} text-center`}
        >
          Fotózások
        </h1>
        <ul className="text-[--primary] text-base font-medium mt-10 flex flex-col items-center gap-4">
          {content.map((text, i) => (
            <li key={i} className="flex text-center">
              {text.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
