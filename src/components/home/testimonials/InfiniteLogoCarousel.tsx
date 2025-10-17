import React, { useEffect, useRef, useState } from 'react';
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [scrollerWidth, setScrollerWidth] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Measure the width after images load
    const measureWidth = () => {
      const firstChild = scroller.querySelector('.logo-group')!;
      setScrollerWidth(firstChild.scrollWidth);
    };

    // Wait for images to load
    const images = scroller.querySelectorAll('img');
    let loadedCount = 0;

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        measureWidth();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', onImageLoad);
      }
    });

    if (loadedCount === images.length) {
      measureWidth();
    }

    // Cleanup
    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', onImageLoad);
      });
    };
  }, [logos]);

  useEffect(() => {
    if (!scrollerWidth) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      const moveAmount = direction === 'left' ? -speed : speed;
      position += moveAmount;

      // Reset position for seamless loop
      if (direction === 'left') {
        if (position <= -scrollerWidth) {
          position = 0;
        }
      } else {
        if (position >= 0) {
          position = -scrollerWidth;
        }
      }

      scroller.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [scrollerWidth, speed, direction]);

  return (
    <div className="w-full overflow-hidden" style={{ maxWidth: '100vw' }}>
      <div
        ref={scrollerRef}
        className="flex will-change-transform"
        style={{ width: 'fit-content' }}
      >
        {/* First set */}
        <div className="logo-group flex gap-8 lg:gap-12 flex-shrink-0 items-center">
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
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
        {/* Second set - duplicate with same spacing */}
        <div className="logo-group flex gap-8 lg:gap-12 flex-shrink-0 items-center ml-8 lg:ml-12">
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
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