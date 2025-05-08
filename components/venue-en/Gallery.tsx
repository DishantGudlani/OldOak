"use client";
import React from "react";
import { LayoutGrid } from "./Layout-grid";
import { Montaga } from "next/font/google";
import gsap from "gsap";
import thumbnail1 from "@/public/assets/images/thumbnail/thumbnail_1.png";
import thumbnail2 from "@/public/assets/images/thumbnail/thumbnail_2.png";
import thumbnail3 from "@/public/assets/images/thumbnail/thumbnail_3.png";
import thumbnail4 from "@/public/assets/images/thumbnail/thumbnail_4.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

export function LayoutGridDemo() {
  return (
    <div className="h-screen mt-[-10rem] w-full flex flex-col items-center justify-center">
      <div className="galleryContainer">
        <h1
          className={`flex uppercase title split-4 text-center ${montaga.className}`}
        >
          Gallery
        </h1>
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src="/assets/videos/gallery_1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src="/assets/videos/gallery_2.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src="/assets/videos/gallery_3.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src="/assets/videos/gallery_4.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: thumbnail3,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: thumbnail4,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: thumbnail1,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: thumbnail2,
  },
];
