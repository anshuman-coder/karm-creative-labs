import React, { type FC, type PropsWithChildren } from "react";
import Image from "next/image";
import { useBreakpoint } from "~/hooks/useBreakpoint";
import { FollowUpLinks } from "~/constants/followUps";
import clsx from "clsx";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  forPage: 'home' | 'contact'
}

const Footer: FC<FooterProps> = ({ forPage = 'contact', ...props }) => {

  const breakpoint = useBreakpoint();

  return (
    <footer className="flex justify-center items-center bg-bg-header-sm p-4 text-black md:px-6 md:py-12 w-full" {...props}>
      <div className="w-full max-w-[1500px]">
        {(forPage === 'home' || breakpoint.current === 'md') && (
          <div className="text-4xl md:text-5xl xl:text-7xl font-mono font-semibold text-black not-italic mb-6">
            <div className="text-wrap text-left">
              From Bold Startups To Global Enterprises,
            </div>
            <div className="pt-3 md:pt-5">
              Let&apos;s Create Something That Lasts!
            </div>
          </div>
        )}
        <div className="md:grid-cols grid gap-10 md:gap-8 lg:grid-cols-3 lg:gap-4 pt-3 font-mono text-lg md:text-3xl xl:text-lg leading-normal font-light text-black not-italic">
          <div className="flex justify-start lg:justify-center items-center">
            <div className="text-left md:text-left">
              <p>
                CONTACT US
              </p>
              <a
                href="mailto:rishav@karmlabs.com"
                className="font-semibold underline"
              >
                rishav@karmlabs.com
              </a>
            </div>
          </div>
          <div className="flex justify-start lg:justify-center items-center">
            <div className="text-left md:text-left">
              <p>
                VISIT US
              </p>
              <p className="font-semibold">
                130 Sutherland Road,
              </p>
              <p className="font-semibold">
                Boston, MA 02135
              </p>
            </div>
          </div>
          <div className="flex justify-start lg:justify-center items-center">
            <div className="w-fit flex flex-col justify-start items-start">
              <p>
                FOLLOW US
              </p>
              <div className="flex gap-2 md:justify-start lg:justify-center items-center">
                <SocialIcon url={FollowUpLinks.instagram.url}>
                  <FaInstagram size={24} />
                </SocialIcon>

                <SocialIcon url={FollowUpLinks.linkedin.url} >
                  <FaLinkedin size={24} />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex justify-center">
          <Image
            src="/karm3.png"
            alt="Logo"
            className="lg:h-[432px]"
            width={690}
            height={432}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <p>
            <a
              href="/privacy-policy"
              className="text-[7px] leading-[100%] font-medium tracking-[0] hover:underline md:text-[20px] lg:text-[20px]"
              target="_blank"
            >
              Privacy Policy
            </a>
          </p>
          <p className="font-mono text-[7px] leading-[100%] font-medium tracking-[0] md:text-[20px] lg:text-[20px]">
            &copy; karmlabs 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

interface SocialIconProps extends PropsWithChildren {
  className?: string;
  url: string;
}

const SocialIcon: FC<SocialIconProps> = ({
  children,
  className,
  url,
}) => (
    <a
      href={url}
      target="_blank"
      className={
        clsx(
          "no-underline flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-black text-white transition-colors hover:bg-white hover:text-black",
          className
        )
      }
    >
      {children}
    </a>
  );
