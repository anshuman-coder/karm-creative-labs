import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  company: string;
  rating: number;
  quote: string;
  image: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "FINASTRA",
    rating: 5,
    quote: "With karm we've seen a 40% improvement in our total go-to-market efficiency!",
    image: "/testimonials/person-1.jpg",
    name: "Testimonial 1",
  },
  {
    id: 2,
    company: "TECH CO",
    rating: 5,
    quote: "Karm Labs transformed our startup journey with their exceptional expertise and dedication.",
    //need to make it person-2.jpg, once we have correct images and content.
    image: "/testimonials/person-1.jpg",
    name: "Testimonial 2",
  },
  {
    id: 3,
    company: "INNOVATE",
    rating: 5,
    quote: "The best decision we made was partnering with Karm Labs for our product development.",
    //need to make it person-3.jpg, once we have correct images and content.
    image: "/testimonials/person-1.jpg",
    name: "Testimonial 3",
  },
];

const WhyKarm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full bg-bg-neutral-white py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        {/* Header Section */}
        <div className="text-center mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <h3 className="font-times italic text-red-600 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-5">
            Why karm?
          </h3>
          <h2 className="font-rebond text-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6">
            Trusted by Millions
          </h2>
          <p className="font-rebond text-black text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Join over 10 million users who streamline their workflows, communicate
            efficiently, and get work done faster with Karm.
          </p>
        </div>

        {/* Mobile Carousel View (xs to sm screens) */}
        <div className="block md:hidden">
          <div className="relative">
            {/* Navigation Arrows */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Testimonial Card */}
            { currentTestimonial && <TestimonialCard testimonial={currentTestimonial} /> }

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-black w-6" : "bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Single Card View (md to lg screens) */}
        {
          currentTestimonial && (
            <div className="hidden md:flex lg:hidden justify-center items-center">
              <div className="max-w-3xl w-full flex">
                {/* User Image - Left Side with rounded left corners */}
                <div className="relative w-2/5 py-2 shrink-0">
                  <div className="relative w-full h-auto aspect-4/3 rounded-3xl overflow-hidden border-8 border-bg-header-sm">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover w-full h-full"
                      quality={90}
                    />
                  </div>
                </div>

                {/* Testimonial Content - Right Side connected to image */}
                <div className="flex-1 bg-bg-header-sm rounded-3xl p-8 flex flex-col justify-center -ml-6">
                  <div className="mb-4">
                    <h3 className="text-black font-rebond text-2xl font-bold mb-2">
                      {currentTestimonial.company}
                      <span className="ml-3 text-yellow-400">
                        {"⭐".repeat(currentTestimonial.rating)}
                      </span>
                    </h3>
                  </div>
                  <p className="text-black font-rebond text-xl font-bold leading-tight">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )
        }

        {/* Desktop Single Card View (lg screens and above) */}
        {
          currentTestimonial && (
            <div className="hidden lg:flex justify-center items-center">
              <div className="max-w-5xl w-full flex">
                {/* User Image - Left Side with rounded left corners */}
                <div className="relative w-2/5 py-2 shrink-0">
                  <div className="relative w-full h-auto aspect-4/3 rounded-3xl overflow-hidden border-8 border-bg-header-sm">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover w-full h-full"
                      quality={90}
                    />
                  </div>
                </div>

                {/* Testimonial Content - Right Side connected to image */}
                <div className="flex-1 bg-bg-header-sm rounded-3xl p-12 xl:p-16 flex flex-col justify-center -ml-6">
                  <div className="mb-4">
                    <h3 className="text-black font-rebond text-3xl xl:text-4xl font-bold mb-2">
                      {currentTestimonial.company}
                      <span className="ml-3 text-yellow-400">
                        {"⭐".repeat(currentTestimonial.rating)}
                      </span>
                    </h3>
                  </div>
                  <p className="text-black font-rebond text-2xl xl:text-3xl font-bold leading-tight">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center">
      {/* User Image - Top with rounded top corners */}
      <div className="relative w-full h-auto max-w-[420px] aspect-4/3 rounded-3xl overflow-hidden border-8 border-bg-header-sm">
        <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-contain w-full h-full"
            quality={90}
          />
      </div>

      {/* Testimonial Content - Bottom connected to image */}
      <div className="bg-bg-header-sm rounded-3xl p-6 xs:p-8 sm:p-10 -mt-6 max-w-md">
        <div className="mb-4">
          <h3 className="text-black font-rebond text-xl xs:text-2xl sm:text-3xl font-bold mb-2">
            {testimonial.company}
            <span className="ml-2 text-yellow-400">
              {"⭐".repeat(testimonial.rating)}
            </span>
          </h3>
        </div>
        <p className="text-black font-rebond text-lg xs:text-xl sm:text-2xl font-bold leading-tight">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </div>
  );
};

export default WhyKarm;
