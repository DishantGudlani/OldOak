"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import wedding1 from "@/public/assets/images/weddings/wedding_1.jpg";
import wedding2 from "@/public/assets/images/weddings/wedding_2.jpg";
import wedding3 from "@/public/assets/images/weddings/wedding_3.jpg";
import wedding4 from "@/public/assets/images/weddings/wedding_4.jpg";
import pevent1 from "@/public/assets/images/pevents/event_1.jpg";
import pevent2 from "@/public/assets/images/pevents/event_2.jpg";
import cevent1 from "@/public/assets/images/cevents/cevent_1.png";
import cevent3 from "@/public/assets/images/cevents/cevent_3.png";
import photo1 from "@/public/assets/images/photography/photo_1.jpg";
import photo2 from "@/public/assets/images/photography/photo_2.jpg";
import photo3 from "@/public/assets/images/photography/photo_3.jpg";
import photo4 from "@/public/assets/images/photography/photo_4.jpg";
import music1 from "@/public/assets/images/music/music_1.jpg";
import music2 from "@/public/assets/images/music/music_2.jpg";
import camp1 from "@/public/assets/images/camps/camp_1.jpg";
import camp2 from "@/public/assets/images/camps/camp_2.jpg";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Info = () => {
  useEffect(function () {
    gsap.to(".infoH1", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".infoH1",
        start: "top 100%",
      },
    });

    gsap.to(".infoH2", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".infoH2",
        start: "top 120%",
      },
    });

    gsap.from(".slide-swiper", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slide-swiper",
        start: "top 80%",
      },
    });
    gsap.to(".slide-swiper", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".slide-swiper",
        start: "top 80%",
      },
    });

    gsap.from(".swiper-info", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".swiper-info",
        start: "top 80%",
      },
    });
    gsap.to(".swiper-info", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".swiper-info",
        start: "top 80%",
      },
    });

    gsap.from(".slide-swiper-2", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slide-swiper-2",
        start: "top 80%",
      },
    });
    gsap.to(".slide-swiper-2", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".slide-swiper-2",
        start: "top 80%",
      },
    });

    gsap.from(".swiper-info-2", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".swiper-info-2",
        start: "top 80%",
      },
    });
    gsap.to(".swiper-info-2", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".swiper-info-2",
        start: "top 80%",
      },
    });

    gsap.from(".slide-swiper-4", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slide-swiper-4",
        start: "top 80%",
      },
    });
    gsap.to(".slide-swiper-4", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".slide-swiper-4",
        start: "top 80%",
      },
    });

    gsap.from(".swiper-info-4", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".swiper-info-4",
        start: "top 80%",
      },
    });
    gsap.to(".swiper-info-4", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".swiper-info-4",
        start: "top 80%",
      },
    });

    gsap.from(".slide-swiper-1", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slide-swiper-1",
        start: "top 80%",
      },
    });
    gsap.to(".slide-swiper-1", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".slide-swiper-1",
        start: "top 80%",
      },
    });

    gsap.from(".swiper-info-1", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".swiper-info-1",
        start: "top 80%",
      },
    });
    gsap.to(".swiper-info-1", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".swiper-info-1",
        start: "top 80%",
      },
    });

    gsap.from(".slide-swiper-3", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slide-swiper-3",
        start: "top 80%",
      },
    });
    gsap.to(".slide-swiper-3", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".slide-swiper-3",
        start: "top 80%",
      },
    });

    gsap.from(".swiper-info-3", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".swiper-info-3",
        start: "top 80%",
      },
    });
    gsap.to(".swiper-info-3", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".swiper-info-3",
        start: "top 80%",
      },
    });

    gsap.from(".slide-swiper-5", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slide-swiper-5",
        start: "top 80%",
      },
    });
    gsap.to(".slide-swiper-5", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".slide-swiper-5",
        start: "top 80%",
      },
    });

    gsap.from(".swiper-info-5", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".swiper-info-5",
        start: "top 80%",
      },
    });
    gsap.to(".swiper-info-5", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".swiper-info-5",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:pt-32 pt-20 pb-20">
      <h1 className="flex mt-20 opacity-0 flex-col infoH1 items-center text-center justify-center overview_title_1 font-semibold text-[--color-1] backdrop-blur-md">
        RÖVID ÁTTEKINTÉS <br />
        <span className=" text-[#328177] mt-32 opacity-0 infoH2 overview_title_2 font-bold leading-none">
          Öreg Tölgy Kastély-fogadó
        </span>
      </h1>
      <div className="flex flex-col gap-20 px-10 mt-[-8rem] lg:mt-[-5rem] w-full">
        <div className="flex gap-20 swiper-layout items-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="mySwiper slide-swiper"
          >
            <SwiperSlide>
              <Image src={wedding1} alt="wedding_pic"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={wedding2} alt="wedding_pic"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={wedding3} alt="wedding_pic"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={wedding4} alt="wedding_pic"></Image>
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info">
            <h1 className="swiper-title-1 text-[#21554f]">Esküvők</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              Ha menyasszonyként, vőlegényként kerestetek fel minket a leendő
              esküvőtökre, lessetek be az Esküvők fül alá, ahol minden hasznos
              információt megtaláltok, amely a nálunk eltöltött tökéletes
              napotokhoz szükséges.
            </p>

            <Link
              className="text-xs lg:text-sm flex items-center gap-4"
              href="/contactus"
            >
              Kattintson a továbbiakért{" "}
              <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
        </div>
        {/* pc veiw */}
        <div className="flex items-center gap-20 swiper-layout-none">
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info-1 ">
            <h1 className="swiper-title-2 text-[#21554f]">Privát események</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              Ha bármely eddiginél pofásabb és extrább
              szülinapot/aranylakodalmat vagy más családi, baráti eseményt
              tervezel magadnak, esetleg meglepetésként a barátodnak/rokonodnak,
              akkor a Privát események fül böngészését ajánljuk figyelmedbe!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Kattintson a továbbiakért{" "}
              <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="mySwiper slide-swiper-1"
          >
            <SwiperSlide>
              <Image src={pevent1} alt="private_event"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={pevent2} alt="private_event"></Image>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Mobile view */}
        <div className=" items-center gap-20 swiper-layout hidden swiper-layout-mobile">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="mySwiper slide-swiper-1"
          >
            <SwiperSlide>
              <Image src={pevent1} alt="private_event"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={pevent2} alt="private_event"></Image>
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info-1 ">
            <h1 className="swiper-title-2 text-[#21554f]">Privát események</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              Ha bármely eddiginél pofásabb és extrább
              szülinapot/aranylakodalmat vagy más családi, baráti eseményt
              tervezel magadnak, esetleg meglepetésként a barátodnak/rokonodnak,
              akkor a Privát események fül böngészését ajánljuk figyelmedbe!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Kattintson a továbbiakért{" "}
              <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
        </div>
        <div className="flex gap-20 items-center swiper-layout">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="mySwiper slide-swiper-2"
          >
            <SwiperSlide>
              <Image
                className="w-full"
                src={cevent1}
                alt="corporate_event"
              ></Image>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                className="w-full"
                src={cevent3}
                alt="corporate_event"
              ></Image>
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info-2">
            <h1 className="swiper-title-1 text-[#21554f]">
              Céges rendezvények
            </h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              A budapesti helyszínek helyett idén egy különlegesebb környezetben
              tartanátok a szokásos csapatépítést? Benti programok mellett
              kültéri tevékenységekkel tervezitek fűszerezni az éves különleges
              eseményeket, mint például a karácsonyi vacsorát? Ez esetben
              további információért ugorj a Céges rendezvényekhez!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Kattintson a továbbiakért{" "}
              <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
        </div>
        {/* Pc view */}
        <div className="flex items-center gap-20 swiper-layout-none">
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info-3">
            <h1 className="swiper-title-2 text-[#21554f]">
              Fotózások, forgatások
            </h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              Régi Chesterfield kanapék, családi fotók és festmények, antik
              gyertyatartók és a kívülről búrjánzó, játékosan rendezetlen
              növények által birtokolt ódon falak... Kell még más egy tökéletes
              fotóhoz vagy egy extra videókliphez? Ha szerinted semmi, keresd a
              Fotózások, forgatások menüt!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Kattintson a továbbiakért{" "}
              <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="mySwiper slide-swiper-3"
          >
            <SwiperSlide>
              <Image src={photo1} alt="photo"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={photo2} alt="photo"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={photo3} alt="photo"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={photo4} alt="photo"></Image>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Mobile view */}
        <div className=" items-center gap-20 swiper-layout hidden swiper-layout-mobile">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="mySwiper slide-swiper-3"
          >
            <SwiperSlide>
              <Image src={photo1} alt="photo"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={photo2} alt="photo"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={photo3} alt="photo"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={photo4} alt="photo"></Image>
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info-3">
            <h1 className="swiper-title-2 text-[#21554f]">
              Fotózások, forgatások
            </h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              Régi Chesterfield kanapék, családi fotók és festmények, antik
              gyertyatartók és a kívülről búrjánzó, játékosan rendezetlen
              növények által birtokolt ódon falak... Kell még más egy tökéletes
              fotóhoz vagy egy extra videókliphez? Ha szerinted semmi, keresd a
              Fotózások, forgatások menüt!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Kattintson a továbbiakért{" "}
              <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-20 swiper-layout">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="mySwiper slide-swiper-4"
          >
            <SwiperSlide>
              <Image src={music1} alt="music_pic"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={music2} alt="music_pic"></Image>
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info-4">
            <h1 className="swiper-title-1 text-[#21554f]">Zene az kell</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              A kastélyban nincs élet zene nélkül. Ezt magyarázni sem kell. Ha
              zenész vagy és alkotói szabadságra vágysz vagy zenei
              eseményszervezőként kerested meg a kastélyt, akkor a „Zene az
              kell” fül alatt megtalálod, amit keresel!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Kattintson a továbbiakért{" "}
              <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
        </div>
        {/* Pc view */}
        <div className="flex items-center gap-20 swiper-layout-none">
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info-5">
            <h1 className="swiper-title-2 text-[#21554f]">Táborok</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              1,2,3...SZÁMHÁBORÚÚÚ! A tökéletes gyermekkorhoz nem kell több,
              mint a természetben töltött téli-tavaszi-nyári-őszi napok,
              megannyi felejthetetlen emlékkel. A gyerekek vidáman elveszhetnek
              a platánok uralta parkban egy-egy Tábor ideje alatt.
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Kattintson a továbbiakért{" "}
              <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="mySwiper slide-swiper-5"
          >
            <SwiperSlide>
              <Image src={camp1} alt="camp_pic" className="w-full"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={camp2} alt="camp_pic" className="w-full"></Image>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Mobile view */}
        <div className=" items-center gap-20 swiper-layout hidden swiper-layout-mobile">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="mySwiper slide-swiper-5"
          >
            <SwiperSlide>
              <Image src={camp1} alt="camp_pic" className="w-full"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={camp2} alt="camp_pic" className="w-full"></Image>
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info-5">
            <h1 className="swiper-title-2 text-[#21554f]">Táborok</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              1,2,3...SZÁMHÁBORÚÚÚ! A tökéletes gyermekkorhoz nem kell több,
              mint a természetben töltött téli-tavaszi-nyári-őszi napok,
              megannyi felejthetetlen emlékkel. A gyerekek vidáman elveszhetnek
              a platánok uralta parkban egy-egy Tábor ideje alatt.
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Kattintson a továbbiakért{" "}
              <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
