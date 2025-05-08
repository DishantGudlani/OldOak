import React from "react";
import { Navbar } from "./Navbar";
import { Review } from "./Review";
import { CardHoverEffectDemo } from "./Cards";
import { Photo } from "./Photo";
import { Music } from "./Music";
import { ParallaxScrollDemo } from "./Article";
import { Movies } from "./Movies";
import { Footer } from "./Footer";

export const Index = () => {
  return (
    <div>
      <Navbar />
      <Review />
      <CardHoverEffectDemo />
      <Photo />
      <Music />
      <ParallaxScrollDemo />
      <Movies />
      <Footer />
    </div>
  );
};
