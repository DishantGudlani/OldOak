"use client";

import { HoverEffect } from "./sub-components/card-hover-effect";
import { motion } from "framer-motion";

export function CardHoverEffectDemo() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full mx-auto px-8"
    >
      <HoverEffect items={projects} />
    </motion.div>
  );
}
export const projects = [
  {
    title: "Jánoska Rita Zsófia (menyasszony), 2024.03.08. ",
    description:
      "“Nem kerestünk nagyon extra, különleges helyszínt, mert nem hittük el a mítoszt senkinek, miszerint az esküvőnk lesz életünk legboldogabb napja. Csak egy spontán, szeretetben és örömben eltöltött délutánt és estét szerettünk volna, ahol a legfontosabb 200 ember velünk ünnepelhet, mint egy aprócska fesztiválon.Nos ennek nyomán jutott eszünkbe, hogy csekkoljuk már, hogy van-e olyan kastély, ahol rendeznek fesztivált és nem csak élére vasalt nadrágban engednek be bárkit is. Így jutottunk Pusztazámorra, Hozzátok, és all-in-all egy extra, különleges helyszínt találtunk. Ahol megvalósulhatott eddigi életünk elég szirupos és geil értelemben vett legboldogabb napja. Minden várakozásunk ellenére! 😅 Kívánunk Nektek még sok sikeres bulit és boldog napot!”",
  },
  {
    title: "Miller Márk és Évi, 2021. május 10.",
    description:
      "“A helyszín és a Tulajdonosok is rendkívüliek!!! 🙂 Tavaly augusztusban itt jegyeztem el a páromat, Olivér és csapata támogatásával. Mindenki nagyon kedves és segítőkész volt. A páromat teljesen elvarázsolta a Kastély és annak rendkívüli hangulata. Az ételek is szuperek voltak. Utólag is mindent köszönünk és Mindenkinek ajánljuk, aki tökéletes helyszínt szeretne találni. 🙂” ",
  },

  {
    title: "Labbancz Gábor, 2023. szeptember 12. ",
    description:
      "“Esküvői szolgáltatóként voltam itt, azonnal szerelmes lettem a helybe. A tulajdonosok és a dolgozók kedvesek voltak. Egy rendkívüli helyszín esküvőkre. Ha marketinges lennék, akkor “tuti tipp” címmel küzdeném.” ",
  },
  {
    title: "Bartal-Csatószegi Ancsa, 2022. április 23. ",
    description:
      "“Jó fej tulajok, remek csapat, csodálatos környezet, könnyen megközelíthető helyen! Finom ételek, barátságos közeg, különleges helyszín. Imádtam az esküvőnk minden pillanatát!” ",
  },
  {
    title: "Katona Eszter Zsófia (menyasszony), 2024.02.28. ",
    description:
      "“A tölgyes csapatot imádtuk, mindenki elképesztően jófej és profi volt. ❤️ Marciék is zseniálisan összerakták a menüt, a szakácsba szerintem egy kicsit mindannyian szerelmesek lettünk. 😁” ",
  },
  {
    title: "Oláh Gábor, 2019. április 28. ",
    description:
      "“Szenzációs környezetben, egy rendkívüli hangulatú hely. Nekünk az esküvőnk helyszíne volt. Csak ajánlani tudom!!!!”",
  },
];
