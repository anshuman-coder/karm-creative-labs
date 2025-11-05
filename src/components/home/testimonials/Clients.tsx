import React, { type FC } from "react";
import clsx from "clsx";
import { TestimonialsLogos } from "~/constants/clients";
import useBreakpoint from "~/hooks/useBreakpoint";
import InfiniteLogoCarousel from "./InfiniteLogoCarousel";
import LogoFlip from "./LogoFlip";

interface ClientsProps {
  className?: string;
}

const Clients: FC<ClientsProps> = ({ className = "" }) => {
  const breakpoint = useBreakpoint()

  return (
    <div
      className={clsx(
        "flex w-full max-w-[1500px] flex-col justify-between bg-black px-4 md:px-8 lg:px-12 py-5 md:py-8 lg:py-12",
        className,
      )}
    >
      <div className="flex flex-1 flex-col justify-center gap-8 md:gap-20">
        <h2 className="font-mono text-3xl md:text-5xl xl:text-8xl leading-[1.1] text-white font-semibold">
          Clients Who <br /> Push Boundaries
        </h2>
        <div className="w-full flex flex-col sm:flex-row justify-between sm:justify-center md:justify-start lg:justify-end items-start md:items-center gap-6 md:gap-12">
          <p className="font-mono text-sm leading-[1.4] text-white font-normal max-w-[278px]">
            We’ve had the privilege of collaborating with brands of every scale, from bold, ambitious startups to established global enterprises. Each partnership brings a new challenge, a fresh story, and an opportunity to create something meaningful.
          </p>
          <p className="font-mono text-sm leading-[1.4] text-white font-normal max-w-[278px]">
            Every project is more than just work; it’s a shared journey. We take pride in the impact we’ve made together and the ideas we’ve brought to life
          </p>
        </div>
      </div>

      {breakpoint.isAndAbove('md', (
        <div className="mt-16 md:mt-20">
          <InfiniteLogoCarousel
            logos={TestimonialsLogos}
            speed={1}
            direction="left"
          />
        </div>
      ), (
        <div className="mt-8">
          <LogoFlip
            logos={TestimonialsLogos}
            interval={2500}
          />
        </div>
      ))}
    </div>
  );
};

export default Clients;
