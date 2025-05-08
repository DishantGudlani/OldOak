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
        BRIEF OVERVIEW <br />
        <span className=" text-[#328177] mt-32 opacity-0 infoH2 overview_title_2 font-bold leading-none">
          Old Oak Castle inn
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
            <h1 className="swiper-title-1 text-[#21554f]">Weddings</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              If you visited us as a bride or groom, the future for your
              wedding, look under the Weddings tab, where everything is useful I
              found information that is perfect for the time spent with us
              required for days.
            </p>

            <Link
              className="text-xs lg:text-sm flex items-center gap-4"
              href="/contactus-en"
            >
              Click for more <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
        </div>
        {/* pc veiw */}
        <div className="flex items-center gap-20 swiper-layout-none">
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info-1 ">
            <h1 className="swiper-title-2 text-[#21554f]">Private events</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              If it&apos;s cheekier and more extravagant than ever before
              birthday/golden wedding or other family or friend event plan for
              yourself, or perhaps as a surprise for your friend/relative, then
              we recommend browsing the Private events tab!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Click for more <HiArrowLongRight className="arrow scale-x-150" />
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
            <h1 className="swiper-title-2 text-[#21554f]">Private events</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              If it&apos;s cheekier and more extravagant than ever before
              birthday/golden wedding or other family or friend event plan for
              yourself, or perhaps as a surprise for your friend/relative, then
              we recommend browsing the Private events tab!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Click for more <HiArrowLongRight className="arrow scale-x-150" />
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
            <h1 className="swiper-title-1 text-[#21554f]">Corporate events</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              Instead of the Budapest locations, this year in a more special
              environment would you hold the usual team building? In addition to
              indoor programs plan to spice up the annual special with outdoor
              activities events such as Christmas dinner? In this case for more
              information, go to Company events!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Click for more <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
        </div>
        {/* Pc view */}
        <div className="flex items-center gap-20 swiper-layout-none">
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info-3">
            <h1 className="swiper-title-2 text-[#21554f]">
              Photo shoots, filming
            </h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              Old Chesterfield sofas, family photos and paintings, antique
              candle holders and the playfully untidy display of burrs from the
              outside ancient walls possessed by plants... We need another
              perfect one for a photo or an extra video clip? If you think there
              is nothing, look for the Photo shoots, filming menu!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Click for more <HiArrowLongRight className="arrow scale-x-150" />
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
              Photo shoots, filming
            </h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              Old Chesterfield sofas, family photos and paintings, antique
              candle holders and the playfully untidy display of burrs from the
              outside ancient walls possessed by plants... We need another
              perfect one for a photo or an extra video clip? If you think there
              is nothing, look for the Photo shoots, filming menu!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Click for more <HiArrowLongRight className="arrow scale-x-150" />
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
            <h1 className="swiper-title-1 text-[#21554f]">
              Music is what you need
            </h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              There is no life in the castle without music. There is no need to
              explain this. If you are a musician and you want creative freedom
              or musicality you came to the castle as an event organizer, then
              the &quot;Music is you will find what you are looking for under
              the &quot;need&quot; tab!
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Click for more <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
        </div>
        {/* Pc view */}
        <div className="flex items-center gap-20 swiper-layout-none">
          <div className="flex flex-col gap-4 backdrop-blur-md swiper-info-5">
            <h1 className="swiper-title-2 text-[#21554f]">Camps</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              1,2,3...THE WAR OF NUMBERS! A perfect childhood doesn&apos;t need
              more, like the winter-spring-summer-autumn days spent in nature,
              with so many unforgettable memories. Children can get lost happily
              in a park dominated by sycamores during one Camp.
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Click for more <HiArrowLongRight className="arrow scale-x-150" />
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
            <h1 className="swiper-title-2 text-[#21554f]">Camps</h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-[#21554f]">
              1,2,3...THE WAR OF NUMBERS! A perfect childhood doesn&apos;t need
              more, like the winter-spring-summer-autumn days spent in nature,
              with so many unforgettable memories. Children can get lost happily
              in a park dominated by sycamores during one Camp.
            </p>

            <Link
              className="text-xs lg:text-sm  flex items-center gap-4"
              href="/contactus"
            >
              Click for more <HiArrowLongRight className="arrow scale-x-150" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
