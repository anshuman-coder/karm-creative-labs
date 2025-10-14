import React, { type FC } from 'react';
import clsx from 'clsx';

interface StandoutProps {
  className?: string;
}

const Standout: FC<StandoutProps> = ({ className = '' }) => {
  return (
    <section className={clsx('bg-[--color-bg-neutral-white] w-full flex flex-col justify-between py-8 px-4 md:px-8 lg:px-12 laptop:px-16', className)}>
      {/* Content wrapper */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Mobile (368px) - Stacked layout */}
        <div className="block md:hidden">
          <h2 className="font-rebond text-[48px] leading-[1.1] text-[--color-brand-text] mb-8">
            Standout Services that shape ideas into impact.
          </h2>
          <p className="font-rebond text-[20px] leading-[1.4] text-[--color-brand-text]">
            From design to launch, we craft solutions that drive growth.
          </p>
        </div>

        {/* Tablet (768px) - Two column layout */}
        <div className="hidden md:flex lg:hidden items-start justify-between gap-12">
          <h2 className="font-rebond text-[56px] leading-[1.1] text-[--color-brand-text] flex-1">
            Standout Services that shape ideas into impact.
          </h2>
          <p className="font-rebond text-[20px] leading-[1.4] text-[--color-brand-text] flex-shrink-0 max-w-[280px] pt-2">
            From design to launch, we craft solutions that drive growth.
          </p>
        </div>

        {/* Desktop 1440px - Two column layout with larger text */}
        <div className="hidden lg:flex laptop:hidden items-start justify-between gap-16">
          <h2 className="font-rebond text-[64px] leading-[1.1] text-[--color-brand-text] flex-1 max-w-[60%]">
            Standout Services that shape ideas into impact.
          </h2>
          <p className="font-rebond text-[22px] leading-[1.4] text-[--color-brand-text] flex-shrink-0 max-w-[320px] pt-2">
            From design to launch, we craft solutions that drive growth.
          </p>
        </div>

        {/* Large Desktop 1573px+ - Two column layout with max size */}
        <div className="hidden laptop:flex items-start justify-between gap-20">
          <h2 className="font-rebond text-[72px] leading-[1.1] text-[--color-brand-text] flex-1 max-w-[55%]">
            Standout Services that shape ideas into impact.
          </h2>
          <p className="font-rebond text-[24px] leading-[1.4] text-[--color-brand-text] flex-shrink-0 max-w-[340px] pt-3">
            From design to launch, we craft solutions that drive growth.
          </p>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="mt-auto pt-12 md:pt-16 lg:pt-20">
        <div className="w-full h-[1px] bg-[--color-brand-text]"></div>
      </div>
    </section>
  );
};

export default Standout;