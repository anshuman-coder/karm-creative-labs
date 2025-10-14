import React, { useEffect, useState } from "react";

const Hero = () => {
  const [transitionShow, setTransitionShow] = useState(false);

  useEffect(() => {
    setTransitionShow(true);
  }, []);

  return (
    <section className="flex min-h-screen items-center justify-center bg-black p-4 text-white">
      <div className="text-center">
        <div className="relative inline-block">
          {/* This is the optional blur effect behind the circle */}
          <div className="absolute inset-0 rounded-full bg-[#FF6A3A] opacity-50 blur-2xl"></div>

          {/* This is the main animated container */}
          <div
            className={`transition-all duration-700 ease-out ${transitionShow ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
          >
            {/* Main Circle with responsive sizing */}
            <div className="group relative flex h-[300px] w-[300px] cursor-pointer items-center justify-center rounded-full bg-[#FF6A3A] sm:h-[300px] sm:w-[300px] lg:h-[540px] lg:w-[540px]">
              {/* Text with responsive font size */}
              <span className="transform text-center text-[40px] leading-none font-bold text-white transition-transform duration-300 group-hover:scale-110 sm:text-[64px] lg:text-[80px]">
                LET&apos;S WORK
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
