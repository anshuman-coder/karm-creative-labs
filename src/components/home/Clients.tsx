import React, { type FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { TestimonialsLogos } from '~/constants/clients'

interface ClientsProps {
  className?: string;
}

const Clients: FC<ClientsProps> = ({ className = '' }) => {
  return (
    <section className={clsx('bg-black w-full py-8 px-4 md:px-8 lg:px-12 laptop:px-16 flex flex-col justify-between', className)}>
      {/* Content wrapper */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Mobile (368px) - Stacked layout */}
        <div className="block md:hidden">
          <h2 className="font-rebond text-[48px] leading-[1.1] text-white mb-8">
            Clients Who Push Boundaries
          </h2>
          <p className="font-rebond text-[18px] leading-[1.4] text-white mb-6">
            We&apos;ve had the privilege of working with brands of all sizes — from ambitious startups to global enterprises.
          </p>
          <p className="font-rebond text-[18px] leading-[1.4] text-white">
            Each project is a partnership, and we&apos;re proud of the work we&apos;ve created together. These are just a few we&apos;ve had the chance to team up with.
          </p>
        </div>

        {/* Tablet (768px) - Two column layout */}
        <div className="hidden md:flex lg:hidden items-start justify-between gap-12">
          <div className="flex-1">
            <h2 className="font-rebond text-[56px] leading-[1.1] text-white mb-12">
              Clients Who Push Boundaries
            </h2>
          </div>
          <div className="flex-1 space-y-6">
            <p className="font-rebond text-[18px] leading-[1.4] text-white">
              We&apos;ve had the privilege of working with brands of all sizes from ambitious startups to global enterprises.
            </p>
            <p className="font-rebond text-[18px] leading-[1.4] text-white">
              Each project is a partnership, and we&apos;re proud of the work we&apos;ve created together. These are just a few we&apos;ve had the chance to team up with.
            </p>
          </div>
        </div>

        {/* Desktop 1440px - Three column layout */}
        <div className="hidden lg:flex laptop:hidden gap-16">
          <div className="flex-shrink-0">
            <h2 className="font-rebond text-[64px] leading-[1.1] text-white max-w-[400px]">
              Clients Who Push Boundaries
            </h2>
          </div>
          <div className="flex gap-12 items-start pt-2">
            <p className="font-rebond text-[16px] leading-[1.5] text-white max-w-[280px]">
              We&apos;ve had the privilege of working with brands of all sizes from ambitious startups to global enterprises.
            </p>
            <p className="font-rebond text-[16px] leading-[1.5] text-white max-w-[280px]">
              Each project is a partnership, and we&apos;re proud of the work we&apos;ve created together. These are just a few we&apos;ve had the chance to team up with.
            </p>
          </div>
        </div>

        {/* Large Desktop 1573px+ - Three column layout with larger text */}
        <div className="hidden laptop:flex gap-20">
          <div className="flex-shrink-0">
            <h2 className="font-rebond text-[72px] leading-[1.1] text-white max-w-[500px]">
              Clients Who Push Boundaries
            </h2>
          </div>
          <div className="flex gap-16 items-start pt-2">
            <p className="font-rebond text-[18px] leading-[1.5] text-white max-w-[300px]">
              We&apos;ve had the privilege of working with brands of all sizes from ambitious startups to global enterprises.
            </p>
            <p className="font-rebond text-[18px] leading-[1.5] text-white max-w-[300px]">
              Each project is a partnership, and we&apos;re proud of the work we&apos;ve created together. These are just a few we&apos;ve had the chance to team up with.
            </p>
          </div>
        </div>
      </div>

      {/* Client Logos - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:flex flex-wrap items-center justify-start gap-8 lg:gap-12 mt-16 lg:mt-20">
        {TestimonialsLogos.map((logo, index) => (
          <div key={index} className="relative h-12 lg:h-14 w-auto flex items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={56}
              className="object-contain h-full w-auto brightness-0 invert"
              style={{ height: 'auto', maxHeight: '56px' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;