import React, { useEffect, useRef } from 'react';

const InfiniteScrollBanner = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<Node | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  const services = [
    'UX Design',
    'Digital Marketing',
    'Web Development',
    'Branding',
    'SEO',
    'Content Strategy',
    'Social Media'
  ];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) return;

    // Clone content for seamless loop and store reference
    const clone = content.cloneNode(true);
    cloneRef.current = clone;
    wrapper.appendChild(clone);

    // Measure content width after clone is appended
    const contentWidth = content.offsetWidth;

    // Guard against zero width
    if (contentWidth === 0) {
      console.warn('InfiniteScrollBanner: Content width is 0, animation may not work correctly');
      return;
    }

    const animate = () => {
      positionRef.current -= 1;

      // Reset position when first set has scrolled completely
      if (Math.abs(positionRef.current) >= contentWidth) {
        positionRef.current = 0;
      }

      // Apply transform only if wrapper still exists
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      // Continue animation and store the ID
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationIdRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      // Cancel animation frame
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }

      // Remove clone safely
      if (cloneRef.current && wrapper) {
        try {
          if (wrapper.contains(cloneRef.current)) {
            wrapper.removeChild(cloneRef.current);
          }
        } catch (error) {
          console.error('Error removing clone:', error);
        }
        cloneRef.current = null;
      }

      // Reset transform using the captured wrapper reference
      if (wrapper) {
        wrapper.style.transform = '';
      }

      // Reset position
      positionRef.current = 0;
    };
  }, []);

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
          className="flex gap-4 md:gap-2 flex-shrink-0"
        >
          {services.map((service, index) => (
            <span
              key={index}
              className="text-text-banner font-rebond text-xl md:text-sm laptop:text-3xl font-normal whitespace-nowrap px-2"
            >
              {service} •
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollBanner;