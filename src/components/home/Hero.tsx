import { Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'

const Hero = () => {
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
      <div className='flex-1 flex flex-col justify-between items-center px-10 text-brand-text font-rebond text-3xl font-semibold text-center'>
        <p className='px-3'>Crafting stories that <span className='font-times italic font-bold'>inspire,</span></p>
        {/* here will be the image for mobile view */}
        <div className='relative w-full flex-1 flex justify-center items-center p-4 m-1'>
          <Image
            src="/service-image.png"
            alt='hero-images'
            fill
            className='object-fill shadow-lg rounded-2xl'
          />
        </div>
        <p className='px-[68px]'>designs that <span className='font-times italic font-bold'>engage.</span></p>
      </div>
    </Transition>
  )
}

export default Hero