import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "../global/Button";
import { useRouter } from "next/router";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Can I upgrade myself or do I have to upgrade my entire Workspace?",
    answer:
      "To upgrade Clinttap, you'll need to upgrade your entire Workspace, which means, upgrading the entire Workspace.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal and wire transfers for enterprise clients.",
  },
  {
    id: 3,
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee for all our services. If you're not satisfied with our work, you can request a full refund within 30 days of your purchase.",
  },
  {
    id: 4,
    question: "How am I billed when I add paid users to a Workspace?",
    answer:
      "When you add paid users to your Workspace, you'll be charged a prorated amount for the remainder of your billing cycle. The full amount will be charged on your next billing date.",
  },
  {
    id: 5,
    question: "What if I have multiple Workspaces?",
    answer:
      "You can manage multiple Workspaces under a single account. Each Workspace is billed separately, and you can upgrade or downgrade each one independently.",
  },
  {
    id: 6,
    question: "What happens if I cancel?",
    answer:
      "If you cancel your subscription, you'll have access to all features until the end of your current billing period. After that, your account will be downgraded to the free plan.",
  },
];

const Faq = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = () => {
    void router.push("/contact-us");
  };

  return (
    <div className="relative w-full bg-white py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6 xs:px-8 sm:px-12 md:px-16 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-12 xs:mb-16 sm:mb-20 md:mb-24">
          <h2 className="font-rebond text-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 xs:mb-6 md:mb-8">
            Frequently asked questions
          </h2>
          <p className="font-rebond text-black text-sm xs:text-base sm:text-lg md:text-xl mb-8 xs:mb-10 md:mb-12 max-w-3xl mx-auto">
            Find answers to your questions right here, and don&apos;t hesitate to{" "}
            <button
              onClick={handleContactClick}
              className="underline font-semibold hover:text-gray-700 transition-colors"
            >
              Contact us
            </button>{" "}
            if you couldn&apos;t find what you&apos;re looking for.
          </p>

          {/* Contact Us Button */}
          <div className="flex justify-center">
            <Button
              label="Contact us"
              onClick={handleContactClick}
              className="bg-black! text-white! border-black! hover:bg-gray-800! transition-colors"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="border-b-2 border-gray-200 pb-4 xs:pb-5 sm:pb-6 md:pb-7"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-start justify-between gap-4 md:gap-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-rebond text-black text-base xs:text-lg sm:text-xl md:text-2xl font-semibold leading-tight flex-1">
                  {faq.question}
                </h3>
                <span className="shrink-0 mt-1">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-black transition-transform" />
                  ) : (
                    <ChevronDown className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-black transition-transform" />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 mt-3 xs:mt-4 md:mt-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-rebond text-gray-600 text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 xs:mt-16 sm:mt-20 pt-8 xs:pt-10 sm:pt-12 border-t-2 border-bg-header-sm">
          <div className="text-center">
            <p className="font-rebond text-black text-base xs:text-lg sm:text-xl mb-6 xs:mb-8">
              Still have questions? We&apos;re here to help!
            </p>
            <Button
              label="Get in Touch"
              onClick={handleContactClick}
              className="bg-bg-header-sm! text-black! border-transparent! hover:bg-[#24e699]! transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
