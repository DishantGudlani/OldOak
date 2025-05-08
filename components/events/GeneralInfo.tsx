"use client";
import { CardStack } from "./sub-components/card-stack";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export function CardStackDemo() {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center w-full"
      >
        <CardStack items={CARDS} />
      </motion.div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-[#328177] dark:bg-emerald-700/[0.2]  px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,

    content: (
      <div className="flex flex-col gap-6">
        <p>
          Az Öreg Tölgy Kastély-Fogadó rusztikus pompája mellett profi csapattal
          állunk rendelkezésetekre, legyen szó bármilyen rendezvényről is.{" "}
          <Highlight>A pusztazámori kastély</Highlight> és az azt körülvevő
          környezet egyedülálló lehetőséget kínál egy természetközeli élményre
          ✨.
        </p>
        <p>
          Nagytermünkben tartott rendezvények esetén
          <Highlight> maximálisan 130 </Highlight> főt tudunk kényelmesen,
          többféle ültetési séma szerint leültetni. A kastély hátsó kertjében,
          valamint a tó mellett összesen <Highlight> 160 főnek </Highlight>
          megfelelő ülőhelyet tudunk biztosítani. (ÜLTETÉSI SÉMÁK)
        </p>
        <p>
          A kastély kertjében tartott rendezvényeknél lehetőség van{" "}
          <Highlight> esztétikus, fehér sátrak bérlésére </Highlight>.
        </p>
      </div>
    ),
  },
  {
    id: 1,

    content: (
      <div className="flex flex-col gap-6">
        <p>
          Az alap dekorációt az anyatermészet adja számunkra, az év minden
          napján, a további, kezeink által hozzáadott értéket pedig remek
          dekorosunk az
          <Highlight>Öreg Tölgy dekor partnercég garantálja</Highlight>.
        </p>
        <p>
          Bármely kis – és nagylétszámú eseményen teljeskörű
          cateringszolgáltatást személyesen koordinált, profi csapatunkkal
          biztosítjuk.
        </p>
        <p>
          Az ételek terén minden igényt kielégítő szolgáltatást nyújtunk.
          <Highlight>Szakácsunk, Gergely Norbert </Highlight>, sok éves hazai és
          külföldi tapasztalatainak köszönhetően az otthoni, mennyei ízeket is
          túlszárnyaló profizmussal és szeretettel készíti el a hagyományos
          magyar és nemzetközi konyha ihlette fogásokat. .
        </p>
      </div>
    ),
  },
  {
    id: 2,

    content: (
      <div className="flex flex-col gap-6">
        <p>
          Az italokat, különleges koktélokat
          <Highlight> profi báros felszolgálóink</Highlight> mixelik a kastély
          impozáns szalonjában, illetve a kerthelyiség bárjában.
        </p>
        <p>
          Tekintettel a kastély elhelyezkedésére, egyedülálló szolgáltatásként
          <Highlight>
            {" "}
            lehetőség van transzport buszaink bérlésére,
          </Highlight>{" "}
          amely nagymértékben megkönnyíti, illetve garantálja a vendégek
          helyszínre való kijutását és a helyszínről való biztonságos
          hazaérkezését.
        </p>
        <p>
          <Highlight>
            Ford transit (9 személyes), VMercedes (7 személyes).
          </Highlight>
          Ezen felül további kategóriás autók is a rendelkezésre állnak, legyen
          szó akár menyasszonyi autóról a jegyes pár részére, akár a násznép
          bármely más tagjának.
        </p>
      </div>
    ),
  },
];
