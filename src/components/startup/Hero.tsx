import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowUpRight } from "lucide-react";

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
          <button
            onClick={handleConsultationClick}
            className="mt-4 xs:mt-6 sm:mt-8 md:mt-10 bg-white hover:bg-gray-50 transition-colors duration-300 border-transparent rounded-full pl-2 md:pl-4 lg:pl-6 xl:pl-8 pr-1.5 md:pr-3 py-1 md:py-3 flex items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 group"
          >
            <span className="text-black font-rebond text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-wide">
              BOOK A FREE CONSULTATION
            </span>
            <div className="bg-[#24e699] group-hover:bg-[#1fd88a] rounded-full p-1.5 xs:p-2 sm:p-2.5 md:p-3 transition-colors duration-300 flex items-center justify-center">
              <ArrowUpRight
                className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-black stroke-[2.5]"
                strokeWidth={2.5}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
