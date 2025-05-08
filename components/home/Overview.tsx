import React from "react";

import { RevealText } from "./sub-components/RevealText";
import { Info } from "./sub-components/Info";

export const Overview = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Info />
      <RevealText />
    </div>
  );
};
