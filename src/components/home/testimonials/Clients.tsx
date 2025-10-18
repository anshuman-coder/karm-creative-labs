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
        "flex w-full flex-col justify-between bg-black px-3 md:px-6 pt-7 pb-14 max-w-6xl",
        className,
      )}
    >
      <div className="flex flex-1 flex-col justify-center gap-8 md:gap-20">
        <h2 className="font-rebond text-3xl md:text-5xl xl:text-8xl leading-[1.1] text-white font-semibold">
          Clients Who <br /> Push Boundaries
        </h2>
        <div className="w-full flex flex-col sm:flex-row justify-between sm:justify-center md:justify-start lg:justify-end items-start md:items-center gap-6 md:gap-12">
          <p className="font-rebond text-sm leading-[1.4] text-white font-semibold max-w-[278px]">
            We&apos;ve had the privilege of working with brands of all sizes —
            from ambitious startups to global enterprises.
          </p>
          <p className="font-rebond text-sm leading-[1.4] text-white font-semibold max-w-[278px]">
            Each project is a partnership, and we&apos;re proud of the work
            we&apos;ve created together. These are just a few we&apos;ve had the
            chance to team up with.
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
