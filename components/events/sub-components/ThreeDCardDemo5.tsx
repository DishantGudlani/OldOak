"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import music from "@/public/assets/images/music/music_1.jpg";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  flex flex-col items-center justify-center  card-body  p-6   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[--color-1]"
        >
          Zene az kell
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={music}
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-4">
          <CardItem translateZ={20}>
            <Link href="/contactus">
              <button className="button">Kontakt</button>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
