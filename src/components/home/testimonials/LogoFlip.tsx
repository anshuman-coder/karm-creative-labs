import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
}

interface LogoFlipProps {
  logos: Logo[];
  interval?: number; // milliseconds between flips
}

const LogoFlip: React.FC<LogoFlipProps> = ({
  logos,
  interval = 2000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Guard against empty logos array
    if (logos.length === 0) return;

    // Start the flip interval
    intervalIdRef.current = setInterval(() => {
      setIsFlipping(true);

      // Wait for flip animation to complete before changing logo
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
        setIsFlipping(false);
      }, 300); // Half of the flip duration
    }, interval);

    // Cleanup function
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
  }, [logos.length, interval]);

  // Guard against empty array
  if (logos.length === 0) {
    return null;
  }

  const currentLogo = logos[currentIndex]!;

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div
        className="relative h-16 w-auto transition-transform duration-600 ease-in-out"
        style={{
          transform: isFlipping ? 'rotateX(90deg)' : 'rotateX(0deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        <Image
          src={currentLogo.src}
          alt={currentLogo.alt}
          width={200}
          height={64}
          className="h-full w-auto object-contain brightness-0 invert"
          style={{
            height: 'auto',
            maxHeight: '64px',
            backfaceVisibility: 'hidden'
          }}
          priority
        />
      </div>
    </div>
  );
};

export default LogoFlip;
