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
          n addition to the rustic splendor of the Öreg Tölgy Kastély-Fogadó,
          with a professional team we are at your disposal for any event.{" "}
          <Highlight>The Pusztámór castle</Highlight> and that which surrounds
          it environment offers a unique opportunity for an experience close to
          nature ✨.
        </p>
        <p>
          For events held in our large hall
          <Highlight> maximum 130 </Highlight> we can eat comfortably, there are
          several to plant according to the planting scheme. In the back garden
          of the castle, as well as the by the lake in total{" "}
          <Highlight> for 160 people </Highlight>
          we can provide suitable seating. (PLANTING SCHEMES)
        </p>
        <p>
          It is possible for events held in the castle&apos;s garden{" "}
          <Highlight> aesthetic, white tents for rent</Highlight>.
        </p>
      </div>
    ),
  },
  {
    id: 1,

    content: (
      <div className="flex flex-col gap-6">
        <p>
          Mother nature gives us the basic decoration, the year is everything
          day, and the additional value added by our hands is great it&apos;s
          our decorator
          <Highlight>Guaranteed by Oreg Oelgy decor partner company</Highlight>.
        </p>
        <p>
          It is complete for any small or large event personally coordinated
          catering service with our professional team we provide.
        </p>
        <p>
          We provide a service that meets all needs in the field of food.
          <Highlight>Our chef, Norbert Gergely </Highlight>, many years of
          domestic and thanks to his experiences abroad, he also has heavenly
          tastes at home it is prepared by the traditional with surpassing
          professionalism and love dishes inspired by Hungarian and
          international cuisine.
        </p>
      </div>
    ),
  },
  {
    id: 2,

    content: (
      <div className="flex flex-col gap-6">
        <p>
          The drinks, special cocktails
          <Highlight>our professional bar servers</Highlight> the castle is
          mixed in its imposing salon and in the bar of the garden room.
        </p>
        <p>
          Given the location of the castle, as a unique service
          <Highlight>
            {" "}
            it is possible to rent our transport buses,
          </Highlight>{" "}
          which greatly facilitates and guarantees the guests getting to and
          from the site safely arrival home.
        </p>
        <p>
          <Highlight>Ford Transit (9 seats), VMercedes (7 seats).</Highlight>
          In addition, other categories of cars are also available whether
          it&apos;s a wedding car for the engaged couple or the wedding party of
          any other member.
        </p>
      </div>
    ),
  },
];
