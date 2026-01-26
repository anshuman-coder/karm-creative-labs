import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-12 xs:py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/startup/banner-image.jpg"
          alt="Karm Labs Background"
          fill
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-bg-header-sm z-1" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="flex flex-col items-start justify-center space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
          {/* Section Title */}
          <h3 className="text-black font-rebond text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wider">
            WHO WE ARE
          </h3>

          {/* Main Description */}
          <p className="text-black font-rebond text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight max-w-6xl">
            At Karm labs, we collaborate with some of the most imaginative
            entrepreneurs and influential business leaders globally to establish
            genuinely groundbreaking businesses.
          </p>

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between items-start space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-0 md:space-x-12 lg:space-x-16 xl:space-x-20 w-full mt-8 xs:mt-12 sm:mt-16 md:mt-20">
            {/* 50M+ */}
            <div className="flex flex-col items-start md:items-center md:text-center">
              <h2 className="text-white font-rebond text-6xl xs:text-7xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
                50M+
              </h2>
              <p className="text-black font-rebond text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-semibold mt-2 md:mt-3 lg:mt-4">
                Assets under management
              </p>
            </div>

            {/* 3B+ */}
            <div className="flex flex-col items-start md:items-center md:text-center">
              <h2 className="text-white font-rebond text-6xl xs:text-7xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
                3B+
              </h2>
              <p className="text-black font-rebond text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-semibold mt-2 md:mt-3 lg:mt-4">
                Portfolio value
              </p>
            </div>

            {/* 12+ */}
            <div className="flex flex-col items-start md:items-center md:text-center">
              <h2 className="text-white font-rebond text-6xl xs:text-7xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
                12+
              </h2>
              <p className="text-black font-rebond text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-semibold mt-2 md:mt-3 lg:mt-4">
                Portfolio companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
