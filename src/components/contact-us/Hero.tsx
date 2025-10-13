import React, { Fragment, useEffect, useState } from 'react';

const Hero = () => {

    const [transitionShow, setTransitionShow] = useState(false);

    useEffect(() => {
        setTransitionShow(true);
    }, []);

    return (
        <section className="bg-black min-h-screen flex items-center justify-center text-white p-4">
            <div className="text-center">
                <div className="relative inline-block">
                    {/* This is the optional blur effect behind the circle */}
                    <div className="absolute inset-0 bg-[#FF6A3A] rounded-full blur-2xl opacity-50"></div>

                    {/* This is the main animated container */}
                    <div
                        className={`transition-all duration-700 ease-out ${transitionShow ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    >
                        {/* Main Circle with responsive sizing */}
                        <div className="relative bg-[#FF6A3A] w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] lg:w-[540px] lg:h-[540px] rounded-full flex items-center justify-center cursor-pointer group">
                            {/* Text with responsive font size */}
                            <span className="text-white text-center text-[40px] sm:text-[64px] lg:text-[80px] font-bold leading-none transform transition-transform duration-300 group-hover:scale-110">
                                LET'S WORK
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;