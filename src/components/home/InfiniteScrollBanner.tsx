import React, { useEffect, useRef, useState } from 'react';

const InfiniteScrollBanner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    // Clone content for seamless loop
    const clone = content.cloneNode(true);
    wrapper.appendChild(clone);

    let animationId: number;
    let position = 0;
    const contentWidth = content.offsetWidth;

    const animate = () => {
      if (!isHovered) {
        position -= 1;
        
        // Reset position when first set has scrolled completely
        if (Math.abs(position) >= contentWidth) {
          position = 0;
        }
        
        if (wrapper) {
          wrapper.style.transform = `translateX(${position}px)`;
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      // Clean up clone
      if (wrapper.children.length > 1) {
        if (wrapper.lastChild) {
          wrapper.removeChild(wrapper.lastChild);
        }
      }
    };
  }, [isHovered]);

  return (
    <div 
      className="w-full overflow-hidden"
      style={{ maxWidth: '100vw' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
              className="text-text-banner font-rebond text-xl md:text-sm laptop:text-3xl font-semibold whitespace-nowrap px-2"
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