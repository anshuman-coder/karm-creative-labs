import React, { type FC, type PropsWithChildren } from "react";
import Image from "next/image";
import { useBreakpoint } from "~/hooks/useBreakpoint";
import { FollowUpLinks } from "~/constants/followUps";
import clsx from "clsx";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  forPage: 'home' | 'contact'
}

const Footer: FC<FooterProps> = ({ forPage = 'contact', ...props }) => {

  const breakpoint = useBreakpoint();

  return (
    <footer className="flex justify-center items-center bg-bg-header-sm p-4 text-black md:px-6 md:py-12 w-full" {...props}>
      <div className="w-full max-w-[1500px]">
        {(forPage === 'home' || breakpoint.current === 'md') && (
          <div className="text-4xl md:text-5xl xl:text-[80px] font-rebond font-semibold text-black not-italic mb-6">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </SocialIcon>

                <SocialIcon url={FollowUpLinks.linkedin.url} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </SocialIcon>
                {/* <SocialIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05S0 3.603 0 8.049c0 4.142 3.268 7.58 7.437 7.994.545.1.732-.236.732-.524v-1.84c-3.14.682-3.8-1.524-3.8-1.524-.495-1.258-1.2-1.593-1.2-1.593-.986-.674.074-.66.074-.66 1.09.076 1.666 1.11 1.666 1.11.97 1.666 2.543 1.183 3.16.903.1-.7.378-1.183.682-1.457-2.41-.274-4.943-1.207-4.943-5.36 0-1.183.422-2.15 1.11-2.906-.11-.274-.48-1.37.104-2.863 0 0 .91-.29 2.986 1.11a10.3 10.3 0 0 1 2.712-.363c.91.003 1.83.123 2.712.363 2.076-1.4 2.984-1.11 2.984-1.11.586 1.493.216 2.589.106 2.863.69.756 1.11 1.723 1.11 2.906 0 4.163-2.535 5.08-4.955 5.35.39.336.732.997.732 2.01v2.983c0 .29.186.628.738.524C12.732 15.626 16 12.187 16 8.049z" />
                  </svg>
                </SocialIcon> */}
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
              href="#"
              className="text-[7px] leading-[100%] font-medium tracking-[0] hover:underline md:text-[20px] lg:text-[20px]"
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
