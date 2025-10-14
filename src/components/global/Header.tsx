import React, { useEffect, useState, type FC } from "react";
import Logo from "./Logo";
import Button from "~/components/global/Button";
import { Plus } from "lucide-react";
import clsx from "clsx";
import { NavMenuItems } from "~/constants/NavItems";
import useBreakpoint from "~/hooks/useBreakpoint";
import { Transition } from "@headlessui/react";


const Header = () => {
  const breakpoint = useBreakpoint();
  const [isMenuOpen, setisMenuOpen] = useState(false);

  useEffect(() => {
    // closing the menu dropdown if breakpoint is desktop
    if (breakpoint.isAndAbove("sm", true)) setisMenuOpen(false);
  }, [breakpoint]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full bg-white p-2 sm:p-8 md:pt-8 md:pb-4 xl:pt-12">
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
          />,
          <DesktopHeader />,
        )}
      </div>
    </header>
  );
};

export default Header;

interface MobileHeaderProps {
  isMenuOpen: boolean;
  handleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileHeader: FC<MobileHeaderProps> = ({
  isMenuOpen,
  handleMenuOpen,
}) => {
  return (
    <>
      <div className="flex w-full items-center justify-between px-1.5 py-3 md:px-6 md:py-4">
        <Logo />
        <div className="flex items-center justify-center gap-2">
          <Button label="LET'S TALK" />
          <Button
            iconBtn
            icon={
              <Plus
                className={clsx(
                  "h-2 w-2 transform transition-all duration-200 ease-in-out",
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
            <a key={item.key} href={item.url} className="no-underline">
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

const DesktopHeader = () => {
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
      <Logo />
      <div className="bg-brand-text font-rebond absolute top-0 left-1/2 max-w-3xl -translate-x-1/2 -translate-y-1/5 rounded-full text-lg font-semibold text-white">
        <nav className="md: laptop:gap-x-10 flex w-full items-center justify-between gap-x-6 rounded-full px-7 py-4 shadow-2xl lg:gap-x-4">
          {NavMenuItems.map((item) => (
            <a key={item.key} href={item.url} className="no-underline">
              <p key={item.key} className="cursor-pointer">
                {item.label}
              </p>
            </a>
          ))}
        </nav>
      </div>
    </Transition>
  );
};
