import React, { type FC } from "react";
import clsx from "clsx";

interface StandoutProps {
  className?: string;
}

const Standout: FC<StandoutProps> = ({ className = "" }) => {
  return (
    <div
      className={clsx(
        "flex w-full flex-col justify-between px-5 md:px-8 lg:px-12 max-w-[1500px]",
        className,
      )}
    >
      <div className="flex flex-1 flex-col sm:flex-row justify-center md:justify-between w-full gap-5 md:gap-12">
        <h2 className="font-mono mb-7 text-4xl md:text-5xl xl:text-8xl text-brand-text font-semibold max-w-4xl">
          Standout Services That Shape Ideas Into Impact.
        </h2>
        <p className="max-w-[253px] font-mono font-normal text-xl md:text-lg xl:text-2xl leading-[1.4] text-brand-text pt-0 md:pt-3">
          From design to launch, we craft solutions that drive growth.
        </p>
      </div>
    </div>
  );
};

export default Standout;
