import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { type FC } from "react";

interface LogoProps {
  className?: string;
  href?: string;
}
const Logo: FC<LogoProps> = ({ className = "", href = "/" }) => {
  return (
    <Link href={href} className={clsx(
      "relative flex items-center justify-center p-1 cursor-pointer",
      className,
    )}>
      <Image
        src="/karn-logo.png"
        alt="karn-logo"
        fill
        className="object-fill"
      />
    </Link>
  );
};

export default Logo;
