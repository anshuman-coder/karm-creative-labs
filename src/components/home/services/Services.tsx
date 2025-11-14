import React, { type FC } from "react";
import clsx from "clsx";
import { ServicesListing } from "~/constants/Services";
import Card from "./Card";

interface ServicesProps {
  className?: string;
}

const Services: FC<ServicesProps> = ({ className = "" }) => {
  return (
    <section
      className={clsx(
        "laptop:px-16 w-full max-w-[1500px] px-4 py-8 md:px-8 lg:px-12",
        className,
      )}
    >
      <div className="flex flex-col">
        {ServicesListing.map((service, index) => (
          <Card
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
            features={service.features}
            source={service.source}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
