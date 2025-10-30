import clsx from 'clsx';
import React, { type FC } from 'react'
import useBreakpoint from '~/hooks/useBreakpoint';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
  className?: string;
  source: string;
}

const Card: FC<ServiceCardProps> = ({ number, title, description, features, className = '', source }) => {
  const breakpoint = useBreakpoint()
  return (
    <article className={clsx(
      'w-full flex flex-col justify-start items-center',
      'border-t border-solid border-brand-text',
      'pt-4 md:pt-6 lg:pt-8 gap-3',
      'font-rebond text-brand-text',
      className,
    )}>
      {/* serial number */}
      <div className='w-full flex justify-start items-center'>
        <p className='font-mono font-medium text-xl xl:text-3xl'>{number}</p>
      </div>
      <div className='w-full flex justify-between items-center lg:items-start gap-3'>
        {/* title and description */}
        <div className='w-full flex flex-col justify-start items-start gap-3 lg:gap-10 laptop:gap-20'>
          <h3 className='text-3xl xl:text-7xl font-semibold leading-[1.1]'>{title}</h3>
          {breakpoint.isAndBelow('sm', (
            <div className='relative aspect-square w-full overflow-hidden rounded-3xl bg-gray-200'>
              <video
                src={source}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className='w-full h-full object-cover'
              />
            </div>
          ))}
          <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-start gap-3'>
            {/* description */}
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-start gap-3 lg:gap-20'>
              <p className='text-left font-medium text-xl md:text-sm xl:text-lg laptop:text-2xl leading-[1.5] text-wrap md:max-w-[280px] lg:max-w-[320px]'>
                {description}
              </p>
              <ul className='space-y-2 font-semibold'>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="font-rebond flex items-start text-sm md:text-xs xl:text-lg laptop:text-xl text-brand-text"
                  >
                    <span className="mr-1 md:mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {breakpoint.current === 'md' && (
              <div className='relative w-[132px] h-[132px] flex-shrink-0 overflow-hidden rounded-3xl bg-gray-200'>
                <video
                  src={source}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className='w-full h-full object-cover'
                />
              </div>
            )}
          </div>
        </div>
        {/* video for desktop */}
        {breakpoint.isAndAbove('lg', (
          <div className='relative aspect-square w-[400px] laptop:w-[488px] overflow-hidden rounded-3xl bg-gray-200'>
            <video
              src={source}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </article>
  )
}

export default Card