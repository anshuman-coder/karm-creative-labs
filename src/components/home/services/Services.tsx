import React, { type FC } from 'react';
import clsx from 'clsx';
import ServiceCard from './ServiceCard';
import { ServicesListing } from '~/constants/Services'

interface ServicesProps {
  className?: string;
}

const Services: FC<ServicesProps> = ({ className = '' }) => {
  return (
    <section className={clsx('bg-[--color-bg-neutral-white] w-full py-8 px-4 md:px-8 lg:px-12 laptop:px-16', className)}>
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        {ServicesListing.map((service) => (
          <ServiceCard
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;