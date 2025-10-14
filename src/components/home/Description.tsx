import React, { type FC } from "react";
import clsx from "clsx";

interface DescriptionProps {
  className?: string;
}

const Description: FC<DescriptionProps> = ({ className = "" }) => {
  return (
    <div
      className={clsx(
        "bg-bg-banner w-full rounded-[20px] md:rounded-none",
        className,
      )}
    >
      {/* Mobile (368px) - Card style with rounded corners */}
      <div className="block md:hidden">
        <div className="bg-bg-banner rounded-[20px] p-8">
          <p className="font-rebond mb-8 text-2xl leading-[1.2] font-semibold text-black">
            We are a creative-first agency helping brands design, build, and
            scale with purpose. Our team blends strategy, design, and technology
            to craft experiences that inspire and drive growth. Whether you need
            a single expert or a full team, we deliver flexible solutions
            tailored to your goals.
          </p>
          <div className="text-text-banner font-rebond flex flex-wrap gap-2 text-xl font-semibold">
            <span>Visual Design.</span>
            <span>Motion Design.</span>
          </div>
        </div>
      </div>

      {/* Tablet (768px) - Full width with padding */}
      <div className="hidden md:block lg:hidden">
        <div className="px-8 py-16">
          <p className="font-rebond text-brand-text mb-12 max-w-full text-[40px] leading-[1.2]">
            We are a creative-first agency helping brands design, build, and
            scale with purpose. Our team blends strategy, design, and technology
            to craft experiences that inspire and drive growth. Whether you need
            a single expert or a full team, we deliver flexible solutions
            tailored to your goals.
          </p>
          <div className="text-text-banner font-rebond text-sm">
            UX Design • Digital Marketing • Web Development • Branding • SEO •
            Content Strategy • Social Media
          </div>
        </div>
      </div>

      {/* Desktop 1440px */}
      <div className="laptop:hidden hidden lg:block">
        <div className="px-12 py-20">
          <p className="font-rebond text-brand-text mb-16 max-w-[95%] text-[56px] leading-[1.15]">
            We are a creative-first agency helping brands design, build, and
            scale with purpose. Our team blends strategy, design, and technology
            to craft experiences that inspire and drive growth. Whether you need
            a single expert or a full team, we deliver flexible solutions
            tailored to your goals.
          </p>
          <div className="text-text-banner font-rebond text-base">
            UX Design • Digital Marketing • Web Development • Branding • SEO •
            Content Strategy • Social Media
          </div>
        </div>
      </div>

      {/* Large Desktop 1573px+ */}
      <div className="laptop:block hidden">
        <div className="px-16 py-24">
          <p className="font-rebond text-brand-text mb-20 max-w-[92%] text-[64px] leading-[1.15]">
            We are a creative-first agency helping brands design, build, and
            scale with purpose. Our team blends strategy, design, and technology
            to craft experiences that inspire and drive growth. Whether you need
            a single expert or a full team, we deliver flexible solutions
            tailored to your goals.
          </p>
          <div className="text-text-banner font-rebond text-lg">
            UX Design • Digital Marketing • Web Development • Branding • SEO •
            Content Strategy • Social Media
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
