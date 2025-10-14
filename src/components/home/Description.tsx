import React, { type FC } from 'react';
import clsx from 'clsx';

interface DescriptionProps {
  className?: string;
}

const Description: FC<DescriptionProps> = ({ className = '' }) => {
  return (
    <div className={clsx('bg-bg-banner w-full rounded-[20px] md:rounded-none', className)}>
      {/* Mobile (368px) - Card style with rounded corners */}
      <div className="block md:hidden">
        <div className="bg-bg-banner rounded-[20px] p-8">
          <p className="font-rebond text-2xl leading-[1.2] text-black mb-8 font-semibold">
            We are a creative-first agency helping brands design, build, and scale with purpose. Our team blends strategy, design, and technology to craft experiences that inspire and drive growth. Whether you need a single expert or a full team, we deliver flexible solutions tailored to your goals.
          </p>
          <div className="flex flex-wrap gap-2 text-text-banner text-xl font-rebond font-semibold">
            <span>Visual Design.</span>
            <span>Motion Design.</span>
          </div>
        </div>
      </div>

      {/* Tablet (768px) - Full width with padding */}
      <div className="hidden md:block lg:hidden">
        <div className="px-8 py-16">
          <p className="font-rebond text-[40px] leading-[1.2] text-brand-text mb-12 max-w-full">
            We are a creative-first agency helping brands design, build, and scale with purpose. Our team blends strategy, design, and technology to craft experiences that inspire and drive growth. Whether you need a single expert or a full team, we deliver flexible solutions tailored to your goals.
          </p>
          <div className="text-text-banner text-sm font-rebond">
            UX Design • Digital Marketing • Web Development • Branding • SEO • Content Strategy • Social Media
          </div>
        </div>
      </div>

      {/* Desktop 1440px */}
      <div className="hidden lg:block laptop:hidden">
        <div className="px-12 py-20">
          <p className="font-rebond text-[56px] leading-[1.15] text-brand-text mb-16 max-w-[95%]">
            We are a creative-first agency helping brands design, build, and scale with purpose. Our team blends strategy, design, and technology to craft experiences that inspire and drive growth. Whether you need a single expert or a full team, we deliver flexible solutions tailored to your goals.
          </p>
          <div className="text-text-banner text-base font-rebond">
            UX Design • Digital Marketing • Web Development • Branding • SEO • Content Strategy • Social Media
          </div>
        </div>
      </div>

      {/* Large Desktop 1573px+ */}
      <div className="hidden laptop:block">
        <div className="px-16 py-24">
          <p className="font-rebond text-[64px] leading-[1.15] text-brand-text mb-20 max-w-[92%]">
            We are a creative-first agency helping brands design, build, and scale with purpose. Our team blends strategy, design, and technology to craft experiences that inspire and drive growth. Whether you need a single expert or a full team, we deliver flexible solutions tailored to your goals.
          </p>
          <div className="text-text-banner text-lg font-rebond">
            UX Design • Digital Marketing • Web Development • Branding • SEO • Content Strategy • Social Media
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;