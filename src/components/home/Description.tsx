import React, { type FC } from "react";
import clsx from "clsx";
import InfiniteScrollBanner from "./InfiniteScrollBanner";

interface DescriptionProps {
  className?: string;
}

const Description: FC<DescriptionProps> = ({ className = "" }) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-start items-start flex-1 w-full overflow-hidden max-w-[1330px] rounded-3xl",
        className,
      )}
    >
      <div className="flex-1 relative flex flex-col mx-auto justify-between bg-bg-banner rounded-3xl md:rounded-none w-full">
        <div className="flex-1 pl-3 sm:px-12 pr-5 pt-7 sm:pt-14 md:pt-10 pb-28 md:pb-0 laptop:pb-80 2xl:pb-72">
          <p className="font-rebond text-2xl md:text-4xl laptop:text-6xl leading-[1.2] font-semibold text-black">
            We are a creative-first lab helping brands design, build, and scale with purpose. Our team blends strategy, design, analytics, and technology to craft meaningful experiences that inspire and drive growth. We turn insights into action, translating data into creative opportunities that deliver measurable impact. Every project is rooted in curiosity, collaboration, and innovation.
          </p>
        </div>
        <div className="w-full overflow-hidden absolute bottom-0 left-0 right-0 pb-4 md:pb-6">
          <InfiniteScrollBanner />
        </div>
      </div>
    </div>
  );
};

export default Description;
