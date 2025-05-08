import React, { useEffect } from "react";
import Image from "next/image";
import indoor1 from "@/public/assets/images/indoors/indoor_1.jpg";
import indoor2 from "@/public/assets/images/indoors/indoor_2.jpg";
import indoor3 from "@/public/assets/images/indoors/indoor_3.jpg";
import indoor4 from "@/public/assets/images/indoors/indoor_4.jpg";
import indoor5 from "@/public/assets/images/indoors/indoor_5.jpg";
import indoor6 from "@/public/assets/images/indoors/indoor_6.jpg";
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
              src={indoor1}
              alt="Your alt text"
            />
          </div>
          <div className="relative embla__slide embla__class-names ">
            <Image
              className="embla__slide__img_1"
              src={indoor2}
              alt="Your alt text"
            />
          </div>
          <div className="relative embla__slide embla__class-names ">
            <Image
              className="embla__slide__img_2"
              src={indoor3}
              alt="Your alt text"
            />
          </div>
          <div className="relative embla__slide embla__class-names ">
            <Image
              className="embla__slide__img_2"
              src={indoor4}
              alt="Your alt text"
            />
          </div>
          <div className="relative embla__slide embla__class-names ">
            <Image
              className="embla__slide__img_2"
              src={indoor5}
              alt="Your alt text"
            />
          </div>
          <div className="relative embla__slide embla__class-names ">
            <Image
              className="embla__slide__img_2"
              src={indoor6}
              alt="Your alt text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
