import React, { type FC } from "react";
import clsx from "clsx";
import ServiceCard from "./ServiceCard";
import { ServicesListing } from "~/constants/Services";

interface ServicesProps {
  className?: string;
}

const Services: FC<ServicesProps> = ({ className = "" }) => {
  return (
    <section
      className={clsx(
        "laptop:px-16 w-full bg-[--color-bg-neutral-white] px-4 py-8 md:px-8 lg:px-12",
        className,
      )}
    >
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
