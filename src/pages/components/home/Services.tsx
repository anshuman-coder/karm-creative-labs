import React, { type FC } from 'react'
import type { ServiceListings } from '~/constants/services/listing'

const Services = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center p-10'>
      <div className='w-full flex justify-evenly items-start my-36 font-rebond font-semibold'>
        <div className='flex flex-col justify-center items-start gap-2 text-8xl text-brand-text'>
          <p>Standout Services</p>
          <p>that shape ideas</p>
          <p>into impacts.</p>
        </div>
        <div className='flex flex-col justify-center items-start gap-2 text-2xl text-brand-text mt-6'>
          <p>From design to launch,</p>
          <p>we craft solutions that</p>
          <p>drive growth.</p>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-4 text-brand-text font-rebond'>
        {/* show listing here */}
      </div>
    </section>
  )
}

export default Services

interface ServiceCardProps {
  data: typeof ServiceListings[number]
  index: number
}

const ServiceCard: FC<ServiceCardProps> = ({ index, data: service }) => {
  return (
    <div className='w-full flex justify-between items-center p-4'>
      {/* left section */}
      <div className='flex flex-col justify-start items-start gap-4'>
        <p className='font-mono font-medium text-3xl'>{index}</p>
        <p className='font-semibold text-7xl'>{service.heading}</p>
        <div className='w-full flex justify-between items-center'>
          <p className='font-medium text-2xl'>{service.description}</p>
        </div>
      </div>
    </div>
  )
}