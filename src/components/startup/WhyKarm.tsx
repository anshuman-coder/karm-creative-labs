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
    image: "/testimonials/person-1.png",
    name: "Testimonial 1",
  },
  {
    id: 2,
    company: "TECH CO",
    rating: 5,
    quote: "Karm Labs transformed our startup journey with their exceptional expertise and dedication.",
    //need to make it person-2.jpg, once we have correct images and content.
    image: "/testimonials/person-1.png",
    name: "Testimonial 2",
  },
  {
    id: 3,
    company: "INNOVATE",
    rating: 5,
    quote: "The best decision we made was partnering with Karm Labs for our product development.",
    //need to make it person-3.jpg, once we have correct images and content.
    image: "/testimonials/person-1.png",
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
    <div className="relative w-full bg-[#E5E5E5] py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40 overflow-hidden">
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
              <div className="max-w-2xl w-full">
                <div className="flex items-center gap-6">
                  {/* Image */}
                  <div className="relative w-1/2 shrink-0">
                    <div className="relative w-full aspect-3/4 rounded-3xl overflow-hidden border-8 border-bg-header-sm">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                        quality={90}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-bg-header-sm rounded-3xl p-8 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-rebond text-black text-2xl font-bold">
                        {currentTestimonial.company}
                      </h4>
                      <div className="flex gap-1">
                        {[...Array(currentTestimonial.rating)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <blockquote className="font-rebond text-black text-xl font-semibold leading-relaxed">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {/* Desktop Single Card View (lg screens and above) */}
        {
          currentTestimonial && (
            <div className="hidden lg:flex justify-center items-center">
              <div className="max-w-4xl w-full">
                <div className="flex items-center gap-8">
                  {/* Image */}
                  <div className="relative w-1/2 shrink-0">
                    <div className="relative w-full aspect-3/4 rounded-3xl overflow-hidden border-8 border-bg-header-sm">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                        quality={90}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-bg-header-sm rounded-3xl p-10 xl:p-12 flex-1">
                    <div className="flex items-center justify-between mb-5">
                      <h4 className="font-rebond text-black text-3xl xl:text-4xl font-bold">
                        {currentTestimonial.company}
                      </h4>
                      <div className="flex gap-1">
                        {[...Array(currentTestimonial.rating)].map((_, index) => (
                          <svg
                            key={index}
                            className="w-6 h-6 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <blockquote className="font-rebond text-black text-2xl xl:text-3xl font-semibold leading-relaxed">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </blockquote>
                  </div>
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
      {/* Image Container with Green Border */}
      <div className="relative w-full max-w-sm mb-6">
        <div className="relative w-full aspect-4/5 rounded-3xl overflow-hidden border-8 border-bg-header-sm">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            quality={90}
          />
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="bg-bg-header-sm rounded-3xl p-6 xs:p-8 w-full max-w-sm">
        {/* Company Name */}
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-rebond text-black text-xl xs:text-2xl font-bold">
            {testimonial.company}
          </h4>
          {/* Star Rating */}
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, index) => (
              <svg
                key={index}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="font-rebond text-black text-base xs:text-lg sm:text-xl font-semibold leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>
    </div>
  );
};

export default WhyKarm;
