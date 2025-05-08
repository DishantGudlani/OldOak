import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import { Navbar } from "./Navbar";
import { History } from "./History";
import { Team } from "./Team";
import { Footer } from "./Footer";

export const Index = () => {
  return (
    <div>
      {/* <ParticlesBackground /> */}
      <Navbar />
      <History />
      <Team />
      <Footer />
    </div>
  );
};
