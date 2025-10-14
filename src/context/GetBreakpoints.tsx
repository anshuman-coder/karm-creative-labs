import { type FC } from "react";

export const GetBreakpoints: FC = () => {
  return (
    <>
      <div
        id="breakpoint-xs"
        className="xs:block laptop:hidden hidden h-0 w-0 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-sm"
        className="xs:hidden laptop:hidden hidden h-0 w-0 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-md"
        className="xs:hidden laptop:hidden hidden h-0 w-0 sm:hidden md:block lg:hidden xl:hidden 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-lg"
        className="xs:hidden laptop:hidden hidden h-0 w-0 sm:hidden md:hidden lg:block xl:hidden 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-xl"
        className="xs:hidden laptop:hidden hidden h-0 w-0 sm:hidden md:hidden lg:hidden xl:block 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-laptop"
        className="xs:hidden laptop:block hidden h-0 w-0 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-2xl"
        className="xs:hidden laptop:hidden hidden h-0 w-0 sm:hidden md:hidden lg:hidden xl:hidden 2xl:block"
        aria-hidden
      />
    </>
  );
};

export default GetBreakpoints;
