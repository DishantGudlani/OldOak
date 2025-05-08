import React from "react";
import { Event1 } from "./Event1";
import { Event2 } from "./Event2";
import { Event3 } from "./Event3";
import { Event4 } from "./Event4";
import { Event5 } from "./Event5";
import { Event6 } from "./Event6";

export const Events = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Event1 />
      <Event2 />
      <Event3 />
      <Event4 />
      <Event5 />
      <Event6 />
    </section>
  );
};
