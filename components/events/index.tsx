"use client";

import React from "react";
import { Navbar } from "./Navbar";
import { Intro } from "./Intro";
import { CardStackDemo } from "./GeneralInfo";
import { EventsHeading } from "./EventsHeading";
import { Events } from "./Events";
import { Footer } from "./Footer";

export const Index = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <CardStackDemo />
      <EventsHeading />
      <Events />
      <Footer />
    </div>
  );
};
