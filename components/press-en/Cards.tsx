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
    title: "Zsófia Rita Jánoska (bride), 08.03.2024 ",
    description:
      "“Rita Zsófia Jánoska (bride), 03/08/2024. We didn't look for a very special, special location, because we didn't believe anyone's myth that our wedding would be the happiest day of our lives. We just wanted a spontaneous afternoon and evening spent in love and joy, where the most important 200 people could celebrate with us, like at a small festival. they let anyone in pants ironed to the edge. This is how we got to Pusztazámor, to Pjatok, and all in all we found an extra, special location. Where the happiest day of our life so far could be realized, quite syrupy and in the gay sense. Despite all our expectations! 😅 We wish you many more successful parties and happy days!”",
  },
  {
    title: "Márk and Évi Miller, May 10, 2021.",
    description:
      "“The location and the Owners are extraordinary!!! 🙂 I got engaged to my partner here last August, with the support of Olivér and his team. Everyone was very nice and helpful. My partner was completely enchanted by the Castle and its extraordinary atmosphere. The food was also great. In retrospect, we thank you for everything and recommend it to everyone who wants to find a perfect location. 🙂” ",
  },

  {
    title: "Gábor Labbancz, September 12, 2023. ",
    description:
      "“I was here as a wedding service provider, and I immediately fell in love with the place. The owners and staff were nice. An extraordinary venue for weddings. If I were a marketer, I would fight with the title tuti tip.” ",
  },
  {
    title: "Ancsa Bartal-Csatószegi, April 23, 2022. ",
    description:
      "“Good owners, great team, wonderful environment, easily accessible location! Delicious food, friendly atmosphere, special location. I loved every moment of our wedding!” ",
  },
  {
    title: "Zsófia Katona Eszter (bride), 28.02.2024. ",
    description:
      "“We loved the oak team, everyone was amazingly good-natured and professional. ❤️ The Marci's put together the menu brilliantly, I think we all fell a little bit in love with the chef. 😁” ",
  },
  {
    title: "Gábor Oláh, April 28, 2019 ",
    description:
      "“In a sensational environment, a place with an extraordinary atmosphere. It was the venue for our wedding. I can only recommend!!!!”",
  },
];
