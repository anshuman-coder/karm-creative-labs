import React, { useState } from "react";
import { useForm, Controller, type Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import Hero from "~/components/contact-us/Hero";
import Footer from "~/components/global/Footer";
import PageHelmet from "~/components/global/PageHelmet";
import Header from "~/components/global/Header";
import { FollowUpLinks } from "~/constants/followUps";
import {
  contactFormSchema,
  type ContactFormData,
} from "~/lib/contactFormSchema";

// --- HELPER COMPONENTS ---

// A simple button component for reuse
const Button = ({
  label,
  className,
  isLoading = false,
  type = "button",
}: {
  label: string;
  className?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}) => (
  <button
    type={type}
    disabled={isLoading}
    className={`rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 ease-in-out hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 ${className ?? ""}`}
  >
    {isLoading ? (
      <span className="flex items-center justify-center gap-2">
        <svg
          className="h-5 w-5 animate-spin text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Sending...
      </span>
    ) : (
      label
    )}
  </button>
);

// Input field component for the form
const FormInput = ({
  label,
  placeholder,
  type = "text",
  fullWidth = false,
  isTextArea = false,
  control,
  name,
  error,
}: {
  label: string;
  placeholder: string;
  type?: string;
  fullWidth?: boolean;
  isTextArea?: boolean;
  control: Control<ContactFormData>;
  name: keyof ContactFormData;
  error?: string;
}) => {
  const commonClasses = `bg-black border-b ${
    error ? "border-red-500" : "border-gray-500"
  } focus:border-white text-white w-full py-3 outline-none transition-colors duration-300`;

  return (
    <div className={fullWidth ? "col-span-2" : ""}>
      <label className="text-sm text-gray-400">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name: fieldName } }) => (
          isTextArea ? (
            <textarea
              name={fieldName}
              value={value ?? ""}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              className={`${commonClasses} h-24 resize-none`}
            />
          ) : (
            <input
              name={fieldName}
              value={value ?? ""}
              onChange={onChange}
              onBlur={onBlur}
              type={type}
              placeholder={placeholder}
              className={commonClasses}
            />
          )
        )}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// --- SECTION COMPONENTS ---

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json() as { success: boolean; message: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you soon.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      reset();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send message. Please try again or contact us directly.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-16 bg-black p-5 text-white sm:mt-32 md:mt-16 md:px-6 md:py-32 lg:py-20">
      <div className="container mx-auto md:p-10">
        <div className="grid grid-cols-12 gap-1 md:gap-8 lg:gap-4">
          <div className="col-span-12 lg:col-span-2">
            <p className="not-italic font-mono text-[15px] font-semibold leading-normal text-white">
              Contact
            </p>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h2 className="not-italic font-mono text-[30px] font-semibold leading-normal text-white md:text-[38px] md:leading-[80px] lg:text-[112px] lg:leading-[112px]">
              Let&apos;s drop us a line and get the project started.
            </h2>
          </div>
        </div>

        <div className="mt-[37px] grid grid-cols-1 gap-16 md:mt-[114px] lg:grid-cols-3">
          {/* Left Side: Info */}
          <div className="space-y-10 lg:col-span-1">
            <div>
              <h3 className="font-mono text-[20px] leading-normal font-semibold text-white not-italic">
                Get in touch
              </h3>
              <p className="font-mono text-[30px] leading-normal font-semibold text-white not-italic">
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
              <h3 className="font-mono text-[20px] leading-normal font-semibold text-white not-italic md:text-[18px] lg:text-[20px]">
                Follow
              </h3>
              <ul className="space-y-1">
                {Object.entries(FollowUpLinks).filter(([_, value]) => value.url).map(([_, value]) => (
                  <li key={value.displayName}>
                    <a
                      href={value.url}
                      className="font-mono text-[20px] leading-normal font-semibold text-white not-italic"
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
            <form
              className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormInput
                label=""
                placeholder="Name"
                control={control}
                name="name"
                error={errors.name?.message}
              />
              <FormInput
                label=""
                placeholder="Email"
                type="email"
                control={control}
                name="email"
                error={errors.email?.message}
              />
              <FormInput
                label=""
                placeholder="Phone"
                control={control}
                name="phone"
                error={errors.phone?.message}
              />
              <FormInput
                label=""
                placeholder="Company"
                control={control}
                name="company"
                error={errors.company?.message}
              />
              <FormInput
                label=""
                placeholder="Subject"
                fullWidth
                control={control}
                name="subject"
                error={errors.subject?.message}
              />
              <FormInput
                label=""
                placeholder="Add a note"
                isTextArea
                fullWidth
                control={control}
                name="note"
                error={errors.note?.message}
              />
              <div className="col-span-2 mt-4">
                <Button
                  label="Send Message"
                  type="submit"
                  isLoading={isSubmitting}
                />
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
      <ToastContainer theme="dark" />
      <main className="bg-black">
        <Header />
        <Hero />
        <ContactForm />
        <Footer forPage="contact" />
      </main>
    </>
  );
}
