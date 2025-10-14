import React, { type FC } from "react";
import Image from "next/image";
import clsx from "clsx";
import { TestimonialsLogos } from "~/constants/clients";

interface ClientsProps {
  className?: string;
}

const Clients: FC<ClientsProps> = ({ className = "" }) => {
  return (
    <section
      className={clsx(
        "laptop:px-16 flex w-full flex-col justify-between bg-black px-4 py-8 md:px-8 lg:px-12",
        className,
      )}
    >
      {/* Content wrapper */}
      <div className="flex flex-1 flex-col justify-center">
        {/* Mobile (368px) - Stacked layout */}
        <div className="block md:hidden">
          <h2 className="font-rebond mb-8 text-[48px] leading-[1.1] text-white">
            Clients Who Push Boundaries
          </h2>
          <p className="font-rebond mb-6 text-[18px] leading-[1.4] text-white">
            We&apos;ve had the privilege of working with brands of all sizes —
            from ambitious startups to global enterprises.
          </p>
          <p className="font-rebond text-[18px] leading-[1.4] text-white">
            Each project is a partnership, and we&apos;re proud of the work
            we&apos;ve created together. These are just a few we&apos;ve had the
            chance to team up with.
          </p>
        </div>

        {/* Tablet (768px) - Two column layout */}
        <div className="hidden items-start justify-between gap-12 md:flex lg:hidden">
          <div className="flex-1">
            <h2 className="font-rebond mb-12 text-[56px] leading-[1.1] text-white">
              Clients Who Push Boundaries
            </h2>
          </div>
          <div className="flex-1 space-y-6">
            <p className="font-rebond text-[18px] leading-[1.4] text-white">
              We&apos;ve had the privilege of working with brands of all sizes
              from ambitious startups to global enterprises.
            </p>
            <p className="font-rebond text-[18px] leading-[1.4] text-white">
              Each project is a partnership, and we&apos;re proud of the work
              we&apos;ve created together. These are just a few we&apos;ve had
              the chance to team up with.
            </p>
          </div>
        </div>

        {/* Desktop 1440px - Three column layout */}
        <div className="laptop:hidden hidden gap-16 lg:flex">
          <div className="flex-shrink-0">
            <h2 className="font-rebond max-w-[400px] text-[64px] leading-[1.1] text-white">
              Clients Who Push Boundaries
            </h2>
          </div>
          <div className="flex items-start gap-12 pt-2">
            <p className="font-rebond max-w-[280px] text-[16px] leading-[1.5] text-white">
              We&apos;ve had the privilege of working with brands of all sizes
              from ambitious startups to global enterprises.
            </p>
            <p className="font-rebond max-w-[280px] text-[16px] leading-[1.5] text-white">
              Each project is a partnership, and we&apos;re proud of the work
              we&apos;ve created together. These are just a few we&apos;ve had
              the chance to team up with.
            </p>
          </div>
        </div>

        {/* Large Desktop 1573px+ - Three column layout with larger text */}
        <div className="laptop:flex hidden gap-20">
          <div className="flex-shrink-0">
            <h2 className="font-rebond max-w-[500px] text-[72px] leading-[1.1] text-white">
              Clients Who Push Boundaries
            </h2>
          </div>
          <div className="flex items-start gap-16 pt-2">
            <p className="font-rebond max-w-[300px] text-[18px] leading-[1.5] text-white">
              We&apos;ve had the privilege of working with brands of all sizes
              from ambitious startups to global enterprises.
            </p>
            <p className="font-rebond max-w-[300px] text-[18px] leading-[1.5] text-white">
              Each project is a partnership, and we&apos;re proud of the work
              we&apos;ve created together. These are just a few we&apos;ve had
              the chance to team up with.
            </p>
          </div>
        </div>
      </div>

      {/* Client Logos - Hidden on mobile, visible on tablet+ */}
      <div className="mt-16 hidden flex-wrap items-center justify-start gap-8 md:flex lg:mt-20 lg:gap-12">
        {TestimonialsLogos.map((logo, index) => (
          <div
            key={index}
            className="relative flex h-12 w-auto items-center lg:h-14"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={56}
              className="h-full w-auto object-contain brightness-0 invert"
              style={{ height: "auto", maxHeight: "56px" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
