import React, { useEffect, useState, type FC, Fragment } from 'react'
import Logo from './Logo'
import Button from '~/components/global/Button'
import { Plus } from 'lucide-react' 
import clsx from 'clsx'
import { NavMenuItems } from '~/constants/NavItems'
import useBreakpoint from '~/hooks/useBreakpoint'
import { Transition } from '@headlessui/react'

const Header = () => {

  const breakpoint = useBreakpoint()
  const [isMenuOpen, setisMenuOpen] = useState(false)

  useEffect(() => {
    // closing the menu dropdown if breakpoint is desktop
    if(breakpoint.isAndAbove('sm', true)) setisMenuOpen(false)
  }, [breakpoint])

  return (
    <header className='fixed top-0 left-0 right-0 w-full bg-white z-50 p-2 sm:p-8 md:pt-8 md:pb-4 xl:pt-12'>
      <div className={clsx(
        'relative w-full flex flex-col justify-start items-start transition-all duration-200 ease-in-out',
        isMenuOpen
          ? 'bg-gradient-to-br from-emerald-400 to-green-300 rounded-2xl'
          : 'bg-transparent rounded-2xl'
      )}>
        {
          breakpoint.isAndBelow(
            'sm',
            <MobileHeader isMenuOpen={isMenuOpen} handleMenuOpen={setisMenuOpen} />,
            <DesktopHeader />
          )
        }
      </div>
    </header>
  )
}

export default Header


interface MobileHeaderProps {
  isMenuOpen: boolean
  handleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileHeader: FC<MobileHeaderProps> = ({ isMenuOpen, handleMenuOpen }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center px-1.5 py-3 md:px-6 md:py-4">
        <Logo />
        <div className='flex gap-2 justify-center items-center'>
          <Button label="LET'S TALK" />
          <Button
            iconBtn
            icon={<Plus className={clsx('transform transition-all ease-in-out duration-200 w-2 h-2', isMenuOpen ? 'rotate-45' : 'rotate-none')} />}
            onClick={() => handleMenuOpen(prev => !prev)}
          />
        </div>
      </div>
      {/* dropdownMenu with transition */}
      <div
        className={
          clsx(
            'overflow-hidden transition-all duration-300 ease-in-out w-full',
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )
        }
      >
        <nav className='px-3 pb-4 gap-y-3.5'>
          {NavMenuItems.map((item, index) => (
            <div
              key={item.key}
              className="transform transition-all duration-300 ease-in-out"
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
              }}
            >
              <p className='font-rebond text-xl font-semibold leading-9'>{item.label}</p>
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}


const DesktopHeader = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
  }, [])
  return (
    <Transition
      as="div"
      show={show}
      enter='transition-all duration-600 ease-out'
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      className='w-full flex justify-start items-center'
    >
      <Logo />
      <div className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/5 max-w-3xl rounded-full bg-brand-text text-white font-rebond text-lg font-semibold'>
        <nav className='w-full flex justify-between items-center px-7 py-4 md: gap-x-6 lg:gap-x-4 laptop:gap-x-10 shadow-2xl rounded-full'>
          {NavMenuItems.map((item) => (
            <p
              key={item.key}
              className='cursor-pointer'
            >
              {item.label}
            </p>
          ))}
        </nav>
      </div>
    </Transition>
  )
}