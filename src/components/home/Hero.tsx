import { Transition } from "@headlessui/react";
import React, { Fragment, useCallback, useEffect, useState, useRef } from "react";
import useBreakpoint from "~/hooks/useBreakpoint";
import Button from "../global/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HoverImage {
  id: number;
  x: number;
  y: number;
  img: string;
  show: boolean;
}

const Hero = () => {
  const router = useRouter()
  const breakpoint = useBreakpoint();
  const [transitionshow, setTransitionshow] = useState(false);
  const [hoverImages, setHoverImages] = useState<HoverImage[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageCounterRef = useRef(0);
  const lastPositionRef = useRef<{ x: number; y: number } | null>(null);

  const letsTalkClick = useCallback(() => {
    void router.push('/contact-us')
  }, [router])

  useEffect(() => {
    setTransitionshow(true);
  }, []);

  // Mouse move handler for desktop hover effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Only for md and above (>= 768px)
    if (window.innerWidth < 768) return;

    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Distance-based triggering to prevent too many images at same point
    if (lastPositionRef.current) {
      const distance = Math.sqrt(
        Math.pow(x - lastPositionRef.current.x, 2) +
        Math.pow(y - lastPositionRef.current.y, 2)
      );

      // Only create new image if mouse moved at least 180px from last position
      if (distance < 280) return;
    }

    // Update last position
    lastPositionRef.current = { x, y };

    // Random image from 1 to 23
    const randomImg = Math.floor(Math.random() * 23) + 1;
    const imgSrc = `/hovering-imgs/exp_${randomImg}.png`;

    // Add some random offset variation for more natural feel
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;

    const newImage: HoverImage = {
      id: imageCounterRef.current++,
      x: x - 125 + offsetX, // Larger offset for bigger images
      y: y - 125 + offsetY,
      img: imgSrc,
      show: true,
    };

    setHoverImages((prev) => {
      // Keep only last 8 images for better visual effect
      const updated = [...prev, newImage].slice(-8);
      return updated;
    });

    // Remove image after longer duration for smoother fade
    setTimeout(() => {
      setHoverImages((prev) => prev.filter((img) => img.id !== newImage.id));
    }, 1500);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Clear all images when mouse leaves
    setHoverImages([]);
    // Reset last position
    lastPositionRef.current = null;
  }, []);

  return (
    <Transition
      as={Fragment}
      show={transitionshow}
      enter="transition-all duration-600 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
    >
      <div
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="text-brand-text font-mono laptop:text-8xl flex flex-1 flex-col items-center justify-between px-10 text-center text-3xl font-semibold md:justify-around md:text-6xl relative overflow-hidden">
        <div className="flex w-full flex-1 flex-col items-center justify-center md:flex-none">
          <p className="px-3 z-20">
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
          <p className="px-[60px] z-20">
            designs {breakpoint.isAndBelow('sm', <br />)} that{" "}
            <span className="font-times font-bold italic">engage.</span>
          </p>
        </div>
        {breakpoint.isAndAbove("md", <Button label="LET'S TALK" className="py-6 font-mono! z-20" onClick={letsTalkClick} />)}

        {/* Hover Images - Desktop Only with Framer Motion */}
        <AnimatePresence>
          {hoverImages.map((hoverImg) => (
            <motion.div
              key={hoverImg.id}
              className="absolute pointer-events-none z-10"
              style={{
                left: `${hoverImg.x}px`,
                top: `${hoverImg.y}px`,
              }}
              initial={{
                opacity: 0,
                scale: 2,
                rotate: 8,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.2,
                filter: "blur(18px)",
                transition: { duration: 0.8, ease: "easeOut" },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.6,
              }}
            >
              <Image
                src={hoverImg.img}
                alt="hover effect"
                width={250}
                height={250}
                className="rounded-xl object-cover shadow-2xl select-none"
                draggable={false}
                priority={false}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Transition>
  );
};

export default Hero;
