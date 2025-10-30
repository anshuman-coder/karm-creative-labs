import React, { useEffect, useState, type FC } from "react";
import Logo from "./Logo";
import Button from "~/components/global/Button";
import { Plus } from "lucide-react";
import clsx from "clsx";
import { NavMenuItems } from "~/constants/NavItems";
import useBreakpoint from "~/hooks/useBreakpoint";
import { Transition } from "@headlessui/react";

const SCROLL_DOWN_DELAY = 200; // Hide header after 900ms of scrolling down
const SCROLL_UP_DELAY = 200; // Show header after 500ms of scrolling up


const Header = () => {
  const breakpoint = useBreakpoint();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = React.useRef(0);
  const isProgrammaticScroll = React.useRef(false);
  const scrollTimer = React.useRef<NodeJS.Timeout | null>(null);
  const currentScrollDirection = React.useRef<'up' | 'down' | null>(null);

  useEffect(() => {
    // closing the menu dropdown if breakpoint is desktop
    if (breakpoint.isAndAbove("sm", true)) setisMenuOpen(false);
  }, [breakpoint]);

  useEffect(() => {

    const handleScroll = () => {
      // Don't hide header during programmatic scroll (nav clicks)
      if (isProgrammaticScroll.current) {
        return;
      }

      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      if (currentScrollY < 10) {
        // Always show header at the top of the page
        setIsHeaderVisible(true);
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current);
          scrollTimer.current = null;
        }
        currentScrollDirection.current = null;
        lastScrollY.current = currentScrollY;
        return;
      }

      // Determine scroll direction
      let direction: 'up' | 'down' | null = null;
      if (scrollDifference > 5) {
        direction = 'down';
      } else if (scrollDifference < -5) {
        direction = 'up';
      }

      // If direction changed, clear existing timer
      if (direction && direction !== currentScrollDirection.current) {
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current);
          scrollTimer.current = null;
        }
        currentScrollDirection.current = direction;

        // Start new timer based on direction
        if (direction === 'down') {
          scrollTimer.current = setTimeout(() => {
            setIsHeaderVisible(false);
            setisMenuOpen(false);
          }, SCROLL_DOWN_DELAY);
        } else if (direction === 'up') {
          scrollTimer.current = setTimeout(() => {
            setIsHeaderVisible(true);
          }, SCROLL_UP_DELAY);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
        scrollTimer.current = null;
      }
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    // Only handle hash links for smooth scrolling with offset
    if (url.startsWith("#")) {
      e.preventDefault();
      const targetId = url.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Set flag to prevent header from hiding during programmatic scroll
        isProgrammaticScroll.current = true;

        // Calculate offset based on header height
        const headerHeight = breakpoint.isAndBelow("sm") ? 80 : 120;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Close mobile menu after clicking
        setisMenuOpen(false);

        // Reset flag after scroll completes (smooth scroll takes ~500-1000ms)
        setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 1000);
      }
    }
  };

  return (
    <header
      className={clsx(
        "fixed top-0 right-0 left-0 z-50 w-full p-2 sm:p-8 md:pt-8 md:pb-4 transition-transform duration-500 ease-in-out bg-white",
        isMenuOpen ? "bg-white/100 backdrop-blur-lg" : "bg-bg-neutral-white/90 backdrop-blur-md",
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div
        className={clsx(
          "relative flex w-full flex-col items-start justify-start transition-all duration-200 ease-in-out",
          isMenuOpen
            ? "rounded-2xl bg-gradient-to-br from-emerald-400 to-green-300"
            : "rounded-2xl bg-transparent",
        )}
      >
        {breakpoint.isAndBelow(
          "sm",
          <MobileHeader
            isMenuOpen={isMenuOpen}
            handleMenuOpen={setisMenuOpen}
            handleNavClick={handleNavClick}
          />,
          <DesktopHeader handleNavClick={handleNavClick} />,
        )}
      </div>
    </header>
  );
};

export default Header;

interface MobileHeaderProps {
  isMenuOpen: boolean;
  handleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
}

const MobileHeader: FC<MobileHeaderProps> = ({
  isMenuOpen,
  handleMenuOpen,
  handleNavClick,
}) => {
  return (
    <>
      <div className="flex w-full items-center justify-between px-1.5 py-3 md:px-6 md:py-4">
        <Logo className="w-20 h-9" />
        <div className="flex items-center justify-center gap-2">
          <Button label="LET'S TALK" className="sm:py-5" />
          <Button
            iconBtn
            icon={
              <Plus
                className={clsx(
                  "h-2 w-2 sm:h-3 sm:w-3 transform transition-all duration-200 ease-in-out",
                  isMenuOpen ? "rotate-45" : "rotate-none",
                )}
              />
            }
            onClick={() => handleMenuOpen((prev) => !prev)}
          />
        </div>
      </div>
      {/* dropdownMenu with transition */}
      <div
        className={clsx(
          "w-full overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="gap-y-3.5 px-3 pb-4">
          {NavMenuItems.map((item, index) => (
            <a
              key={item.key}
              href={item.url}
              className="no-underline"
              onClick={(e) => handleNavClick(e, item.url)}
            >
              <div
                className="transform transition-all duration-300 ease-in-out"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)",
                }}
              >
                <p className="font-rebond text-xl leading-9 font-semibold">
                  {item.label}
                </p>
              </div>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

interface DesktopHeaderProps {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
}

const DesktopHeader: FC<DesktopHeaderProps> = ({ handleNavClick }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Transition
      as="div"
      show={show}
      enter="transition-all duration-600 ease-out"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      className="flex w-full items-center justify-start"
    >
      <Logo className="w-16 h-8 xl:w-[157px] xl:h-[61px] 2xl:w-[225px] 2xl:h-[87px]" />
      <div className="bg-brand-text font-rebond absolute top-1/2 left-1/2 sm:-translate-x-2/5 md:-translate-x-1/2 max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full text-lg font-semibold text-white">
        <nav className="md: laptop:gap-x-10 flex w-full items-center justify-between gap-x-6 rounded-full px-7 py-4 lg:gap-x-4">
          {NavMenuItems.map((item) => (
            <a
              key={item.key}
              href={item.url}
              className="no-underline"
              onClick={(e) => handleNavClick(e, item.url)}
            >
              <p className="cursor-pointer">
                {item.label}
              </p>
            </a>
          ))}
        </nav>
      </div>
    </Transition>
  );
};
