import clsx from "clsx";
import Image from "next/image";
import React, { type FC } from "react";

interface LogoProps {
  className?: string;
}
const Logo: FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={clsx(
      "relative flex items-center justify-center p-1",
      className,
    )}>
      <Image
        src="/karn-logo.png"
        alt="karn-logo"
        fill
        className="object-fill"
      />
    </div>
  );
};

export default Logo;
