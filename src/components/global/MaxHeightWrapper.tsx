import clsx from "clsx";
import React, { type FC, type ReactNode, type HTMLAttributes } from "react";

interface MaxHeightWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
const MaxHeightWrapper: FC<MaxHeightWrapperProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <section
      className={clsx(
        "mt-20 flex min-h-[calc(100vh-84px)] w-full flex-col sm:mt-36 lg:mt-20 laptop:mt-26 md:min-h-[calc(100vh-140px)]",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default MaxHeightWrapper;
