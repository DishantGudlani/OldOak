"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

let interval: any;

type Card = {
  id: number;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  };

  return (
    <motion.div
      variants={slideInFromBottom}
      className="relative cards-events mt-10 lg:mt-20"
    >
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex items-center justify-center bg-[--accent] w-full h-full rounded-lg p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05]"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-medium text-xs lg:text-sm px-4 py-4 text-[--primary] flex text-center card-stack-content">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
