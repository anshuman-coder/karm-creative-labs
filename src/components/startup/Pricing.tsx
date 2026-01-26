import React, { useState } from "react";
import Button from "../global/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    badge: "100% Money-Back Guarantee",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? pricingTiers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === pricingTiers.length - 1 ? 0 : prev + 1));
  };

  const currentTier = pricingTiers[currentIndex];

  return (
    <div className="relative w-full bg-[#E5E5E5] py-12 xs:py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
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

            {/* Pricing Card */}
            {currentTier && <PricingCard tier={currentTier} />}

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {pricingTiers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-black w-6" : "bg-gray-400"
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

            {/* Pricing Card */}
            {
              currentTier && (
                <div className="flex-1">
                  <PricingCard tier={currentTier} />
                </div>
              )
            }

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

        {/* Desktop Grid View (lg screens and above) */}
        <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white shrink-0"
            aria-label="Previous pricing tier"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* All Cards */}
          <div className="grid grid-cols-3 gap-6 xl:gap-8 flex-1">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} isLargeScreen />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white shrink-0"
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
  isMediumScreen?: boolean;
  isLargeScreen?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  return (
    <div
      className={`${tier.bgColor} ${tier.textColor} rounded-3xl p-6 xs:p-7 sm:p-8 md:p-10 lg:p-8 xl:p-10 border-2 border-black shadow-lg min-h-[600px] md:min-h-[700px] lg:min-h-[650px] xl:min-h-[750px] flex flex-col`}
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
        <Button
          label="Book a free call"
          className="text-sm! md:text-base! py-2! px-4! md:px-5! rounded-full! font-rebond! font-semibold!"
        />
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
