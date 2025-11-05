import { Transition } from "@headlessui/react";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import useBreakpoint from "~/hooks/useBreakpoint";
import Button from "../global/Button";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter()
  const breakpoint = useBreakpoint();
  const [transitionshow, setTransitionshow] = useState(false);

  const letsTalkClick = useCallback(() => {
    void router.push('/contact-us')
  }, [router])

  useEffect(() => {
    setTransitionshow(true);
  }, []);

  return (
    <Transition
      as={Fragment}
      show={transitionshow}
      enter="transition-all duration-600 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
    >
      <div className="text-brand-text font-mono laptop:text-8xl flex flex-1 flex-col items-center justify-between px-10 text-center text-3xl font-semibold md:justify-around md:text-6xl">
        <div className="flex w-full flex-1 flex-col items-center justify-center md:flex-none">
          <p className="px-3">
            Crafting stories <br />that{" "}
            <span className="font-times font-bold italic">inspire,</span>
          </p>
          {/* here will be the video for mobile view */}
          {breakpoint.isAndBelow(
            "sm",
            <div className="relative m-1 flex w-full items-center justify-center p-4 sm:p-2">
              <video
                src="/videos/hero-banner-clip.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="rounded-2xl object-cover shadow-lg w-full h-full"
              />
            </div>,
          )}
          <p className="px-[60px]">
            designs {breakpoint.isAndBelow('sm', <br />)} that{" "}
            <span className="font-times font-bold italic">engage.</span>
          </p>
        </div>
        {breakpoint.isAndAbove("md", <Button label="LET'S TALK" className="py-6 !font-mono" onClick={letsTalkClick} />)}
      </div>
    </Transition>
  );
};

export default Hero;
