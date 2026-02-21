import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

interface PricingTier {
  id: number;
  name: string;
  badge?: string;
  bgColor: string;
  textColor: string;
  sections: {
    title: string;
    titleColor: string;
    items: {
      text: string;
      checked: boolean;
      subItems?: string[];
    }[];
  }[];
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Start-up Essentials",
    bgColor: "bg-white",
    textColor: "text-black",
    sections: [
      {
        title: "Pitch Desk",
        titleColor: "text-red-600",
        items: [
          { text: "Sales deck", checked: true },
          { text: "Investor Deck", checked: true },
          { text: "Template creation", checked: true },
          { text: "2-pager", checked: true },
          { text: "Product pitch and Sheets", checked: true },
          { text: "corporate profile", checked: true },
        ],
      },
      {
        title: "Pitch Desk",
        titleColor: "text-red-600",
        items: [
          {
            text: "Discovery call",
            checked: true,
            subItems: [
              "Gain a clear understanding of your vision, goals, and product scope.",
            ],
          },
          {
            text: "User flows & wireframes",
            checked: true,
            subItems: [
              "Mapping how users will interact with your platform.",
            ],
          },
          {
            text: "Figma design prototype",
            checked: true,
            subItems: [
              "A clickable design you can share with users or show to investors.",
            ],
          },
          {
            text: "Feature list",
            checked: true,
            subItems: [
              "A detailed breakdown of what your MVP should include.",
            ],
          },
          {
            text: "Tech recommendations",
            checked: true,
            subItems: [
              "Suggested tools and tech based on your start-up's needs.",
            ],
          },
          {
            text: "Cost & timeline estimates",
            checked: false,
            subItems: [
              "Development effort, timelines, and roughly costs.",
            ],
          },
          {
            text: "Holistic Brand Identity",
            checked: false,
            subItems: [
              "Everything from brand visuals and messaging to decide and positioning strategy for your product.",
            ],
          },
          {
            text: "Web-based prototype (Al-powered)",
            checked: false,
            subItems: [
              "A basic working version of your idea, using AI tools to move faster.",
            ],
          },
          {
            text: "Git repository",
            checked: false,
            subItems: [
              "Code access for developers to build on top of.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Funding Ready",
    bgColor: "bg-black",
    textColor: "text-white",
    sections: [
      {
        title: "Pitch Desk",
        titleColor: "text-red-600",
        items: [
          { text: "Sales deck", checked: true },
          { text: "Investor Deck", checked: true },
          { text: "Template creation", checked: true },
          { text: "2-pager", checked: true },
          { text: "Product pitch and Sheets", checked: true },
          { text: "corporate profile", checked: true },
        ],
      },
      {
        title: "Pitch Desk",
        titleColor: "text-red-600",
        items: [
          {
            text: "Discovery call",
            checked: true,
            subItems: [
              "Gain a clear understanding of your vision, goals, and product scope.",
            ],
          },
          {
            text: "User flows & wireframes",
            checked: true,
            subItems: [
              "Mapping how users will interact with your platform.",
            ],
          },
          {
            text: "Figma design prototype",
            checked: true,
            subItems: [
              "A clickable design you can share with users or show to investors.",
            ],
          },
          {
            text: "Feature list",
            checked: true,
            subItems: [
              "A detailed breakdown of what your MVP should include.",
            ],
          },
          {
            text: "Tech recommendations",
            checked: true,
            subItems: [
              "Suggested tools and tech based on your start-up's needs.",
            ],
          },
          {
            text: "Cost & timeline estimates",
            checked: true,
            subItems: [
              "Development effort, timelines, and roughly costs.",
            ],
          },
          {
            text: "Scale-Brand Identity",
            checked: true,
            subItems: [
              "Building the foundation of the product narrative that includes a modern logo, brand guidelines, and messaging.",
            ],
          },
          {
            text: "Web-based prototype (Al-powered)",
            checked: true,
            subItems: [
              "A basic working version of your idea, using AI tools to move faster.",
            ],
          },
          {
            text: "Git repository",
            checked: true,
            subItems: [
              "Code access for developers to build on top of.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Market Leader",
    bgColor: "bg-white",
    textColor: "text-black",
    sections: [
      {
        title: "Pitch Desk",
        titleColor: "text-red-600",
        items: [
          { text: "Sales deck", checked: true },
          { text: "Investor Deck", checked: true },
          { text: "Template creation", checked: true },
          { text: "2-pager", checked: true },
          { text: "Product pitch and Sheets", checked: true },
          { text: "corporate profile", checked: true },
        ],
      },
      {
        title: "Pitch Desk",
        titleColor: "text-red-600",
        items: [
          {
            text: "Discovery call",
            checked: true,
            subItems: [
              "Gain a clear understanding of your vision, goals, and product scope.",
            ],
          },
          {
            text: "User flows & wireframes",
            checked: true,
            subItems: [
              "Mapping how users will interact with your platform.",
            ],
          },
          {
            text: "Figma design prototype",
            checked: true,
            subItems: [
              "A clickable design you can share with users or show to investors.",
            ],
          },
          {
            text: "Feature list",
            checked: true,
            subItems: [
              "A detailed breakdown of what your MVP should include.",
            ],
          },
          {
            text: "Tech recommendations",
            checked: true,
            subItems: [
              "Suggested tools and tech based on your start-up's needs.",
            ],
          },
          {
            text: "Cost & timeline estimates",
            checked: true,
            subItems: [
              "Development effort, timelines, and roughly costs.",
            ],
          },
          {
            text: "Comprehensive Brand Identity",
            checked: true,
            subItems: [
              "Everything from brand visuals and messaging to decide and positioning strategy for your product.",
            ],
          },
          {
            text: "Web-based prototype (Al-powered)",
            checked: true,
            subItems: [
              "A basic working version of your idea, using AI tools to move faster.",
            ],
          },
          {
            text: "Git repository",
            checked: true,
            subItems: [
              "Code access for developers to build on top of.",
            ],
          },
        ],
      },
    ],
  },
];

const Pricing = () => {
  // Start with [0, 1, 2] where 1 (Funding Ready) is in center
  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2]);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleNext = () => {
    setDirection('right');
    setVisibleIndices((prev) => {
      // Rotate left: [0, 1, 2] -> [1, 2, 0]
      const newLeft = prev[1]!;
      const newCenter = prev[2]!;
      const newRight = (prev[2]! + 1) % pricingTiers.length;
      return [newLeft, newCenter, newRight];
    });
  };

  const handlePrevious = () => {
    setDirection('left');
    setVisibleIndices((prev) => {
      // Rotate right: [0, 1, 2] -> [2, 0, 1]
      const newRight = prev[1]!;
      const newCenter = prev[0]!;
      const newLeft = prev[0] === 0 ? pricingTiers.length - 1 : prev[0]! - 1;
      return [newLeft, newCenter, newRight];
    });
  };

  const currentTier = pricingTiers[visibleIndices[1]!];

  return (
    <div className="relative w-full bg-bg-neutral-white py-12 xs:py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-0">
        {/* 100% Money-Back Guarantee Badge */}
        <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block bg-bg-header-sm text-black text-xs md:text-sm font-rebond font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full">
            ✓ 100% Money-Back Guarantee
          </span>
        </div>

        {/* Mobile Carousel View (xs screens) */}
        <div className="block sm:hidden">
          <div className="relative">
            {/* Navigation Arrows */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white"
                aria-label="Previous pricing tier"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white"
                aria-label="Next pricing tier"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pricing Card with Animation */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={visibleIndices[1]}
                custom={direction}
                initial={{ opacity: 0, x: direction === 'right' ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'right' ? -100 : 100 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {currentTier && <PricingCard tier={currentTier} isActive />}
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {pricingTiers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const currentCenter = visibleIndices[1]!;
                    if (index === currentCenter) return;

                    // Determine direction and number of clicks needed
                    setDirection(index > currentCenter ? 'right' : 'left');

                    // Update visible indices to jump to selected card
                    const newLeft = index === 0 ? pricingTiers.length - 1 : index - 1;
                    const newRight = (index + 1) % pricingTiers.length;
                    setVisibleIndices([newLeft, index, newRight]);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === visibleIndices[1] ? "bg-black w-6" : "bg-gray-400"
                  }`}
                  aria-label={`Go to pricing tier ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet View (md) - Carousel with arrows on sides */}
        <div className="hidden sm:block lg:hidden">
          <div className="relative flex items-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white shrink-0"
              aria-label="Previous pricing tier"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Pricing Card with Animation */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={visibleIndices[1]}
                custom={direction}
                initial={{ opacity: 0, x: direction === 'right' ? 200 : -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'right' ? -200 : 200 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="flex-1"
              >
                {currentTier && <PricingCard tier={currentTier} isActive />}
              </motion.div>
            </AnimatePresence>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white shrink-0"
              aria-label="Next pricing tier"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Desktop Carousel View (lg screens and above) */}
        <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white shrink-0 z-20"
            aria-label="Previous pricing tier"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Carousel Container */}
          <div className="relative flex-1 grid grid-cols-3 gap-6 xl:gap-8 items-center justify-items-center">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleIndices.map((tierIndex, position) => {
                const isCenter = position === 1;

                return (
                  <motion.div
                    key={`${tierIndex}-${position}`}
                    layout
                    initial={{
                      x: direction === 'right' ? 400 : -400,
                      opacity: 0,
                      scale: isCenter ? 1.05 : 1,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      scale: isCenter ? 1.05 : 1,
                    }}
                    exit={{
                      x: direction === 'right' ? -400 : 400,
                      opacity: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className={`${isCenter ? 'z-10' : 'z-0'} w-full`}
                  >
                    <PricingCard
                      tier={pricingTiers[tierIndex]!}
                      isActive={isCenter}
                      isLargeScreen
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white shrink-0 z-20"
            aria-label="Next pricing tier"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface PricingCardProps {
  tier: PricingTier;
  isActive?: boolean;
  isLargeScreen?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, isActive = false, isLargeScreen = false }) => {
  const router = useRouter();

  const handleBookCall = () => {
    void router.push("/contact-us");
  };

  // On large screens (desktop), the center/active card gets black background
  // Side cards on desktop get white background
  // On mobile/tablet, use the original tier background
  const backgroundColor = isLargeScreen
    ? (isActive ? 'bg-black' : 'bg-white')
    : tier.bgColor;
  const textColor = isLargeScreen
    ? (isActive ? 'text-white' : 'text-black')
    : tier.textColor;

  return (
    <div
      className={`${backgroundColor} ${textColor} rounded-3xl p-6 xs:p-7 sm:p-8 md:p-10 lg:p-8 xl:p-10 border-2 border-black shadow-lg w-full flex flex-col transition-all duration-300`}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="mb-4 md:mb-5 lg:mb-4">
          <span className="inline-block bg-bg-header-sm text-black text-xs md:text-sm font-rebond font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Tier Name */}
      <h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-rebond font-bold mb-4 md:mb-5 lg:mb-4">
        {tier.name}
      </h3>

      {/* Book a Free Call Button */}
      <div className="mb-6 md:mb-7 lg:mb-6">
        <button
          onClick={handleBookCall}
          className="bg-white text-black font-rebond font-semibold text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-black hover:bg-gray-100 transition-colors duration-200"
        >
          Book a free call
        </button>
      </div>

      {/* Sections */}
      <div className="space-y-6 md:space-y-7 lg:space-y-6 flex-1">
        {tier.sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {/* Section Title */}
            <h4
              className={`${section.titleColor} font-rebond font-bold text-lg md:text-xl lg:text-lg xl:text-xl mb-3 md:mb-4`}
            >
              {section.title}
            </h4>

            {/* Section Items */}
            <ul className="space-y-2 md:space-y-3 lg:space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2 md:gap-3">
                  <span className="mt-1.5 shrink-0">
                    {item.checked ? (
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="8" cy="8" r="7" />
                      </svg>
                    )}
                  </span>
                  <div className="flex-1">
                    <p
                      className={`font-rebond text-sm md:text-base lg:text-sm xl:text-base ${
                        item.checked ? "font-semibold" : "text-gray-400"
                      }`}
                    >
                      {item.text}
                    </p>
                    {item.subItems && (
                      <ul className="mt-1 ml-0 space-y-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className={`font-rebond text-xs md:text-sm lg:text-xs xl:text-sm ${
                              item.checked
                                ? tier.bgColor === "bg-black"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                                : "text-gray-400"
                            }`}
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
