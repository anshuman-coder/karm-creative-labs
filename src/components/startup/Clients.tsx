import React from "react";
import Image from "next/image";

const clientLogos = [
  {
    id: 1,
    name: "Supr",
    src: "/clients/supr-logo.png",
    width: 120,
    height: 40,
  },
  {
    id: 2,
    name: "Your Venture Vista",
    src: "/clients/your-venture-vista.png",
    width: 180,
    height: 40,
  },
  {
    id: 3,
    name: "Answerr",
    src: "/clients/answer-logo.png",
    width: 140,
    height: 40,
  },
  {
    id: 4,
    name: "Rajshree Transporter",
    src: "/clients/rajshee-transporter.png",
    width: 160,
    height: 40,
  },
  {
    id: 5,
    name: "Ariesview",
    src: "/clients/ariesview-logo.png",
    width: 140,
    height: 40,
  },
];

const Clients = () => {
  return (
    <div className="relative w-full bg-[#E5E5E5] py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <h2 className="text-black font-rebond text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight max-w-5xl mb-4 md:mb-6">
            The best work solution,
            <br />
            for the best price.
          </h2>
          <p className="text-gray-500 font-rebond text-sm sm:text-base md:text-lg lg:text-xl mt-2 md:mt-4">
            Trusted by the world&apos;s leading businesses
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 items-center justify-items-center">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center w-full h-20 xs:h-24 sm:h-28 md:h-32 lg:h-20 xl:h-24 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="object-contain w-auto h-auto max-w-full max-h-full"
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
