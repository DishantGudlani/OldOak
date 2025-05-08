import React from "react";
import { Welcome } from "./Welcome";
import { Navbar } from "./Navbar";
import { Outdoors } from "./Outdoors";
import { Indoors } from "./Indoors";
import { Surroundings } from "./Surroundings";
import { LayoutGridDemo } from "./Gallery";
import { Footer } from "./Footer";

export const Index = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Outdoors />
      <Indoors />
      <Surroundings />
      <LayoutGridDemo />
      <Footer />
    </div>
  );
};
