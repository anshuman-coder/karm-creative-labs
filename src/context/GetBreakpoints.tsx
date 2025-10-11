import { type FC } from 'react'

export const GetBreakpoints: FC = () => {
  return (
    <>
      <div
        id="breakpoint-xs"
        className="hidden h-0 w-0 xs:block sm:hidden md:hidden lg:hidden xl:hidden laptop:hidden 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-sm"
        className="hidden h-0 w-0 xs:hidden sm:block md:hidden lg:hidden xl:hidden laptop:hidden 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-md"
        className="hidden h-0 w-0 xs:hidden sm:hidden md:block lg:hidden xl:hidden laptop:hidden 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-lg"
        className="hidden h-0 w-0 xs:hidden sm:hidden md:hidden lg:block xl:hidden laptop:hidden 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-xl"
        className="hidden h-0 w-0 xs:hidden sm:hidden md:hidden lg:hidden xl:block laptop:hidden 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-laptop"
        className="hidden h-0 w-0 xs:hidden sm:hidden md:hidden lg:hidden xl:hidden laptop:block 2xl:hidden"
        aria-hidden
      />
      <div
        id="breakpoint-2xl"
        className="hidden h-0 w-0 xs:hidden sm:hidden md:hidden lg:hidden xl:hidden laptop:hidden 2xl:block"
        aria-hidden
      />
    </>
  )
}

export default GetBreakpoints
