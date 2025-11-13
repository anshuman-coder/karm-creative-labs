import React, { useEffect, useState } from "react";
import clsx from "clsx";

const Hero = () => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Small delay before splash starts (droplet falling)
    const initialDelay = 200;
    const animationDuration = 2800; // 2.8 seconds total animation
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;

      // Handle initial delay
      if (elapsed < initialDelay) {
        requestAnimationFrame(animate);
        return;
      }

      const adjustedElapsed = elapsed - initialDelay;
      const progress = Math.min(adjustedElapsed / animationDuration, 1);

      setAnimationProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Animation complete, start fade out
        setIsFadingOut(true);
        // Remove from DOM after fade out
        setTimeout(() => {
          setIsVisible(false);
        }, 800); // 800ms fade out
      }
    };

    requestAnimationFrame(animate);
  }, []);

  // If animation is complete, don't render anything
  if (!isVisible) {
    return null;
  }

  // Easing function for splash effect (ease-out cubic for organic feel)
  const easeOutCubic = (t: number) => {
    return 1 - Math.pow(1 - t, 3);
  };

  // Interpolate values based on animation progress
  const interpolate = (start: number, end: number, progress: number) => {
    return start + (end - start) * progress;
  };

  // Calculate responsive values - start much smaller like a droplet
  const getInitialSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 80; // lg - small droplet
      if (window.innerWidth >= 640) return 60; // sm
      return 50; // default - very small
    }
    return 50;
  };

  const getInitialFontSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 20; // lg - small but readable
      if (window.innerWidth >= 640) return 16; // sm
      return 12; // default - small
    }
    return 12;
  };

  const getFinalFontSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 180; // lg
      if (window.innerWidth >= 768) return 64; // md
      if (window.innerWidth >= 640) return 45; // sm
      return 40; // default
    }
    return 40;
  };

  const initialSize = getInitialSize();
  const finalWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const finalHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;

  const initialFontSize = getInitialFontSize();
  const finalFontSize = getFinalFontSize();

  // Apply easing to the animation progress for splash effect
  const easedProgress = easeOutCubic(animationProgress);

  // Calculate the maximum size the circle should reach before expanding to full screen
  const maxCircleSize = Math.max(finalWidth, finalHeight) * 1.2; // Larger for more dramatic splash

  // Splash animation: Keep circular for first 65% of animation, then expand to full screen rapidly
  const circleGrowthThreshold = 0.65; // Circle grows until 65% animation progress

  // Animated values with custom easing
  let width, height, borderRadius;

  if (easedProgress <= circleGrowthThreshold) {
    // Phase 1: Circle grows rapidly (splash impact and spread)
    const circleProgress = easedProgress / circleGrowthThreshold;
    const currentSize = interpolate(initialSize, maxCircleSize, circleProgress);
    width = currentSize;
    height = currentSize;
    borderRadius = 50; // Stay fully rounded
  } else {
    // Phase 2: Expand to fill screen (splash reaching edges)
    const expandProgress = (easedProgress - circleGrowthThreshold) / (1 - circleGrowthThreshold);
    width = interpolate(maxCircleSize, finalWidth * 1.1, expandProgress);
    height = interpolate(maxCircleSize, finalHeight * 1.1, expandProgress);
    borderRadius = interpolate(50, 0, expandProgress);
  }

  // Font size grows throughout the entire animation with easing
  const fontSize = interpolate(initialFontSize, finalFontSize, easedProgress);
  const blurOpacity = interpolate(0.8, 0, easedProgress); // More blur at start
  const blurAmount = interpolate(3, 0, easedProgress); // More intense blur

  // Fade in the droplet at the very beginning for dramatic entrance
  const dropletOpacity = animationProgress < 0.1 ? animationProgress * 10 : 1;

  return (
    <section className={clsx(
      "fixed inset-0 z-50 flex items-center justify-center bg-black text-white transition-opacity duration-[800ms] ease-out",
      isFadingOut ? "opacity-0" : "opacity-100"
    )}>
      <div className="relative" style={{ opacity: dropletOpacity }}>
        {/* Blur effect behind the circle - fades out as it expands */}
        <div
          className="absolute inset-0 bg-bg-work"
          style={{
            opacity: blurOpacity,
            filter: `blur(${blurAmount}rem)`,
            borderRadius: `${borderRadius}%`,
          }}
        ></div>

        {/* Main expanding circle/div */}
        <div
          className="relative flex items-center justify-center bg-bg-work"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${borderRadius}%`,
          }}
        >
          {/* Text that scales with the expansion */}
          <span
            className={clsx(
              "font-roboto-condensed transform text-center font-bold leading-none text-white not-italic",
            )}
            style={{
              fontSize,
            }}
          >
            LET&apos;S WORK
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
