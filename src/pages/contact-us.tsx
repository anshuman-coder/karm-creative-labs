import React from "react";
import Hero from "~/components/contact-us/Hero";
import Banner from "~/components/contact-us/Banner";
import Footer from "~/components/global/Footer";
import PageHelmet from "~/components/global/PageHelmet";
import Header from "~/components/global/Header";
import { FollowUpLinks } from "~/constants/followUps";

// --- HELPER COMPONENTS ---

// A simple button component for reuse
const Button = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => (
  <button
    className={`rounded-full bg-white px-8 py-4 font-semibold text-black transition-transform duration-300 ease-in-out hover:scale-105 ${className}`}
  >
    {label}
  </button>
);

// Input field component for the form
const FormInput = ({
  label,
  placeholder,
  type = "text",
  fullWidth = false,
  isTextArea = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  fullWidth?: boolean;
  isTextArea?: boolean;
}) => {
  const commonClasses =
    "bg-black border-b border-gray-500 focus:border-white text-white w-full py-3 outline-none transition-colors duration-300";
  return (
    <div className={fullWidth ? "col-span-2" : ""}>
      <label className="text-sm text-gray-400">{label}</label>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          className={`${commonClasses} h-24 resize-none`}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={commonClasses}
        />
      )}
    </div>
  );
};

// --- SECTION COMPONENTS ---

const ContactForm = () => {
  return (
    <section className="bg-black p-5 text-white md:px-6 md:py-32 lg:py-20">
      <div className="container mx-auto md:p-10">
        <div className="grid grid-cols-12 gap-1 md:gap-8 lg:gap-4">
          <div className="col-span-12 lg:col-span-2">
            <p className="font-rebond text-[15px] leading-normal font-semibold text-white not-italic">
              Contact
            </p>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h2 className="font-rebond text-[30px] leading-normal font-semibold text-white not-italic md:text-[38px] md:leading-[80px] lg:text-[112px] lg:leading-[112px]">
              Let&apos;s drop us a line and get the project started.
            </h2>
          </div>
        </div>

        <div className="mt-[37px] grid grid-cols-1 gap-16 md:mt-[114px] lg:grid-cols-3">
          {/* Left Side: Info */}
          <div className="space-y-10 lg:col-span-1">
            <div>
              <h3 className="font-rebond text-[20px] leading-normal font-semibold text-white not-italic">
                Get in touch
              </h3>
              <p className="font-rebond text-[30px] leading-normal font-semibold text-white not-italic">
                We&apos;re excited to hear from you and let&apos;s start
                something amazing together.
              </p>
              <a
                href="mailto:rishav@karmlabs.com"
                className="mt-2 inline-block text-lg font-semibold text-white transition-colors hover:text-orange-500"
              >
                rishav@karmlabs.com
              </a>
            </div>
            <div>
              <h3 className="font-rebond text-[20px] leading-normal font-semibold text-white not-italic md:text-[18px] lg:text-[20px]">
                Follow
              </h3>
              <ul className="space-y-1">
                {Object.entries(FollowUpLinks).filter(([_, value]) => value.url).map(([_, value]) => (
                  <li key={value.displayName}>
                    <a
                      href={value.url}
                      className="font-rebond text-[20px] leading-normal font-semibold text-white not-italic"
                      target="_blank"
                    >
                      {value.displayName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Side: Form */}
          <div className="lg:col-span-2">
            <form className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
              <FormInput label="" placeholder="Name" />
              <FormInput label="" placeholder="Email" type="email" />
              <FormInput label="" placeholder="Phone" />
              <FormInput label="" placeholder="Company" />
              <FormInput label="" placeholder="Subject" fullWidth />
              <FormInput
                label=""
                placeholder="Add a note"
                isTextArea
                fullWidth
              />
              <div className="col-span-2 mt-4">
                <Button label="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ContactUs() {
  return (
    <>
      <PageHelmet title="Let's talk" />
      <main className="bg-black">
        <Header />
        <Hero />
        <Banner />
        <ContactForm />
        <Footer forPage="contact" />
      </main>
    </>
  );
}
