import React, { useEffect } from "react";
import Image from "next/image";
import surrounding1 from "@/public/assets/images/outdoors/outdoor_2.jpg";
import surrounding2 from "@/public/assets/images/outdoors/outdoor_3.jpg";
import surrounding3 from "@/public/assets/images/pevents/event_1.jpg";
import surrounding4 from "@/public/assets/images/press/press_1.jpg";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  useEffect(function () {
    gsap.to(".team-carousel", {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".team-carousel",
        start: "top 100%",
      },
    });
  });

  return (
    <div className="embla team-carousel opacity-0">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="relative embla__slide embla__class-names ">
            <Image
              className=" embla__slide__img"
              src={surrounding1}
              alt="Your alt text"
            />
          </div>
          <div className="relative embla__slide embla__class-names ">
            <Image
              className="embla__slide__img_1"
              src={surrounding2}
              alt="Your alt text"
            />
          </div>
          <div className="relative embla__slide embla__class-names ">
            <Image
              className="embla__slide__img_1"
              src={surrounding3}
              alt="Your alt text"
            />
          </div>
          <div className="relative embla__slide embla__class-names ">
            <Image
              className="embla__slide__img_1"
              src={surrounding4}
              alt="Your alt text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
