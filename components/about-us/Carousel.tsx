import React, { useEffect } from "react";
import Image from "next/image";
import team1 from "@/public/assets/images/teams/team_11.jpg";
import team2 from "@/public/assets/images/teams/team_22.jpg";
import team3 from "@/public/assets/images/teams/team_3.jpg";
import team4 from "@/public/assets/images/teams/team_4.jpg";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
          <div className="relative embla__slide embla__class-names carouselOverlay">
            <Image
              className=" embla__slide__img"
              src={team1}
              alt="Your alt text"
            />
          </div>
          <div className="relative embla__slide embla__class-names carouselOverlay-1">
            <Image
              className="embla__slide__img_1"
              src={team2}
              alt="Your alt text"
            />
          </div>
          <div className="relative embla__slide embla__class-names carouselOverlay-2">
            <Image
              className="embla__slide__img_2"
              src={team3}
              alt="Your alt text"
            />
          </div>
          <div className="relative embla__slide embla__class-names carouselOverlay-3">
            <Image
              className="embla__slide__img"
              src={team4}
              alt="Your alt text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
