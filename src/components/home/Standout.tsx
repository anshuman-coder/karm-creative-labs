import React, { type FC } from "react";
import clsx from "clsx";

interface StandoutProps {
  className?: string;
}

const Standout: FC<StandoutProps> = ({ className = "" }) => {
  return (
    <section
      className={clsx(
        "laptop:px-16 flex w-full flex-col justify-between bg-[--color-bg-neutral-white] px-4 py-8 md:px-8 lg:px-12",
        className,
      )}
    >
      {/* Content wrapper */}
      <div className="flex flex-1 flex-col justify-center">
        {/* Mobile (368px) - Stacked layout */}
        <div className="block md:hidden">
          <h2 className="font-rebond mb-8 text-[48px] leading-[1.1] text-[--color-brand-text]">
            Standout Services that shape ideas into impact.
          </h2>
          <p className="font-rebond text-[20px] leading-[1.4] text-[--color-brand-text]">
            From design to launch, we craft solutions that drive growth.
          </p>
        </div>

        {/* Tablet (768px) - Two column layout */}
        <div className="hidden items-start justify-between gap-12 md:flex lg:hidden">
          <h2 className="font-rebond flex-1 text-[56px] leading-[1.1] text-[--color-brand-text]">
            Standout Services that shape ideas into impact.
          </h2>
          <p className="font-rebond max-w-[280px] flex-shrink-0 pt-2 text-[20px] leading-[1.4] text-[--color-brand-text]">
            From design to launch, we craft solutions that drive growth.
          </p>
        </div>

        {/* Desktop 1440px - Two column layout with larger text */}
        <div className="laptop:hidden hidden items-start justify-between gap-16 lg:flex">
          <h2 className="font-rebond max-w-[60%] flex-1 text-[64px] leading-[1.1] text-[--color-brand-text]">
            Standout Services that shape ideas into impact.
          </h2>
          <p className="font-rebond max-w-[320px] flex-shrink-0 pt-2 text-[22px] leading-[1.4] text-[--color-brand-text]">
            From design to launch, we craft solutions that drive growth.
          </p>
        </div>

        {/* Large Desktop 1573px+ - Two column layout with max size */}
        <div className="laptop:flex hidden items-start justify-between gap-20">
          <h2 className="font-rebond max-w-[55%] flex-1 text-[72px] leading-[1.1] text-[--color-brand-text]">
            Standout Services that shape ideas into impact.
          </h2>
          <p className="font-rebond max-w-[340px] flex-shrink-0 pt-3 text-[24px] leading-[1.4] text-[--color-brand-text]">
            From design to launch, we craft solutions that drive growth.
          </p>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="mt-auto pt-12 md:pt-16 lg:pt-20">
        <div className="h-[1px] w-full bg-[--color-brand-text]"></div>
      </div>
    </section>
  );
};

export default Standout;
