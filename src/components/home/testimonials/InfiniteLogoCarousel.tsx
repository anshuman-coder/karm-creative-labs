import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
}

interface InfiniteLogoCarouselProps {
  logos: Logo[];
  speed?: number; // pixels per frame
  direction?: 'left' | 'right';
}

const InfiniteLogoCarousel: React.FC<InfiniteLogoCarouselProps> = ({ 
  logos, 
  speed = 1,
  direction = 'left' 
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    
    if (!wrapper || !content) return;

    // Clone content for seamless loop
    const clone = content.cloneNode(true);
    wrapper.appendChild(clone);

    let animationId: number;
    let position = 0;
    const contentWidth = content.offsetWidth;
    const moveAmount = direction === 'left' ? -speed : speed;

    const animate = () => {
      position += moveAmount;
        
      // Reset position when first set has scrolled completely
      if (direction === 'left' && Math.abs(position) >= contentWidth) {
        position = 0;
      } else if (direction === 'right' && position >= contentWidth) {
        position = 0;
      }
      
      if (wrapper) {
        wrapper.style.transform = `translateX(${position}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      // Clean up clone
      if (wrapper.lastChild) {
        wrapper.removeChild(wrapper.lastChild);
      }
    };
  }, [speed, direction]);

  return (
    <div 
      className="w-full overflow-hidden"
      style={{ maxWidth: '100vw' }}
    >
      <div 
        ref={wrapperRef}
        className="flex will-change-transform"
        style={{ width: 'fit-content' }}
      >
        <div 
          ref={contentRef}
          className="flex gap-8 lg:gap-12 flex-shrink-0 items-center"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative flex h-12 w-auto items-center lg:h-14 flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={56}
                className="h-full w-auto object-contain brightness-0 invert"
                style={{ height: "auto", maxHeight: "56px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoCarousel;