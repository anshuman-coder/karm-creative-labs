import React from 'react'

const Hero = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center text-brand-text p-20 my-10 gap-2 text-nowrap'>
      <div>
        <p className='font-rebond font-semibold text-8xl'>Crafting stories</p>
      </div>
      <div>
        <p className='font-rebond font-semibold text-8xl'>that <span className='font-times font-bold italic'>inspire,</span> designs</p>
      </div>
      <div>
        <p className='font-rebond font-semibold text-8xl'>that <span className='font-times font-bold italic'>engage.</span></p>
      </div>
    </section>
  )
}

export default Hero