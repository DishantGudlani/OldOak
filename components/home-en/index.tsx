import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Overview } from "./Overview";
import ParticlesBackground from "./ParticlesBackground";
import { Footer } from "./Footer";

export const Index = () => {
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Overview />
      <Footer />
    </div>
  );
};
