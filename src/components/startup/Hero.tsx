import React from "react";
import Image from "next/image";
import Button from "../global/Button";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const handleConsultationClick = () => {
    void router.push("/contact-us");
  };

  return (
    <div className="relative w-full h-screen min-h-[600px] flex items-center justify-start overflow-hidden pt-0">
      {/* Background Image - extends behind header */}
      <div className="absolute inset-0 top-0 z-0">
        <Image
          src="/startup/startup-hero.jpg"
          alt="Karm Labs Team"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 mt-20 sm:mt-24 md:mt-32 lg:mt-0">
        <div className="flex flex-col items-start justify-center space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8">
          {/* Main Heading */}
          <h1 className="text-white font-rebond text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight md:leading-tight lg:leading-tight">
            Bringing <span className="font-times italic font-normal">your</span>
            <br />
            Idea to Life
          </h1>

          {/* Subtitle */}
          <p className="text-white font-rebond text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl leading-relaxed">
            We help startups tell powerful stories and build smart, scalable products,
            through a series of closely collaborated workshop series.
          </p>

          {/* CTA Button */}
          <Button
            label="BOOK A FREE CONSULTATION"
            onClick={handleConsultationClick}
            className="mt-4 xs:mt-6 sm:mt-8 md:mt-10 bg-bg-header-sm hover:bg-[#24e699] transition-colors duration-300 border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
