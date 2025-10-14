import React from 'react';
import Hero from '~/components/contact-us/Hero';
import Banner from '~/components/contact-us/Banner';
import Footer from '~/components/contact-us/Footer';

// --- HELPER COMPONENTS ---

// A simple button component for reuse
const Button = ({ label, className }: { label: string, className?: string }) => (
    <button
        className={`bg-white text-black font-semibold py-4 px-8 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 ${className}`}
    >
        {label}
    </button>
);

// Input field component for the form
const FormInput = ({
    label,
    placeholder,
    type = 'text',
    fullWidth = false,
    isTextArea = false,
}: {
    label: string;
    placeholder: string;
    type?: string;
    fullWidth?: boolean;
    isTextArea?: boolean;
}) => {
    const commonClasses = "bg-black border-b border-gray-500 focus:border-white text-white w-full py-3 outline-none transition-colors duration-300";
    return (
        <div className={fullWidth ? 'col-span-2' : ''}>
            <label className="text-gray-400 text-sm">{label}</label>
            {isTextArea ? (
                <textarea placeholder={placeholder} className={`${commonClasses} resize-none h-24`}></textarea>
            ) : (
                <input type={type} placeholder={placeholder} className={commonClasses} />
            )}
        </div>
    );
};

// --- SECTION COMPONENTS ---


const ContactForm = () => {
    return (
        <section className="bg-black text-white lg:py-20 md:py-32 p-5 md:px-6">
            <div className="container mx-auto md:p-10">
                <div className="grid grid-cols-12 lg:gap-4 md:gap-8 gap-1">
                    <div className="lg:col-span-2 col-span-12">
                        <p className="text-white font-rebond text-[15px] not-italic font-semibold leading-normal">Contact</p>
                    </div>
                    <div className="lg:col-span-10 col-span-12">
                        <h2 className="text-white font-rebond text-[30px] lg:text-[112px] md:text-[38px] not-italic font-semibold leading-normal lg:leading-[112px] md:leading-[80px]">
                            Let&apos;s drop us a line and get the project started.
                        </h2>
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-[37px] md:mt-[114px]">
                    {/* Left Side: Info */}
                    <div className="lg:col-span-1 space-y-10">
                        <div>
                            <h3 className="text-white font-rebond text-[20px] not-italic font-semibold leading-normal">Get in touch</h3>
                            <p className="text-white font-rebond text-[30px] not-italic font-semibold leading-normal">We&apos;re excited to hear from you and let&apos;s start something amazing together.</p>
                            <a href="mailto:rishav@karmlabs.com" className="text-white font-semibold text-lg mt-2 inline-block hover:text-orange-500 transition-colors">
                                rishav@karmlabs.com
                            </a>
                        </div>
                        <div>
                            <h3 className="text-white font-rebond text-[20px] lg:text-[20px] md:text-[18px] not-italic font-semibold leading-normal">Follow</h3>
                            <ul className="space-y-1">
                                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'Dribbble', 'Behance'].map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-white font-rebond text-[20px] not-italic font-semibold leading-normal">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Right Side: Form */}
                    <div className="lg:col-span-2">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <FormInput label="" placeholder="Name" />
                            <FormInput label="" placeholder="Email" type="email" />
                            <FormInput label="" placeholder="Phone" />
                            <FormInput label="" placeholder="Company" />
                            <FormInput label="" placeholder="Subject" fullWidth />
                            <FormInput label="" placeholder="Add a note" isTextArea fullWidth />
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
            <main className="bg-black">
                <Hero />
                <Banner />
                <ContactForm />
                <Footer />
            </main>
        </>
    );
}
