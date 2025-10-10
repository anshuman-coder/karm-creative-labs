import React from 'react'

const Banner = () => {
  return (
    <section className='w-full flex flex-col justify-between items-center bg-bg-banner font-rebond font-semibold p-20 gap-y-36 text-black'>
      <div>
        <p className=' text-6xl text-wrap'>
          We are a creative-first agency helping brands design, build, and scale with purpose. Our team blends strategy, design, and technology to craft experiences that inspire and drive growth. Whether you need a single expert or a full team, we deliver flexible solutions tailored to your goals.
        </p>
      </div>
      <div>
        <p className='text-3xl text-text-banner'>UX Design • Digital Marketing • Web Development • Branding • SEO • Content Strategy • Social Media </p>
      </div>
    </section>
  )
}

export default Banner