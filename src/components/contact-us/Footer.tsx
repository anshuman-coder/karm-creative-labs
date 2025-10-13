

import React from 'react'
import Image from 'next/image'
import { useBreakpoint } from '~/hooks/useBreakpoint'

const Footer = () => {

    const breakpoint = useBreakpoint()

    const SocialIcon = ({ children }: { children: React.ReactNode }) => (
        <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md cursor-pointer hover:bg-white hover:text-black transition-colors">
            {children}
        </div>
    );
    return (
        <footer className="bg-[#2AFFAA] text-black md:py-12 p-4 md:px-6 ">
            <div className="container mx-auto lg:w-[1573px] lg:h-[535px] md:w-[100%] md:h-[941px] md:px-10">
                {breakpoint.current === 'md' && (
                    <div>
                        <div className='text-black font-rebond text-[40px] not-italic font-semibold leading-normal'>
                            Each Partnership Inspires Us From Bold Startups To Global Enterprises.
                        </div>
                        <div className='text-black font-rebond text-[40px] not-italic font-semibold leading-normal py-28'>
                            We Deliver. Period.
                        </div>
                    </div>
                )}
                <div className="grid md:grid-cols lg:grid-cols-3 gap-10 lg:gap-4 md:gap-8">

                    <div className="text-left md:text-left ">
                        <p className="text-black font-rebond text-[18px] not-italic font-light leading-normal">CONTACT US</p>
                        <a href="mailto:rishav@karmlabs.com" className="hover:underline text-black font-rebond text-[18px] not-italic font-semibold leading-normal underline">rishav@karmlabs.com</a>
                    </div>
                    <div className="text-left md:text-left">
                        <p className="text-black font-rebond text-[18px] not-italic font-light leading-normal">VISIT US</p>
                        <p className='text-black font-rebond text-[18px] not-italic font-semibold leading-normal'>100 Sutherland Road,</p>
                        <p className='text-black font-rebond text-[18px] not-italic font-semibold leading-normal'>Boston, MA 02135</p>
                    </div>
                    <div className='lg:text-right md:text-left text-left'>
                        <p className="text-black font-rebond text-[18px] not-italic font-light leading-normal">FOLLOW US</p>
                        <div className="flex gap-2 lg:justify-end md:justify-start">
                            <div className="w-[110px] h-[37px] flex justify-center items-center rounded-[10px] bg-black ">
                                <p className="text-[#2AFFAA] font-rebond text-[14px] not-italic font-medium leading-normal">
                                    INSTAGRAM
                                </p>
                            </div>

                            <SocialIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.282.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.598.92 2.5 2.5 0 0 1-.92.598c-.283.11-.706.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.92c-.11-.282-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.232s.008-2.389.046-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047zM8 3.882a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zm0 6.772a2.664 2.664 0 1 1 0-5.328 2.664 2.664 0 0 1 0 5.328zM12.317 3.707a.936.936 0 1 0 0 1.872.936.936 0 0 0 0-1.872z" /></svg>
                            </SocialIcon>
                            <SocialIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05S0 3.603 0 8.049c0 4.142 3.268 7.58 7.437 7.994.545.1.732-.236.732-.524v-1.84c-3.14.682-3.8-1.524-3.8-1.524-.495-1.258-1.2-1.593-1.2-1.593-.986-.674.074-.66.074-.66 1.09.076 1.666 1.11 1.666 1.11.97 1.666 2.543 1.183 3.16.903.1-.7.378-1.183.682-1.457-2.41-.274-4.943-1.207-4.943-5.36 0-1.183.422-2.15 1.11-2.906-.11-.274-.48-1.37.104-2.863 0 0 .91-.29 2.986 1.11a10.3 10.3 0 0 1 2.712-.363c.91.003 1.83.123 2.712.363 2.076-1.4 2.984-1.11 2.984-1.11.586 1.493.216 2.589.106 2.863.69.756 1.11 1.723 1.11 2.906 0 4.163-2.535 5.08-4.955 5.35.39.336.732.997.732 2.01v2.983c0 .29.186.628.738.524C12.732 15.626 16 12.187 16 8.049z" /></svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-8'>
                    <img src="/assets/images/karm3.png" alt="Logo" className='md:h-[181px] lg:h-[432px]' />
                </div>

                <div className="flex flex-wrap justify-between items-center gap-4 text-sm">
                    <p>
                        <a href="#" className="hover:underline font-medium text-[7px] md:text-[20px] lg:text-[20px] leading-[100%] tracking-[0]">Privacy Policy</a>
                    </p>
                    <p className='font-rebond font-medium text-[7px] md:text-[20px] lg:text-[20px] leading-[100%] tracking-[0]'>&copy; karmlabs 2025. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer