import { Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import useBreakpoint from '~/hooks/useBreakpoint'
import Button from '../global/Button'

const Hero = () => {
  const breakpoint = useBreakpoint()
  const [transitionshow, setTransitionshow] = useState(false)
  useEffect(() => {
    setTransitionshow(true)
  }, [])

  return (
    <Transition
      as={Fragment}
      show={transitionshow}
      enter='transition-all duration-600 ease-out'
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
    >
      <div className='flex flex-1 flex-col justify-between md:justify-around items-center px-10 text-brand-text font-rebond text-3xl md:text-6xl laptop:text-8xl font-semibold text-center'>
        <div className='flex-1 w-full flex flex-col md:flex-none justify-between items-center'>
          <p className='px-3'>Crafting stories that <span className='font-times italic font-bold'>inspire,</span></p>
          {/* here will be the image for mobile view */}
          {breakpoint.isAndBelow('sm', (
            <div className='relative w-full flex-1 flex justify-center items-center p-4 sm:p-2 m-1'>
              <Image
                src="/service-image.png"
                alt='hero-images'
                fill
                className='object-fill shadow-lg rounded-2xl'
              />
            </div>
          ))}
          <p className='px-[68px]'>designs that <span className='font-times italic font-bold'>engage.</span></p>
        </div>
        {breakpoint.isAndAbove('md', <Button label="LET'S TALK" />)}
      </div>
    </Transition>
  )
}

export default Hero