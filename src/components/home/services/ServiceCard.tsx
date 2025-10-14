import React, { type FC } from "react";
import Image from "next/image";
import clsx from "clsx";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  number,
  title,
  description,
  features,
  className = "",
}) => {
  return (
    <article
      className={clsx(
        "w-full border-b border-[--color-brand-text] pb-8 md:pb-12 lg:pb-16",
        className,
      )}
    >
      {/* Mobile Layout (368px) - Stacked */}
      <div className="block md:hidden">
        {/* Number */}
        <div className="font-rebond mb-3 text-[18px] text-[--color-brand-text]">
          {number}
        </div>

        {/* Title */}
        <h3 className="font-rebond mb-6 text-[32px] leading-[1.1] text-[--color-brand-text]">
          {title}
        </h3>

        {/* Image */}
        <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-3xl bg-gray-200">
          <Image
            src="/service-image.png"
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <p className="font-rebond mb-6 text-[16px] leading-[1.5] text-[--color-brand-text]">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="font-rebond flex items-start text-[14px] text-[--color-brand-text]"
            >
              <span className="mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tablet Layout (768px) - Three columns */}
      <div className="hidden grid-cols-12 gap-6 md:grid lg:hidden">
        {/* Left Column - Number + Title + Description */}
        <div className="col-span-5">
          <div className="font-rebond mb-3 text-[18px] text-[--color-brand-text]">
            {number}
          </div>
          <h3 className="font-rebond mb-6 text-[40px] leading-[1.1] text-[--color-brand-text]">
            {title}
          </h3>
          <p className="font-rebond text-[16px] leading-[1.5] text-[--color-brand-text]">
            {description}
          </p>
        </div>

        {/* Middle Column - Features */}
        <div className="col-span-4 flex items-center pb-2">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="font-rebond flex items-start text-[14px] text-[--color-brand-text]"
              >
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Image */}
        <div className="col-span-3 flex items-end">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gray-200">
            <Image
              src="/service-image.png"
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Desktop 1440px Layout */}
      <div className="laptop:hidden hidden grid-cols-12 gap-8 lg:grid">
        {/* Number + Title + Description */}
        <div className="col-span-4">
          <div className="font-rebond mb-3 text-[18px] text-[--color-brand-text]">
            {number}
          </div>
          <h3 className="font-rebond mb-6 text-[48px] leading-[1.1] text-[--color-brand-text]">
            {title}
          </h3>
          <p className="font-rebond text-[16px] leading-[1.5] text-[--color-brand-text]">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="col-span-3 flex items-center pb-2">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="font-rebond flex items-start text-[14px] text-[--color-brand-text]"
              >
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="col-span-5 flex items-end justify-end">
          <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-3xl bg-gray-200">
            <Image
              src="/service-image.png"
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Large Desktop 1573px+ Layout */}
      <div className="laptop:grid hidden grid-cols-12 gap-10">
        {/* Number + Title + Description */}
        <div className="col-span-4">
          <div className="font-rebond mb-3 text-[18px] text-[--color-brand-text]">
            {number}
          </div>
          <h3 className="font-rebond mb-6 text-[52px] leading-[1.1] text-[--color-brand-text]">
            {title}
          </h3>
          <p className="font-rebond text-[18px] leading-[1.5] text-[--color-brand-text]">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="col-span-3 flex items-center pb-2">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="font-rebond flex items-start text-[15px] text-[--color-brand-text]"
              >
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="col-span-5 flex items-end justify-end">
          <div className="relative aspect-square w-full max-w-[450px] overflow-hidden rounded-3xl bg-gray-200">
            <Image
              src="/service-image.png"
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
