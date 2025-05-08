"use client";
import { ParallaxScroll } from "./sub-components/parallax-scroll";
import press1 from "@/public/assets/images/press/press_1.jpg";
import press2 from "@/public/assets/images/press/press_2.jpg";
import press3 from "@/public/assets/images/press/press_3.jpg";
import press4 from "@/public/assets/images/press/press_4.jpg";
import press5 from "@/public/assets/images/press/press_5.jpg";
import press6 from "@/public/assets/images/press/press_6.jpg";
import press7 from "@/public/assets/images/press/press_7.jpg";
import press8 from "@/public/assets/images/press/press_8.jpg";
import { Montaga } from "next/font/google";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
});

export function ParallaxScrollDemo() {
  useEffect(function () {
    gsap.to(".Acard", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".Acard",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="Acard opacity-0 mt-20">
      <h1
        className={`text-[--color-1] font-bold text-5xl ${montaga.className} mb-10 text-center`}
      >
        Sajtómegjelenés, cikkek rólunk
      </h1>
      <ParallaxScroll images={images} />;
    </div>
  );
}

const images = [
  {
    src: press1,
    link: "https://faallomanygazdalkodas.hu/blog/famatuzsalem-apolasa-a-pusztazamori-kastely-parkban",
  },
  {
    src: press2,
    link: "https://keretblog.hu/francesco-lomtarkoncert-premier/",
  },
  { src: press3, link: "https://roadster.hu/la-boum-kastelyhazibuli/" },
  {
    src: press4,
    link: "https://funzine.hu/2022/06/10/programok/iden-ujra-megtelik-elo-zenevel-pusztazamor-xviii-szazadi-kastelya/",
  },
  {
    src: press5,
    link: "https://telex.hu/pr-cikk/2021/09/02/pusztazamori-kastelyban-bucsuzott-az-idei-fesztivalszezon",
  },
  {
    src: press6,
    link: "https://funzine.hu/2021/08/09/have-fun/az-ot-zenekar-osszefogasabol-letrejott-fesztival-iden-is-visszater-a-pusztazamori-kastely-falai-koze/",
  },
  {
    src: press7,
    link: "https://magyarvillak.hu/villak/barcza-kastely-pusztazamor-oreg-tolgy-kastely-fogado/",
  },
  {
    src: press8,
    link: "https://hvg.hu/elet/20210624_Foci_helyett_Buli_a_kastelyban",
  },
];
