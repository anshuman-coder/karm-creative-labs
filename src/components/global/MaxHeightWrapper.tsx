import clsx from "clsx";
import React, { type FC, type ReactNode } from "react";

interface MaxHeightWrapperProps {
  children: ReactNode;
  className?: string;
}
const MaxHeightWrapper: FC<MaxHeightWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <section
      className={clsx(
        "mt-20 flex min-h-[calc(100vh-84px)] w-full flex-col sm:mt-36 md:min-h-[calc(100vh-140px)]",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default MaxHeightWrapper;
